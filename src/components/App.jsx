import React from "react";
import TamaControl from "./TamaControl";


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      tamaHunger: 10,
      tamaBathroom: 10,
      tamaEnergy: 10,
      tamaHappy: 10,
      dead: false
    }
    this.isDead = this.isDead.bind(this);
    this.handleTamaAction = this.handleTamaAction.bind(this);
  }

  isDead() {
    if(this.state.tamaHunger <= 0 || this.state.tamaEnergy <= 0) {
      this.setState({
        dead: true
      });
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    this.tamaLifecycle = setInterval(() => {
        if (this.isDead()) {
          clearInterval(this.tamaLifecycle);
        } else {
          this.updateTamaCondition();
        }
      }, 5000 );
  }

  updateTamaCondition() {
    let newTamaHungerState = this.state.tamaHunger - 1;
    let newTamaBathroomState = this.state.tamaBathroom - 0.5;
    let newTamaEnergyState = this.state.tamaEnergy - 2;
    let newTamaHappyState = this.state.tamaHappy - 0.25;
    this.setState({
      tamaHunger: newTamaHungerState,
      tamaBathroom: newTamaBathroomState,
      tamaEnergy: newTamaEnergyState,
      tamaHappy: newTamaHappyState,
    });
    console.log(this.state.tamaHunger);
    console.log(this.state.tamaBathroom);
    console.log(this.state.tamaEnergy);
    console.log(this.state.tamaHappy);
  }

  handleTamaAction(action) {
    console.log(action + ' was triggered');
    let key = 'tama'+ action;
    this.setState({[key] : 10});
    console.log('Current value of ' + key + ':' + this.state[key]);
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <TamaControl
          onClickAction = {this.handleTamaAction} />
      </div>
    );
  }

}

export default App;
