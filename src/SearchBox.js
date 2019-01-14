import React from 'react';
import './SearchBox.css';

// class SearchBox extends Component {
const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--orange bg-lightest-blue'
        // id='mySearchBox'
        type='search'
        placeholder='Search Robots...'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;