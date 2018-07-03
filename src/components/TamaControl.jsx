import React from 'react';
import PropTypes from 'prop-types';
import levels from './../assets/levels.png';
import food from './../assets/food.png';
import bathroom from './../assets/bathroom.png';
import play from './../assets/play.png';
import sleep from './../assets/sleep.png';
import Button from './Button';

function TamaControl(props) {
  let buttonArray = [
    {
      name: 'Hunger',
      img: food
    },
    {
      name: 'Bathroom',
      img: bathroom
    },
    {
      name: 'Happy',
      img: play
    },
    {
      name: 'Energy',
      img: sleep
    }
  ];

  function handleNewClickEvent(buttonName) {
    props.onClickAction(buttonName);
  }

  return(
    <div>
      <style jsx>{`
        button {
          background-color: transparent;
          border: none;
        }
        img {
          width: 20px;
        }
      `}</style>
      <button>
        <img src={levels} alt="button" />
      </button>
      {buttonArray.map((button,index) =>
        <Button
          onNewClickEvent = {handleNewClickEvent}
          img = {button.img}
          name = {button.name}
          key = {index}
        />
      )}
    </div>
  );
}

TamaControl.propTypes = {
  onClickAction : PropTypes.func
};

export default TamaControl;
