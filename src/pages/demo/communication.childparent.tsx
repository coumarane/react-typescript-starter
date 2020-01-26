import * as React from "react";
import { IContact } from "../../models/contact";

/************** Child **************** */
interface IOwnProps {
  sendNewContact: (contact: IContact) => void;
}

const Child: React.FunctionComponent<IOwnProps> = props => {
  const handleContactChange = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactModified: IContact = {
      id: 2,
      name: "Kumar",
      email: "coumarane.couppane@devoteam.com",
      dateOfBirth: "00/00/0000"
    };
    console.log(`contactModified: ${JSON.stringify(contactModified)}`)
    props.sendNewContact(contactModified);
  };

  return (
    <>
      <p>
        Contact edited:<br />
        <button onClick={handleContactChange}>Update parent state</button>
      </p>
    </>
  );
};

/************* Parent ***************** */
interface IDisplayProps {
  contact: IContact;
}
const DisplayContact: React.FunctionComponent<IDisplayProps> = props => {
  const { contact } = props;
  return (
    <>
      <p>
        Name: {contact.name}
        <br />
        Email: {contact.email}
        <br />
        Date of birth: {contact.dateOfBirth}
        <br />
      </p>
    </>
  );
};

interface IOwnState {
  contact: IContact;
}

class ChildToParent extends React.Component<{}, IOwnState> {
  constructor(props: {}) {
    super(props);

    const initialState: IContact = {
      id: 0,
      name: "",
      email: "",
      dateOfBirth: ""
    };

    this.state = {
      contact: initialState
    };
  }

  componentDidMount() {
    this.getContact();
  }

  /**
   * Retrieve contact by its id from back-end
   */
  getContact = () => {
    // fake data
    const apiGetContact: IContact = {
      id: 1,
      name: "Coumarane COUPPANE",
      email: "c.coumarane@gmail.com",
      dateOfBirth: "24/07/1975"
    };
    this.setState({
      contact: apiGetContact
    });
  };

  // method handle update from child
  modifiedContact = (contact: IContact) =>  {
    this.setState({
      contact
    });
  }

  getContactFromChild = (contact: IContact) => {
    console.log(`child contact: ${contact}`)
    this.setState({
      contact
    });
  };

  render() {
    const { contact } = this.state;
    return (
      <>
        <div className="card">
          <div className="card-body">
            <p>
              <b>Child to parent Communication</b>
            </p>
            <div>
              <Child sendNewContact={this.modifiedContact} />
            </div>
            {contact && contact.id > 0 && <DisplayContact contact={contact} />}
            {contact.id === 0 && <div>Contact is empty :-) </div>}
          </div>
        </div>
      </>
    );
  }
}

export default ChildToParent;
