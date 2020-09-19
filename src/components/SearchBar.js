import React, { useState } from 'react';

const SearchBar = (props) => {

  const [term, setTerm] = useState();

  return (
  <div className="search-bar ui segment">
    <form onSubmit={e=> e.preventDefault} className="ui form">
      <div className="field">
        <label>Video Search</label>
        <input
          type="text"
          value={term}
          onChange={e=> setTerm(e.target.value)}
        />
      </div>
    </form>
  </div>
  );
}

export default SearchBar;
