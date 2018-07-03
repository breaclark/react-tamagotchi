import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {

  function handleButtonClick(buttonName) {
    props.onNewClickEvent(buttonName);
  }

  return (
    <button onClick={() => handleButtonClick(props.name)}>
      <style jsx>{`
        button {
          background-color: transparent;
          border: none;
        }
      `}</style>
      <img src={props.img} alt="button" />
      <p>{props.name}</p>
    </button>
  );
}

Button.propTypes = {
  name : PropTypes.string,
  img: PropTypes.string,
  onNewClickEvent : PropTypes.func
};

export default Button;
