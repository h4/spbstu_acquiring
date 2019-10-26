class User {
  constructor({firstName, lastName}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isLogged = false;
  }

  login = () => {
    this.isLogged = true;
  };

  logout = () => {
    this.isLogged = false;
  };

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = new User({firstName: 'John', lastName: 'Doe'});

export default john;
