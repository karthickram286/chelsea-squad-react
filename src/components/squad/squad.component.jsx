import React from 'react';
import './squad.styles.css';

export const Squad = (props) => {
    return (
        <div className="squad-container">
            <h1 key={ props.player.shirtNumber }>{ props.player.name }</h1>
            <img alt="player" src={ props.player.imgSrc }></img>
            <h3>{ props.player.position }</h3>
        </div>
    );
}