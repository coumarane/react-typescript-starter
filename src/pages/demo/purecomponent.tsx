import * as React from "react";

interface IDispProps {
  message: string;
}

class IAmPureComponent extends React.PureComponent<IDispProps> {
  // shouldComponentUpdate(nextProps: IDispProps, nextState: {}) {
  //   return this.props.message !== nextProps.message;
  // }

  render() {
    console.log(`IAmPureComponent...`);
    return (
      <>
        <span>{this.props.message}</span>;
      </>
    );
  }
}

interface IOwnState {
  date: string;
}
class PureComponentDemo extends React.Component<{}, IOwnState> {
  static counter = 0;

  constructor(props: {}) {
    super(props);
    this.state = {
      date: ""
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: `${new Date()}`
      });
    }, 1000);
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <p>
            <b>PureComponentDemo</b>
          </p>
          <p>
            Date : {this.state.date} <br />
            <IAmPureComponent message={"I am a Pure Component Demo"} />
          </p>
        </div>
      </div>
    );
  }

  handleUpdateState = () => {
    this.setState({});
  };
}

export default PureComponentDemo;
