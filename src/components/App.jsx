import React from 'react';
import TamaControl from './TamaControl';
import Tama from './Tama';
import background from './../assets/tamagotchi-background.png';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      tamaHunger: 10,
      tamaBathroom: 10,
      tamaEnergy: 10,
      tamaHappy: 10,
      dead: false,
      eating: false,
      pooping: false,
      sleeping: false,
      playing: false
    };
    this.isDead = this.isDead.bind(this);
    this.checkIfPoopy = this.checkIfPoopy.bind(this);
    this.tamaSleep = this.tamaSleep.bind(this);
    this.handleTamaAction = this.handleTamaAction.bind(this);
    this.consoleLogState = this.consoleLogState.bind(this);
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

  checkIfPoopy() {
    if(this.state.tamaBathroom <= 0) {
      this.setState({
        pooping: true
      });
    }
  }

  componentDidMount() {
    this.tamaLifecycle = setInterval(() => {
      if (this.isDead()) {
        clearInterval(this.tamaLifecycle);
      } else {
        this.checkIfPoopy();
        this.updateTamaCondition();
      }
    }, 10000 );
  }

  tamaSleep(){
    this.setState({
      sleeping: true
    });
    setTimeout(() => {
      this.setState({
        sleeping: false
      });
    }, 3000 );
  }

  tamaFeed() {
    this.setState({
      eating: true
    });
    setTimeout(() => {
      this.setState({
        eating: false
      });
    }, 3000 );
  }

  tamaPlay() {
    this.setState({
      playing: true
    });
    setTimeout(() => {
      this.setState({
        playing: false
      });
    }, 3000 );
  }

  consoleLogState() {
    console.log(this.state);
  }


  updateTamaCondition() {
    let newTamaHungerState = this.state.tamaHunger - 1;
    let newTamaBathroomState = this.state.tamaBathroom - 2;
    let newTamaEnergyState = this.state.tamaEnergy - 0.5;
    let newTamaHappyState = this.state.tamaHappy - 0.25;
    this.setState({
      tamaHunger: newTamaHungerState,
      tamaBathroom: newTamaBathroomState,
      tamaEnergy: newTamaEnergyState,
      tamaHappy: newTamaHappyState,
    }, this.consoleLogState);
  }

  handleTamaAction(action) {
    if (action === 'Energy') {
      this.setState({ tamaEnergy : 10 }, this.consoleLogState);
      this.tamaSleep();
    } else if (action === 'Hunger') {
      this.setState({ tamaHunger : 10 }, this.consoleLogState);
      this.tamaFeed();
    } else if (action === 'Bathroom') {
      this.setState({
        tamaBathroom : 10,
        pooping: false
       }, this.consoleLogState);
    } else {
      this.setState({ tamaHappy : 10 }, this.consoleLogState);
      this.tamaPlay();
    }
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .tama-back {
            width: 400px;
            position: absolute;
            z-index: -1;
          }

          .tama-main {
            position: absolute;
            top: 170px;
            left: 107px;
          }
        `}</style>
        <img className="tama-back" src={background} alt="background"/>
        <div className="tama-main">
          <TamaControl
            onClickAction = {this.handleTamaAction} />
          <Tama currentState = {this.state}/>
        </div>
      </div>
    );
  }

}

export default App;
