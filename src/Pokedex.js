import React, { Component } from "react";
import Pokecard from "./Pokecard";

import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h2 className="Winner">Winner</h2>;
    } else {
      title = <h2 className="Loser">Loser</h2>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4 className="Total">
          Total Experience: <span>{this.props.exp}</span>
        </h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
