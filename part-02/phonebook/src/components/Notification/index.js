import "./notification.css";

const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={`alert ${type}`}>
      {message}
      {type === "success" && <span className="tick">&#10003;</span>}
    </div>
  );
};

export default Notification;
