import { Component } from 'react';

export default class HomeClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  buttonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>Home Class</h1>
        <div>
          <button onClick={this.buttonClick}>Click</button>
        </div>
        <div>{this.state.count}</div>
      </>
    );
  }
}
