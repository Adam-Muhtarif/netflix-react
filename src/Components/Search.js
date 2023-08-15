export default function Search({setMovieName}) {
  return (
    <div className="search-section">
      Search for your favorite shows
      <div className="search-input">
        <input
          onChange={(e) => setMovieName(e.target.value)}
          className="search-box"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
