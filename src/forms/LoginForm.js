import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox, Row, Divider, Col} from 'antd';

import user from '../state/user';

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        user.login();
        this.setState({redirect: true});
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    if (this.state.redirect) {
      return <Redirect push to="/"/>
    }

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
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

        <Divider orientation="left">Are you not a bot?</Divider>

        <Form.Item>
          <Row gutter={16} type="flex" justify="space-between" align="middle">
            <Col sm={12} xs={24}><img src="img/captcha.jpg" style={{maxWidth: "100%"}} alt="captcha"/></Col>
            <Col sm={12} xs={24}>
              {getFieldDecorator('capthca', {
                rules: [{required: true, message: 'Please input text from image!'}],
              })(
                <Input
                  placeholder="Text on Image"
                />,
              )}
              <div>
                <Link to="">Reload Image</Link>
                <Divider type="vertical" />
                <Link to="">Play Sound</Link>
              </div>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Row gutter={16} type="flex" justify="space-between">
            <Col sm={12} xs={24}>
              {getFieldDecorator('remember', {
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
  }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default WrappedNormalLoginForm;