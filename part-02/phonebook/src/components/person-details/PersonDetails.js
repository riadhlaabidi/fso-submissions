import "./PersonDetails.css";

const PersonDetails = ({ name, number }) => {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{number}</p>
    </div>
  );
};

export default PersonDetails;
