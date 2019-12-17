import * as React from "react";
import { IContact } from "../../models/contact";

interface IOwnProps {
  handleSaveContact: (contact: IContact) => void;
  editContact?: IContact;
}

const ContactCreation: React.FunctionComponent<IOwnProps> = (
  props: IOwnProps
) => {
  const initialContcatState: IContact = {
    id: 0,
    name: "",
    email: "",
    dateOfBirth: ""
  };
  
  // contact is a state variable
  const [contact, setContact] = React.useState(initialContcatState);

  // Similar to componentDidMount, componentDidUpdate and componentWillUnmount
  React.useEffect(() => {
    // Update document title via browser API
    if (contact.name !== "") {
      document.title = `The entered name is ${contact.name}`;
    }
  }, [contact.name]); // Execute the effect only if contact.name has changed

  React.useEffect(() => {
    if (props.editContact) {
      setContact(props.editContact!)
    }
  }, [props.editContact])

  const handleReset = () => {
    setContact(initialContcatState);
  }

  const handleSubmit = (
    e: any // React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    
    // console.log(`ContactCreation::handleSubmit=>contact ${JSON.stringify(contact)}`);
    props.handleSaveContact(contact);
    handleReset();
  };

  /**
   * Common input change event
   * When the field is entered an event is raised and update the state
   */
  const handleInputChange = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ): void => {
    e.preventDefault();

    const target = e.target as any;
    setContact(contact => ({ ...contact, [target.name]: target.value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card bg-light mb-3">
          <div className="card-header">New contact</div>
          <div className="card-body">
            <div className="card-text">
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contact.name}
                    placeholder="Enter name"
                    className="form-control"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={contact.email}
                    placeholder="Enter email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    required
                    onChange={handleInputChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group col-md-4">
                  <label>Date of birth</label>
                  <input
                    type="date"
                    max="2020-12-01"
                    min="1900-12-01"
                    name="dateOfBirth"
                    value={contact.dateOfBirth}
                    placeholder="Enter date of birth"
                    className="form-control"
                    required
                    onChange={handleInputChange}
                  />
                </div>

              </div>

              {contact.id > 0 && <input className="btn btn-outline-danger" type="submit" value="Update" />}{` `}
              {contact.id <= 0 && <input className="btn btn-outline-primary" type="submit" value="Save" />}{` `}
              <input className="btn btn-outline-warning" type="button" value="Reset" onClick={handleReset} />{` `}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactCreation;
