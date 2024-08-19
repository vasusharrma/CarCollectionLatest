import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import arr from "./data";

function App() {
  // const [toDel, setId] = useState([]);

  // const [values, setValues] = useState([false , false , false , false , false ,false]);

  const [values , setValues] = useState(new Set());

  // function setValuesFalse() {
  //   let tempArr = [];
  //   for (let i = 0; i < 6; i++) {
  //     tempArr.push(false);
  //   }

  //   setValues(tempArr);
  // }

  // setValuesFalse();
  // // let isDeleted1 = toDel.includes(0);``


  // function changeState(id) {
  //   const newValues = [...values];
  //   newValues[id] = true;
  //   setValues(...newValues);
  // }

  function changeState(id){
    let tompValue = new Set();
    tompValue.add(4);
    setValues(tompValue)
  }

   return (
    <div className="app_outside">
      <div className="app_title">CAR COLLECTION</div>
      <div className="app_car_collection">
        <Card
          obji={arr[0]}
          isDeleted={values[0]}
          changeState={changeState}
        ></Card>
        <Card
          obji={arr[1]}
          isDeleted={values[1]}
          changeState={changeState}
        ></Card>
        <Card
          obji={arr[2]}
          isdeleted={values[2]}
          changeState={changeState}
        ></Card>
        <Card
          obji={arr[3]}
          isdeleted={values[3]}
          changeState={changeState}
        ></Card>
        <Card
          obji={arr[4]}
          isdeleted={values.has(4)}
          changeState={changeState}
        ></Card>
        <Card
          obji={arr[5]}
          isdeleted={values[5]}
          changeState={changeState}
        ></Card>
      </div>
    </div>
  );
}

export default App;
