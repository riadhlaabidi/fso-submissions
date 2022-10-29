import ContactDetails from "../ContactDetails";
import "./contact-list.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p className="not-found">No contact found.</p>
      ) : (
        contacts.map((contact) => (
          <ContactDetails
            key={contact.id}
            {...contact}
            onClick={() => handleDelete(contact)}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
