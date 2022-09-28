import "./search.css";

const Search = ({ query, onChange }) => {
  return (
    <input
      className="search-field"
      id="filter"
      onChange={onChange}
      value={query}
      placeholder="Search..."
    />
  );
};

export default Search;
