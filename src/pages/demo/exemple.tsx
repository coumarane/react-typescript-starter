import * as React from "react";
import { IContact } from "../../models/contact";

export const ExempleDemo: React.FC = props => {
  const spreadObject: IContact = {
    id: 1,
    name: "Kumar",
    email: "c.coumarane@gmail.com",
    dateOfBirth: "24/07/1975"
  };
  const newContact = { ...spreadObject, name: "Coumarane" };

  const arr: string[] = ["Kumar", "Coumarane", "Helios"];
  const newArr = [...arr, "Karma"];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <b>Object destructuring:</b>
          <br />
          {/* <code>
          const spreadObject: IContact = {
            id: 1,
            name: "Kumar",
            email: "c.coumarane@gmail.com",
            dateOfBirth: "24/07/1975"
          };
          const newContact = { ...spreadObject, name: "Coumarane" };
          </code> */}
          <p>
            Name: {newContact.name}<br />
            Email: {newContact.email}
          </p>
          <hr />
          <b>Array destructuring:</b>
          <br />
          <code>
          const arr: string[] = ["Kumar", "Coumarane", "Helios"];
          <br />
          const newArr = [...arr, "COUPPANE"];
          </code>
          <br />
          {newArr.join(" // ")}
          <hr />
          <b>Arrow function:</b>
         
          <br />
          <code>
            arr.map((item, index) => item);
          </code>
          <ul>
          {arr.map((item, index) => (
            <React.Fragment key={index}>
            <li>{item}</li>
            </React.Fragment>
          ))}
          </ul>
          
        </div>
      </div>
    </>
  );
};
