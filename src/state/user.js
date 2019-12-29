class User {
  constructor({firstName, lastName}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isLogged = false;
  }

  login = (loginData) => {
    localStorage.setItem('token', JSON.stringify(loginData.tokenInfo));
    this.isLogged = true;
  };

  logout = () => {
    this.isLogged = false;
  };

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  update(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const john = new User({firstName: 'John', lastName: 'Doe'});

export default john;
