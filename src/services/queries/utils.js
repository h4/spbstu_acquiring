import {gql} from 'apollo-boost';

const GET_CAPTCHA_ID = gql`
  mutation getCaptchaID($sessionToken: String!) {
    getCaptchaID(sessionToken: $sessionToken)
  }
`;

const GET_CAPTCHA = gql`
  mutation getCaptcha($captchaID: String!, $reload: Boolean!) {
    getCaptcha(captchaID: $captchaID, reload: $reload)
  }
`;

export {GET_CAPTCHA_ID, GET_CAPTCHA};

