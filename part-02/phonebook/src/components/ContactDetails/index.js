import { BsTrash } from "react-icons/bs";
import "./contact-details.css";

const ContactDetails = ({ name, number, onClick }) => {
  return (
    <div className="card">
      <div className="contact">
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className="delete-btn" onClick={onClick}>
        <BsTrash />
      </button>
    </div>
  );
};

export default ContactDetails;
