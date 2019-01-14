import React from 'react';
import './ShuffleBtn.css';

// class SearchBox extends Component {
const ShuffleBtn = ({ shuffleArray, array }) => {
  return (
    <div className='pa2'>
      <button 
        className='glow:hover glow:focus b--red'
        // type='submit'
        // placeholder='Shuffle Robots...'
        onClick={shuffleArray(array)}
        />
        Shuffle Robots...
    </div>
  )
}

export default ShuffleBtn;