import './Card.css';

function Card(props){
    let cardObj = props.obji;

    function handleClick(){
        console.log("clicked");
        props.changeState(cardObj.id)
    }


    return(
        <div className={`card_outside ${props.isDeleted?'inactive':""}`}>
            <div className='card_img_outside'>
                <img id='card_img' src={cardObj.image} alt="car"></img>
            </div>
            <p id="car_rate">$ {cardObj.rate}</p>
            <p id="car_name">{cardObj.namee}</p>
            <p id="car_description">{cardObj.desc}</p>
            <button id="delete_btn" onClick={handleClick}>Delete Btn</button>
        </div>
    )
}

export default Card;