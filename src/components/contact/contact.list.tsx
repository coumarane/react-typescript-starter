import * as React from "react";
import { IContact } from "../../models/contact";

interface IOwnProps {
 datas: IContact[];
 handleDelete: (id: number) => (e: React.MouseEvent) => void;
 handleEdit: (id: number) => (e: React.MouseEvent) =>  void;
}

const ContactList: React.FunctionComponent<IOwnProps> = (props) => {

  return (
    <>
      <h6>Contact list</h6>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of birth</th>
              <th>Actions</th>
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
                      <th>
                        <i className="fa fa-edit" onClick={props.handleEdit(item.id)} style={{color: '##0d903c', cursor: 'pointer'}}>&nbsp;</i> | <i className="fa fa-trash" onClick={props.handleDelete(item.id)} style={{color: 'red', cursor: 'pointer'}}>&nbsp;</i>
                        </th>
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
