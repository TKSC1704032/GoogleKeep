import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./main.css"
import Header from "./components/header/Header";
import InputField from "./components/inputField/InputField";
import Card from "./components/card/Card";
import CardHolder from "./components/cardHolder/CardHolder"
function App() {

  const [name, setName] = useState({ title: "", message: "" });
  const [list, setList] = useState(JSON.parse(window.localStorage.getItem("messageList")));
  const changeState = (e) => {
    setName((preName) => {
      return ({ ...preName, [e.target.name]: e.target.value })
    });
  }
  const update = () => {
    if ((name.title === "") || (name.message === "")) {
      alert("Please complete your message");
    }
    else {
      const informStr = window.localStorage.getItem("messageList");
      const inform = JSON.parse(informStr);
      if (informStr === null) {
        const informAry = [];
        informAry.push(name);
        console.log(inform);
        window.localStorage.setItem('messageList', JSON.stringify(informAry));
        setList(informAry);
      }
      else {
        inform.push(name);
        window.localStorage.setItem('messageList', JSON.stringify(inform));
        console.log(inform);
        setList(inform);
      }

      setName({ title: "", message: "" });
    }
  }
  list&&window.localStorage.setItem("messageList", JSON.stringify(list));
  const deleteData = (index) => {
    setList(
      list.filter(
        (val, ind) => {
          return ind !== index;
        }
      )
    );

  }

  return (
    <>
      <Header />
      <InputField changeState={changeState} name={name} update={update} />
      <CardHolder>
        
        {
          list && list.map((value, index) => {
            return (
              <Card key={index} index={index} cardValue={value} deleteData={deleteData} />
            );
          })
        }
      </CardHolder>
    </>

  );
}

export default App;
