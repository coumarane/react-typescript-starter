import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import ContactList from "./contact.list";
import { IContact } from "../../models/contact";
import ContactCreation from "./contact.creation";
import ContactLocalStorageService from "../../services/contactLocalStorageService";
import { Wrapper } from "../../components/layout/wrapper";

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
    this.loadContacts(); // server back end qui récupère api rest
  }

  

  render() {
    return (
      <>
        <Wrapper title={"Contact"}>
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
        </Wrapper>
      </>
    );
  }

  renderDeleteAllButton = () => {
    const { contacts } = this.state;
    if (contacts && contacts.length > 0) {
      return (
        <>
          <div className="row">
            <div className="col-md-12" style={{ marginBottom: "10px" }}>
              <button
                className="btn btn-warning"
                onClick={this.handleDeleteAll}
              >
                Delete all
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return null;
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
