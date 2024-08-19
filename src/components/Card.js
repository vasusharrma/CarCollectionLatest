import { useState } from "react";
import "./Card.css";

function Card({id  , image , namee , rate , desc , handleDelete}) {
  const description = `${desc.substr(0, 170)}....`;
  const [readBtn, setReadBtn] = useState("read more");
  const [carDesc, setCarDesc] = useState(description);


  function handleReadMore() {
    const tempRead = readBtn === "read more" ? "read less" : "read more";
    const tempDesc = tempRead === 'read more'?`${description}`:`${desc}`;
    setCarDesc(tempDesc);
    setReadBtn(tempRead);
  }



  return (
    <div className={`card_outside`}>
      <div className="card_img_outside">
        <img id="card_img" src={image} alt="car"></img>
      </div>
      <p id="car_rate">$ {rate}</p>
      <p id="car_name">{namee}</p>
      <p id="car_description">
        {carDesc}
        <span id="read_more_btn" onClick={handleReadMore}>
          {readBtn}
        </span>
      </p>
      <button id="delete_btn" onClick={()=>{
        handleDelete(id);
      }}> 
        Delete Btn
      </button>
    </div>
  );
}

export default Card;
