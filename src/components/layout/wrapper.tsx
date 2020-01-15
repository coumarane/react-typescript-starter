import * as React from "react";

interface IOwnProps {
  title: string;
}

export class Wrapper extends React.Component<IOwnProps> {
  render() {
    return (
      <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        {/* <div className="row" style={{ paddingTop: "2px" }}>
              <div className="col-md-12">{``}</div>
            </div> */}
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">{this.props.title}</h1>
        </div>
        <div className="row" style={{ paddingTop: "50px" }}>
          <div className="col-md-12">{``}</div>
        </div>

        {this.props.children}
      </div>
    );
  }
}
