import { cardItem } from "../includes/cards";

const Cards = () => {
   
  return(
    <div className="card-container">
        <div className="cards-head">
            <p>Elige tu BE<span>SPOKE</span> </p>
            <p className="phrase">Personaliza tu estilo</p>
        </div>
        <div className="cards">
        {
            cardItem?
                cardItem.map((card, i) =>(
                    <div key={i} className="card">
                        <div  className="card-image">
                            <img src={card.image} alt={card.alt} />
                        </div>
                        <div className="card-info">
                            <h4 className="card-title">{card.title}</h4>
                            <a className="card-button" href={card.url} target="_blank" >COMPRA AQUÍ</a>
                        </div>
                    </div>
                ))
                : null
        }

        </div>
    </div>
  );
}

export default Cards;