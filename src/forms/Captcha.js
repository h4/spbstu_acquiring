import React, {useState, useEffect} from 'react';
import {useMutation} from '@apollo/react-hooks';

import {GET_CAPTCHA, GET_CAPTCHA_ID} from '../services/queries/utils';
import {Col, Divider, Input, Row} from 'antd';
import {Link} from 'react-router-dom';

const Captcha = ({form}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReloadRequested, requestReload] = useState(false);
  const [src, setSrc] = useState('');
  const [captchaId, setCaptchaId] = useState('');
  const [getCaptchaId, {errorCaptchaId}] = useMutation(GET_CAPTCHA_ID);
  const [getCaptcha, {errorCaptcha}] = useMutation(GET_CAPTCHA);

  useEffect(() => {
    if (!isLoaded) {
      getCaptchaId({
        variables: {
          sessionToken: "abcd"
        }
      }).then(({data}) => {
        const captchaID = data.getCaptchaID;

        setCaptchaId(captchaID);
        form.setFieldsValue({
          'captchaId': captchaID,
        });

        return getCaptcha({
          variables: {
            captchaID,
            reload: false
          }
        })
      }).then(({data: {getCaptcha}}) => {
        setSrc('data:image/png;base64,' + getCaptcha);
      }).catch(err => console.log(err));

      setIsLoaded(true);
    }
  }, [isLoaded, getCaptchaId, getCaptcha, src, captchaId, form]);

  useEffect(() => {
    if (isReloadRequested) {
      getCaptcha({
        variables: {
          captchaID: captchaId,
          reload: isReloadRequested
        }
      }).then(({data: {getCaptcha}}) => {
        setSrc('data:image/png;base64,' + getCaptcha);
      });

      requestReload(false);
    }
  }, [getCaptcha, src, captchaId, form, isReloadRequested]);

  const reloadClickHandler = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    requestReload(true);
    return false;
  };

  return (<div>
    <Row gutter={16} type="flex" justify="space-between" align="middle">
      <Col
        sm={12}
        xs={24}>
        <img
          src={src}
          style={{maxWidth: "100%"}}
          alt="captcha"/></Col>
      <Col sm={12} xs={24}>
        {form.getFieldDecorator('captcha', {
          rules: [{required: true, message: 'Please input text from image!'}],
        })(
          <Input
            autoComplete="off"
            placeholder="Text on Image"
          />,
        )}
        {form.getFieldDecorator('captchaId', {
          rules: [{required: true, message: 'Please input text from image!'}],
        })(
          <Input
            type='hidden'
          />,
        )}
        <div>
          <a href="#"
             onClick={reloadClickHandler}>Reload Image</a>
          <Divider type="vertical"/>
          <Link to="">Play Sound</Link>
        </div>
      </Col>
    </Row>
  </div>);
};

export default Captcha;
