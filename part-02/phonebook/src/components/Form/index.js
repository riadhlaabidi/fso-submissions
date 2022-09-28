import "./form.css";

const Form = ({ name, number, onNameChange, onNumberChange, onSubmit }) => {
  return (
    <div className="add-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={onNameChange}
          value={name}
          required
        />
        <label htmlFor="number">Number</label>
        <input
          type="text"
          id="number"
          onChange={onNumberChange}
          value={number}
          required
        />
        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};

export default Form;
