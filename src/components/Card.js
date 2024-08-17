import './Card.css';

function Card(props){
    return(
        <div className='card_outside'>
            <div className='card_img_outside'>
                <img src="../images/751ba33aa0d7fa4da574d68b995070bb.jpg"></img>
            </div>
            <p id="car_rate">{props.rate}</p>
            <p id="car_name">{props.namee}</p>
            <p id="car_description">{props.desc}</p>
            <button id="delete_btn">Delete Btn</button>
        </div>
    )
}

export default Card;