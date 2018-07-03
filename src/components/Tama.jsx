import React from 'react';
import PropTypes from 'prop-types';

import normal from './../assets/normal.gif';
import sleeping from './../assets/sleep.gif';
import playing from './../assets/happy.gif';
import eating from './../assets/eat.gif';

function Tama(props) {

  function currentAction() {
    if(props.currentState.sleeping === true) {
      return sleeping;
    } else if (props.currentState.eating === true) {
      return eating;
    } else if (props.currentState.playing === true) {
      return playing;
    } else {
      return normal;
    }
  }

  return(
    <img src={currentAction()} alt='tamagotchi'/>
  );
}

Tama.propTypes = {
  img: PropTypes.string
};

export default Tama;
