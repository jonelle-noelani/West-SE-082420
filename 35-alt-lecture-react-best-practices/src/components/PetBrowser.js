import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  // ADOPT EVERY 5 SECs
  componentDidMount() {
    setInterval(() => {
      console.log('randomly adopting a pet!');

      const a = Math.floor(Math.random() * this.props.pets.length);
      const b = this.props.pets[a].id;

      this.props.onAdoptPet(b);
    }, 2000);
  }
  // SHOW DIFFERENCE BETWEEN COMPARING PREVPROPS AND NOT COMPARING
  // KEEPS PRINTING VS ONLY PRINTS ONCE
  componentDidUpdate(prevProps, _prevState) {
    const allAdopted = this.props.pets.find(pet => !pet.isAdopted) === undefined;
    const prevNotAdopted = prevProps.pets.find(pet => !pet.isAdopted) !== undefined;

    if (allAdopted && prevNotAdopted) {
      alert('You snooze you lose!');
    }
  }

  render() {
    return <div className="ui cards">
      {this.props.pets.map(c => <Pet pet={c} key={c.id} onAdoptPet={this.props.onAdoptPet} />)}
    </div>
  }
}

export default PetBrowser
