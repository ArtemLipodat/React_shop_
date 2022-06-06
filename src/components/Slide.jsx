function Slide(props) {
    return(
        <div className="slider-item">
            <div className="products-info">
                <span>{props.slide.name}</span>
                <p>{props.slide.description}</p>
                <img src="./img/stars.png" alt=""/>
                <div className="products-info-button">
                    <button id={"addToCart_" + props.slide.id} onClick={() => props.addToCart(props.slide)}>{props.buttonText}</button>
                    <span>{props.slide.price} Р</span>
                </div>
            </div>
            <div className="products-info-photo">
                <img src={'./img/' + props.slide.image } alt=""/>
            </div>
        </div>
    )
}

export default Slide