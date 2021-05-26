import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./card.css"
const Card = (props) => {
    return (
        <div className="card col-lg-4 col-md-6 col-12" >
            <div className="card-body">
                <h5 className="card-title" contentEditable="true" >{props.cardValue.title}</h5>
                <p className="card-text" contentEditable="true">{props.cardValue.message}</p>
                <button className="btn btn-primary" onClick={()=>{props.deleteData(props.index)}}>Remove</button>
            </div>
        </div>


    );
};

export default Card;