import {gql} from 'apollo-boost';

const LOGIN = gql`
  mutation SignInBasic($type: signDataBasic!) {
    signInBasic(input: $type) {
      tokenInfo {
        accessToken,
      }
    }
  }

`;

export {LOGIN};
