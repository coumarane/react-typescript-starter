import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import ContactList from "../contact/contact.list";
import { IContact } from "../../models/contact";

interface IOwnState {
  contacts: IContact[];
}

type IUnionProps = RouteComponentProps<any>;

class Dashboard extends React.Component<IUnionProps, IOwnState> {
  constructor(props: IUnionProps) {
    super(props);

    // const [contacts, setContacts] = React.useState({});
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    const contacts: IContact[] = [
      {
        id: 1,
        name: "Coumarane COUPPANE",
        email: "c.coumarane@gmail.com",
        dateOfBirth: "24/07/1975"
      },
      {
        id: 2,
        name: "Helios",
        email: "helios@gmail.com",
        dateOfBirth: "01/07/2000"
      }
    ];

    this.setState({ contacts });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/#/">
            <i className="fab fa-home">{``}</i>React Typescript App
          </a>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      <i className="fas fa-home">{``}</i>Dashboard
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {/* <div className="row" style={{ paddingTop: "2px" }}>
              <div className="col-md-12">{``}</div>
            </div> */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <div className="row" style={{ paddingTop: "50px" }}>
              <div className="col-md-12">{``}</div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <button
                  className="btn btn-primary"
                  onClick={this.handleAddContact}
                >
                  Add contact
                </button>
              </div>
            </div>
            <ContactList datas={this.state.contacts} />
          </div>
        </div>
      </>
    );
  }

  handleAddContact = (e: React.MouseEvent) => {
    e.preventDefault();
    this.props.history.push("/contact/new");
  };
}

export default Dashboard;
