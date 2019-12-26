import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://po.meow.spbstu.ru/api/v1/query',
});

export {client};
