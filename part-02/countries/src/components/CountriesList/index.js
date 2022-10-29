function CountriesList({ countries, onClick }) {
  return (
    <ul>
      {countries.map((country, index) => (
        <li key={country.name.official}>
          {country.name.common}
          <button onClick={() => onClick(index)}>show</button>
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;
