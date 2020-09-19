import React, { useState } from 'react';

const SearchBar = (props) => {

  const [term, setTerm] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={e => onFormSubmit(e)} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
