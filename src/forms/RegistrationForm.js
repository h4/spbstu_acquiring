import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Row, Col} from 'antd';

class RegisterForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
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
  }
}

const WrappedNormalRegisterForm = Form.create({name: 'normal_login'})(RegisterForm);

export default WrappedNormalRegisterForm;