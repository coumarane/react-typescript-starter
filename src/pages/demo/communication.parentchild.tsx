import * as React from "react";
import { IContact } from "../../models/contact";

/************** Child **************** */
interface IOwnProps {
  contact: IContact;
}
const DisplayContact: React.FunctionComponent<IOwnProps> = props => {
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

/************* Parent ***************** */
interface IOwnState {
  contact: IContact;
}

class ParentToChild extends React.Component<{}, IOwnState> {
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

  render() {
    const { contact } = this.state;
    return (
      <>
        <div className="card">
          <div className="card-body">
            <p>
              <b> Parent to child Communication</b>
            </p>
            {contact && contact.id > 0 && <DisplayContact contact={contact} />}
            {contact.id === 0 && <div>Contact is empty :-) </div>}
          </div>
        </div>
      </>
    );
  }
}

export default ParentToChild;
