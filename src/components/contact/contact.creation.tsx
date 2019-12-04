import * as React from "react";
import { IContact } from "../../models/contact";

const ContactCreation: React.FunctionComponent<{}> = () => {
  const initial: IContact = {
    id: 0,
    name: "",
    email: "",
    dateOfBirth: ""
  };
  const [contact, setContact] = React.useState(initial);

  const handleSubmit = (
    e: any // React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    console.log(`contact ${JSON.stringify(contact)}`);
  };

  /**
   * Common input change event
   * When enter input change event raise
   * This method store input value in model's property
   */
  const handleInputChange = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ): void => {
    e.preventDefault();

    const target = e.target as any;
    setContact(contact => ({ ...contact, [target.name]: target.value }));

    // const fieldType = (e.target as any).type;
    // const fieldName = (e.target as any).name;

    // let fieldValue: any;

    // const target = e.target as any;
    // switch (fieldType) {
    //   case 'checkbox':
    //     fieldValue = target.checked;
    //     break;
    //   case 'radio':
    //     fieldValue = (e.currentTarget as any).value === 'true' ? true : false;
    //     break;
    //   default:
    //     fieldValue = target.value;
    //     break;
    // }
    console.log(`contact ${JSON.stringify(contact)}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            onChange={handleInputChange}
            value={contact.name}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};


export default ContactCreation;