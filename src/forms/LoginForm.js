import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {Link, Redirect} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox, Row, Divider, Col, Alert} from 'antd';
import {LOGIN} from '../services/queries/auth'

import user from '../state/user';
import Captcha from './Captcha';

const LoginForm = ({form, onSubmit}) => {
  const [signInBasic, {error}] = useMutation(LOGIN);
  const handleSubmit = (form, onSubmit) => e => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        signInBasic({
          variables: {
            type: {
              username: values.username,
              password: values.password,
              sessionToken: ""
            }
          }
        }).then(onSubmit);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit(form, onSubmit)} className="login-form">
      {error && <div className="error">
        {error.graphQLErrors.map(({message}, i) => (
          <Alert key={i} message={message} type="error"/>
        ))}
      </div>}

      <Form.Item>
        {form.getFieldDecorator('username', {
          rules: [{required: true, message: 'Please input your username!'}],
        })(
          <Input
            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
            placeholder="Phone Number or Email"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {form.getFieldDecorator('password', {
          rules: [{required: true, message: 'Please input your Password!'}],
        })(
          <Input
            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>

      <Divider orientation="left">Are you not a bot?</Divider>

      <Form.Item>
        <Captcha form={form} />
      </Form.Item>

      <Form.Item>
        <Row gutter={16} type="flex" justify="space-between">
          <Col sm={12} xs={24}>
            {form.getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Button
              type="primary"
              htmlType="submit"
              block={true}
              className="login-form-button">
              Log in
            </Button>
          </Col>

          <Col sm={12} xs={24} style={{lineHeight: 1.6, marginTop: 10}}>
            <div>
              <Link to="/remember">Forgot Password?</Link>
            </div>
            <div>
              <Link to="/register">Register</Link>
            </div>
            <div><a href="http://lk.spbstu.ru/">Login with SPbPU ID</a></div>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  _onSuccess = ({data}) => {
    user.login(data.signInBasic);
    this.setState({redirect: true})
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/"/>
    }

    return <LoginForm form={this.props.form}
                      onSubmit={this._onSuccess}/>;
  }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default WrappedNormalLoginForm;