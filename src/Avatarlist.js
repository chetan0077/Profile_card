import React from 'react';
import './Avatar.css';

const Avatarlist = (props) =>{
    return (
        <div className="header">
        <div className="main ma4 bg-light-purple dib pa3 grow shadow-4 tc">
           <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
           <h1 className="">{props.name}</h1>
         <p> {props.work}</p>
        </div>
        </div>

    )
}
export default Avatarlist;