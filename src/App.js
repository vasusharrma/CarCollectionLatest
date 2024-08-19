import "./App.css";
import arr from "./data";
import Car from "./components/Car";
import { useState } from "react";

function App() {

  const [data , setData] = useState(arr);

  function handleDelete(id){

    const newData = data.filter((d)=> d.id !== id);
    setData(newData);
  }

  if(data.length === 0){
    return(
      <div className="app_outside">

        <h1>Please Tap Refresh To See Cars</h1>
        <button className="app_btn" onClick={()=>{
          setData(arr);
        }}>Refresh</button>

      </div>
    )
  }

   return (
    <div>
      <Car arr = {data} handleDelete = {handleDelete}></Car>
    </div>
  );
}

export default App;
