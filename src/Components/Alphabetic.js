const Alphabetic = ({ filters, setFilters }) => {
  const handleSwitch = (event) => {
    // rentre true ou false dans le filters
    const newFilters = { ...filters };
    newFilters.alpha = event;
    setFilters(newFilters);
  };

  return (
    <div className="alphabetic">
      <p>A - Z</p>
      <div className="switch">
        <input
          type="checkbox"
          id="switch-1"
          className="switch-input"
          //   value={newAlpha}
          onClick={(elem) => handleSwitch(elem.target.checked)}
        />
        <label htmlFor="switch-1" className="switch-label">
          Switch
        </label>
      </div>
    </div>
  );
};

export default Alphabetic;
