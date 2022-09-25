import PersonDetails from "../person-details/PersonDetails";
import "./ContactList.css";

const ContactList = ({ entries }) => {
  return (
    <div className="contact-list">
      {entries.length === 0 ? (
        <p className="not-found">No contact found.</p>
      ) : (
        entries.map((entry) => <PersonDetails key={entry.name} {...entry} />)
      )}
    </div>
  );
};

export default ContactList;
