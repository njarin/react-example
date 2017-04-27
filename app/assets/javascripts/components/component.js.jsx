class HelloMessage extends React.Component {
  componentWillMount() {
    console.log("HIT IT!")
  }
  render() {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  };
  componentDidMount() {
    console.log("Lifecycle is real")
  }
}
