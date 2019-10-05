import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox, Row} from 'antd';

class NormalLoginForm extends React.Component {
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
              placeholder="Username"
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
          <Row type="flex" justify="space-between">
            <div>
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
            </div>

            <div style={{lineHeight: 1.6, marginTop: 10}}>
              <div>
                <Link to="/remember">Forgot Password?</Link>
              </div>
              <div>
                <Link to="/register">Register</Link>
              </div>
              <div><a href="http://lk.spbstu.ru/">Login with SPbPU ID</a></div>
            </div>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default WrappedNormalLoginForm;