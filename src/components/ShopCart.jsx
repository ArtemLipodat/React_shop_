function ShopCart(props) {

    const showOrders = (props) => {
        let total = 0;
        props.order.forEach(el => total += Number.parseFloat(el.price))
        return (
            <>
                <h2>В корзине:</h2>
                {props.order.map(el => (
                    <div key={el.id} className="shoppingCart-item">
                        <p>{el.id}.</p>
                        <span>{el.name}</span>
                        <img src={'./img/' + el.image} alt=""/>
                    </div>
                ))}
                <label htmlFor="promo">Промокод:
                    <input type="text" name="promo" placeholder='СКИДКА'/>
                </label>
                <div className="shoppingCart-out">
                    <span>Итого: {total}</span>
                    <button>Перейти к оформлению ></button>
                </div>
            </>
        )
    }

    return(
        <div className="shoppingCart">
            {props.order.length > 0 ?
                showOrders(props)
                :
                <div  className="shoppingCart">
                    <h2>Ваша корзину пуста</h2>
                </div>
            }

      </div>
    );
}

export default ShopCart;