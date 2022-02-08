import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomUser: [],
      selected: "name",
    };
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          randomUser: this.state.randomUser.concat(data.results[0]),
        })
      );
  }

  handleRandomUser = () => {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((data) => this.setState({ randomUser: [data.results[0]] }));
  };

  handleUI = (value) => {
    switch (value) {
      case "name":
        return <Name randomUser={this.state.randomUser} />;
      case "email":
        return <Email randomUser={this.state.randomUser} />;
      case "birth":
        return <Age randomUser={this.state.randomUser} />;
      case "address":
        return <Address randomUser={this.state.randomUser} />;
      case "phone":
        return <Phone randomUser={this.state.randomUser} />;
      case "password":
        return <Password randomUser={this.state.randomUser} />;
    }
  };

  handleComponent = (value) => {
    this.setState({
      selected: value,
    });
  };

  render() {
    return (
      <>
        <div className="top">
          <div className="content-box">
            <div className="img-container">
              <img
                src={
                  this.state.randomUser[0]
                    ? this.state.randomUser[0].picture.medium
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="title"
              />
            </div>

            <h2>{this.handleUI(this.state.selected)}</h2>
            <div className="icons">
              <i
                onMouseOver={() => this.handleComponent("name")}
                className="fas fa-user"
              ></i>
              <i
                onMouseOver={() => this.handleComponent("email")}
                className="fas fa-envelope"
              ></i>
              <i
                onMouseOver={() => this.handleComponent("birth")}
                className="fas fa-calendar-times"
              ></i>
              <i
                onMouseOver={() => this.handleComponent("address")}
                className="fas fa-map"
              ></i>
              <i
                onMouseOver={() => this.handleComponent("phone")}
                className="fas fa-phone-square"
              ></i>
              <i
                onMouseOver={() => this.handleComponent("password")}
                className="fas fa-lock"
              ></i>
            </div>

            <button onClick={() => this.handleRandomUser()}>Random User</button>
          </div>
        </div>
      </>
    );
  }
}

class Name extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>My Name is</p>
        <h1>
          {this.props.randomUser[0]
            ? `${this.props.randomUser[0].name.first} ${this.props.randomUser[0].name.last}`
            : "Fetching..."}
        </h1>
      </>
    );
  }
}

class Email extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>My Email is</p>
        <h1>
          {this.props.randomUser[0]
            ? this.props.randomUser[0].email
            : "Fetching..."}
        </h1>
      </>
    );
  }
}

class Age extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>My Age is</p>
        <h1>
          {this.props.randomUser[0]
            ? this.props.randomUser[0].dob.age
            : "Fetching..."}
        </h1>
      </>
    );
  }
}

class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>My Address is</p>
        <h1>
          {this.props.randomUser[0]
            ? ` ${this.props.randomUser[0].location.street.name} ${this.props.randomUser[0].location.city} ${this.props.randomUser[0].location.state} ${this.props.randomUser[0].location.country}`
            : "Fetching..."}
        </h1>
      </>
    );
  }
}

class Phone extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>My Phone No is</p>
        <h1>
          {this.props.randomUser[0]
            ? this.props.randomUser[0].phone
            : "fetching..."}
        </h1>
      </>
    );
  }
}

class Password extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>My Password No is</p>
        <h1>
          {this.props.randomUser[0]
            ? this.props.randomUser[0].login.password
            : "fetching..."}
        </h1>
      </>
    );
  }
}

export default App;
