import PropTypes from 'prop-types';
import { useState } from 'react';
import arrowSvg from '../style/assets/icons/arrow-dropdown.svg';

Dropdown.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  items: PropTypes.array,
};

function Dropdown({ title, text, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className='dropdown'>
      <button className='dropdown__button' onClick={toggleDropdown}>
        {title}
        <img
          src={arrowSvg}
          alt='Arrow icon'
          className={`dropdown__icon ${isOpen ? 'rotate' : ''}`}
        />
      </button>
      <div className={`dropdown__content ${isOpen ? 'open' : ''}`}>
        {text && <p>{text}</p>}
        {items && (
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
