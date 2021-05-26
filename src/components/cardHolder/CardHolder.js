import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const CardHolder = (props) =>{
    return (
        <div className="cardHolder d-flex flex-wrap">
            {props.children}
        </div>
    );
};

export default CardHolder;