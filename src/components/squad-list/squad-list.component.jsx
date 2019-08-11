import React from 'react';
import { Squad } from '../squad/squad.component';
import './squad-list.styles.css'

export const SquadList = (props) => {
    return (
        <div className="squad-list">
            {
                props.players.map(player => (
                    <Squad key={ player.shirtNumber } player={ player }/>
                ))
            }
        </div>
    );
}