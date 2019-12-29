import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
  uri: 'https://po.meow.spbstu.ru/api/v1/query',
  request: (operation) => {
    const token = JSON.parse(localStorage.getItem('token'));
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token.accessToken}` : ''
      }
    })
  }
});

export {client};
