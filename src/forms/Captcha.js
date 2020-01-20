import React, {useState, useEffect} from 'react';
import {useMutation} from '@apollo/react-hooks';

import {GET_CAPTCHA, GET_CAPTCHA_ID} from '../services/queries/utils';

const Captcha = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [getCaptchaId, {errorCaptchaId}] = useMutation(GET_CAPTCHA_ID);
  const [getCaptcha, {errorCaptcha}] = useMutation(GET_CAPTCHA);

  useEffect(() => {
    if (!isLoaded) {
      getCaptchaId({
        variables: {
          sessionToken: "abc"
        }
      }).then(({data}) => {
        const captchaID = data.getCaptchaID;
        console.log(data, captchaID);

        return getCaptcha({
          variables: {
            captchaID,
            reload: false
          }
        })
      }).then(({data: {getCaptcha}}) => {
        const canvas = document.getElementById('canvas');
        console.log(getCaptcha);
        const url = URL.createObjectURL(new Blob([atob(getCaptcha)], {type: 'application/octet-binary'}));

        canvas.src = url;
      }).catch(err => console.log(err));
      setIsLoaded(true);
    }
  }, [isLoaded, getCaptchaId, getCaptcha]);

  return (<div>
    CAPTCHA
    <img id='canvas'/>
  </div>);
};

export default Captcha;
