import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Form, Icon, Input, Button, Row, Col, Alert} from 'antd';
import {REGISTER} from '../services/queries/auth';
import user from '../state/user';
import {useMutation} from '@apollo/react-hooks';
import Captcha from './Captcha';


const RegisterForm = ({form, onSubmit}) => {
  const [signOnBasic, {error}] = useMutation(REGISTER);
  const {getFieldDecorator} = form;
  const handleSubmit = (form, onSubmit) => e => {
    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        signOnBasic({
          variables: {
            name: 'Some Name',
            type: {
              username: values.username,
              password: values.password,
              idCaptcha: values.captchaId,
              codeCaptcha: values.captcha,
              sessionToken: ""
            }
          }
        })
      }
    }).then(onSubmit);
  };

  return (
    <Form onSubmit={handleSubmit(form, onSubmit)} className="login-form">
      {error && <div className="error">
        {error.graphQLErrors.map(({message}, i) => (
          <Alert key={i} message={message} type="error"/>
        ))}
      </div>}

      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{required: true, message: 'Please input your username!'}],
        })(
          <Input
            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
            placeholder="Phone Number or Email"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{required: true, message: 'Please input your Password!'}],
        })(
          <Input
            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>

      <Form.Item>
        <Captcha form={form} />
      </Form.Item>

      <Form.Item>
        <Row gutter={16} type="flex" justify="space-between">
          <Col sm={12} xs={24}>
            <Button
              type="primary"
              htmlType="submit"
              block={true}
              className="login-form-button">
              Register
            </Button>
          </Col>

          <Col sm={12} xs={24} style={{lineHeight: 1.6}}>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div><a href="http://lk.spbstu.ru/">Login with SPbPU ID</a></div>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

class NormalRegisterForm extends React.Component {
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

    return <RegisterForm form={this.props.form}
                         onSubmit={this._onSuccess}/>;
  }
}

const WrappedNormalRegisterForm = Form.create({name: 'normal_register'})(NormalRegisterForm);

export default WrappedNormalRegisterForm;