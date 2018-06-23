import React, { Component } from 'react';
import './SearchInput.component.css';

class SearchInput extends Component {
  render() {
    const { onChange } = this.props;

    return (
      <div>
        <input
          className="search-field"
          placeholder="Search contacts"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default SearchInput;
