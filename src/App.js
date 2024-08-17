import "./App.css";
import Card from "./components/Card";

function App(){
  const obj = {image:"./images/413d2894de2fae48f4523d65f4804aa4.jpg",
    rate:323332,
    namee:"Bugati",
    desc:"a all the way long in the props"
  }
  return(
    <div className="app_outside">
      <div className="app_title">
        CAR COLLECTION
        <Card image = {obj.image}  rate = {obj.rate} namee = {obj.namee} desc = {obj.desc}></Card>
      </div>
    </div>
  )
}


export default App;