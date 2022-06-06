import { feature_list } from "../includes/features";


const Features = () => {
    
  return(
    <div className="features section">
        <div className="title">
            <p className="primary">La mejor tecnología</p>
            <p className="secundary">
                Innovación y calidad para mantener a tus alimentos y bebidas siempre frescos
            </p>
        </div>
        <div className="feature-list">
            {feature_list? 
                feature_list.map((feature, i) =>(
                    <div key={i} className="feature">
                        <div className="image">
                            <img src={feature.img} alt={feature.alt} />
                        </div>
                        <div className="info">
                            <h4 className="feature-title">{feature.title}</h4>
                            <p className="feature-description">
                                {feature.description}
                            </p>
                            {
                                feature.info ?
                                    <p className="additional-info">{feature.info}</p>
                                :null
                            }
                        </div>
                    </div>
                ))
            :null}
        </div>
    </div>
  );
}
export default Features;