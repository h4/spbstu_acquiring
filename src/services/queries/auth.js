import {gql} from 'apollo-boost';

const LOGIN = gql`
  mutation SignInBasic($type: signDataBasic!) {
    signInBasic(input: $type) {
      tokenInfo {
        accessToken,
        tokenType,
        expiresAt,
      }
    }
  }
`;

const REGISTER = gql`
  mutation SignOnBasic($name: String!, $type: signDataBasic!) {
    signOnBasic(name: $name, input: $type) {
      accessToken,
      tokenType,
      expiresAt,
    }
  }
`;

export {LOGIN, REGISTER};
