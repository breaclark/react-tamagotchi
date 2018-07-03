import React from 'react';
import PropTypes from 'prop-types';

import normal from './../assets/normal.gif';
import sleeping from './../assets/sleep.gif';
import playing from './../assets/happy.gif';
import eating from './../assets/eat.gif';
import dead from './../assets/die.gif';
import poop from './../assets/poop.gif';

function Tama(props) {

  function currentAction() {
    if (props.currentState.dead === true) {
      return dead;
    } else if (props.currentState.sleeping === true) {
      return sleeping;
    } else if (props.currentState.eating === true) {
      return eating;
    } else if (props.currentState.playing === true) {
      return playing;
    } else {
      if(props.currentState.pooping === true) {
        return poop;
      } else {
        return normal;
      }
    }
  }

  return(
    <div>
      <style jsx>{`
          img {
            width: 129px;
            margin-left: 12px;
          }
      `}</style>
      <img src={currentAction()} alt='tamagotchi'/>
    </div>

  );
}

Tama.propTypes = {
  img: PropTypes.string,
  currentState : PropTypes.object
};

export default Tama;
