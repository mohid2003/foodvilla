import React from 'react'
class ProfileClass3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("constructor Child's child");
  }

  componentDidMount() {
    console.log("componentDidMount Child's child");
  }

  render() {
    console.log("render Child's child");
    const { count } = this.state;
    return (
      <div>
        <h2>Profile Class Component</h2>
        <p>{this.props.name}</p>
        <p>{count}</p>
        <button
          onClick={() => {
            this.setState({
              count: Math.min(count + 1, 5),
            });
          }}>
          Add Count
        </button>
        <button
          onClick={() => {
            this.setState({
              count: Math.max(count - 1, 0),
            });
          }}>
          Minus Count
        </button>
        <button
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}>
          Reset Count
        </button>
      </div>
    );
  }
}

export default ProfileClass3;