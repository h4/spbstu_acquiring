import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Row, Col} from 'antd';

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
      <Form onSubmit={this.handleSubmit} className="forgot-password-form">
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
          <Row gutter={16} type="flex" justify="space-between">
            <Col sm={12} xs={24}>
              <Button
                type="primary"
                htmlType="submit"
                block={true}
                className="login-form-button">
                Remember Password
              </Button>
            </Col>

            <Col sm={12} xs={24} style={{lineHeight: 1.6}}>
              <div>
                <Link to="/">Login</Link>
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