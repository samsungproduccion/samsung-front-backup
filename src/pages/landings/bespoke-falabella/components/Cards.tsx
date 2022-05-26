import { cardItem } from "../includes/cards";

const Cards = () => {
   
  return(
    <div className="card-container">
        {
            cardItem?
                cardItem.map((card) =>(
                    <div className="card">
                        <div className="card-image">
                            <img src={card.image} alt={card.alt} />
                        </div>
                        <div className="card-info">
                            <h4 className="card-title">{card.title}</h4>
                            <a className="card-button" href={card.url}>Compra aquí</a>
                        </div>
                    </div>
                ))
                : null
        }
    </div>
  );
}

export default Cards;