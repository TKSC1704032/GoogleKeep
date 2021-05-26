import React from 'react';
import "./inputField.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const InputField = (props) => {
    return (
        <div className="inputBoxHolder" >
            <div className="inputBox">
                <input className="inputTitle" type="text" onChange={props.changeState} name="title" value={props.name.title} placeholder="Enter your project title"/><br /><br/>
                <textarea className="inputMessage" name="message" value={props.name.message} onChange={props.changeState} placeholder="Enter your project description"></textarea>
                <br /><br />
                <button className="btn btn-success" onClick={props.update}>Add</button>
            </div>
        </div>
    );
};

export default InputField;