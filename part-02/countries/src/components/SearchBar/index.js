function SearchBar({ value, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Find countries..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
