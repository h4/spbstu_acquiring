import {gql} from 'apollo-boost';

const GET_ME = gql`
  query {
    currentUser {name}
  }
`;

export {GET_ME};
