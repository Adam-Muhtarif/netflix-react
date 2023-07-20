export default function Search(props) {
  return (
    <div className="search-section">
      Search for your favorite shows
      <div className="search-input">
        <input
          onChange={(e) => props.searchMovie(e.target.value)}
          className="search-box"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
