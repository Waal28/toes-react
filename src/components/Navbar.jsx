import { Component } from "react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      user: {
        name: "Fahmi",
        age: 20,
      },
    };
  }
  render() {
    const { count, user } = this.state;

    return (
      <div>
        <h2>Navbar</h2>
        <h2>Count: {count}</h2>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Klik
        </button>
        <h2>User Name: {user.name}</h2>
        <h2>User Age: {user.age}</h2>
        <button
          onClick={() =>
            this.setState({ user: { ...user, age: user.age + 1 } })
          }
        >
          Tambah Umur User
        </button>
      </div>
    );
  }
}
