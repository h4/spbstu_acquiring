import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {Link, Redirect} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox, Row, Divider, Col} from 'antd';
import {LOGIN} from '../services/queries/auth'
import {AUTH_TOKEN} from '../constants'

import user from '../state/user';

const MyForm = ({form, onSubmit}) => {
  const [signInBasic, {data}] = useMutation(LOGIN);
  if (data) {
    console.log(data);
  }

  const handleSubmit = (form, onSubmit) => e => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        user.login();
        signInBasic({
          variables: {
            type: {
              username: values.username,
              password: values.password,
              sessionToken: ""
            }
          }
        }).then(onSubmit);

        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit(form, onSubmit)} className="login-form">
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
        <Row gutter={16} type="flex" justify="space-between" align="middle">
          <Col sm={12} xs={24}><img src="img/captcha.jpg" style={{maxWidth: "100%"}} alt="captcha"/></Col>
          <Col sm={12} xs={24}>
            {form.getFieldDecorator('capthca', {
              rules: [{required: true, message: 'Please input text from image!'}],
            })(
              <Input
                placeholder="Text on Image"
              />,
            )}
            <div>
              <Link to="">Reload Image</Link>
              <Divider type="vertical"/>
              <Link to="">Play Sound</Link>
            </div>
          </Col>
        </Row>
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

  _storeToken = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/"/>
    }

    return <MyForm form={this.props.form} onSubmit={(data) => {
      console.log(data);
      this.setState({redirect: true})
    }}/>;
  }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default WrappedNormalLoginForm;