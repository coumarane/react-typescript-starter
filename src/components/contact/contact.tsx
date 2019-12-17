import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import ContactList from "../contact/contact.list";
import { IContact } from "../../models/contact";
import ContactCreation from "../contact/contact.creation";
import ContactLocalStorageService from "../../services/contactLocalStorageService";

interface IOwnState {
  contacts: IContact[];
  editContact: IContact;
}

type IUnionProps = RouteComponentProps<any>;

class Contact extends React.Component<IUnionProps, IOwnState> {
  constructor(props: IUnionProps) {
    super(props);

    const initialContcatState: IContact = {
      id: 0,
      name: "",
      email: "",
      dateOfBirth: ""
    };

    // const [contacts, setContacts] = React.useState({});
    this.state = {
      contacts: [],
      editContact: initialContcatState
    };
  }

  componentDidMount() {
    this.loadContacts();
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/#/">
            <i className="fa fa-home">{``}</i>React Typescript App
          </a>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      <i className="fa fa-users">{``}</i>Users{` `}
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
              <h1 className="h2">Contact</h1>
            </div>
            <div className="row" style={{ paddingTop: "50px" }}>
              <div className="col-md-12">{``}</div>
            </div>
  
            
            <ContactCreation
              handleSaveContact={this.handleCreateOrUpdate}
              editContact={this.state.editContact}
            />
            
            <ContactList
              datas={this.state.contacts}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />

            {this.renderDeleteAllButton()}
          </div>
        </div>
      </>
    );
  }

  renderDeleteAllButton = () => {
    const { contacts } = this.state
    if (contacts && contacts.length > 0) {
      return (
        <>
          <div className="row">
            <div className="col-md-12" style={{ marginBottom: "10px" }}>
              <button className="btn btn-warning" onClick={this.handleDeleteAll}>
                Delete all
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return null
    }
  };


  loadContacts = () => {
    const dbcontacts = ContactLocalStorageService.fetchContacts();
    this.setState({ contacts: dbcontacts! });
  };

  handleCreateOrUpdate = (contact: IContact) => {
    if (contact.id > 0) {
      ContactLocalStorageService.updateContact(contact.id, contact);
    } else {
      ContactLocalStorageService.saveContact(contact);
    }
    // this.handleHideForm();
    this.loadContacts();
  };

  handleDelete = (id: number) => (e: React.MouseEvent) => {
    ContactLocalStorageService.deleteById(id);
    this.loadContacts();
  };

  handleEdit = (id: number) => (e: React.MouseEvent) => {
    const contact = ContactLocalStorageService.getById(id);
    if (contact) {
      // console.log(`handleEdit=>contact: ${JSON.stringify(contact)}`)
      this.setState({ editContact: contact });
    }
  };

  handleDeleteAll = () => {
    ContactLocalStorageService.clearData();
    this.loadContacts();
  };
}

export default Contact;
