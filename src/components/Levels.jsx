import React from 'react';
import PropTypes from 'prop-types';
import plain from './../assets/plain.png';

function Levels(props) {

  return(
    <div className="levels">
      <style jsx>{`
        .levels {
          display: flex;
          margin-left: 34px;
        }

        img {
          position: absolute;
          width: 129px;
          left: 12px;
          z-index: -1;
        }

        .bar {
          background-color: rgba(122, 122, 122, 0.7);
          width: 10px;
          margin: 9px;
        }
      `}</style>
      <img src = {plain} alt="background"/>
      <div className="bar" style={{height:props.currentState.tamaHunger*5+'px'}}></div>
      <div className="bar" style={{height:props.currentState.tamaBathroom*5+'px'}}></div>
      <div className="bar" style={{height:props.currentState.tamaHappy*5+'px'}}></div>
      <div className="bar" style={{height:props.currentState.tamaEnergy*5+'px'}}></div>
    </div>

  );
}

Levels.propTypes = {
  img: PropTypes.string
};

export default Levels;
