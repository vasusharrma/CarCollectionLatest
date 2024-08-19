import "./Car.css";
import Card from "./Card";

function Car({arr , handleDelete}) {
    console.log("i am car");
  return (
    <div className="car_outside">
      <div className="car_title">CAR COLLECTION</div>
      <div className="car_car_collection">
        {
            arr.map((car)=>{
                return <Card {...car} handleDelete = {handleDelete}></Card>
            })
        }
      </div>
    </div>
  );
}

export default Car;