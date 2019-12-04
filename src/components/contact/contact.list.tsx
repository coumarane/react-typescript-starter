import * as React from "react";
import { IContact } from "../../models/contact";

interface IOwnProps {
 datas: IContact[];
}

const ContactList: React.FunctionComponent<IOwnProps> = (props) => {
  // const [contacts, setContacts] = React.useState(datas);

  return (
    <>
     
      <h2>Contacts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of birth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.datas &&
              props.datas.length > 0 &&
              props.datas.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.dateOfBirth}</td>
                      <th>Delete</th>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactList;
