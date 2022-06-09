import {FaTrash} from 'react-icons/fa'
import {Link} from "react-router-dom";

function ShopCart(props) {

    const showOrders = (props) => {
        let total = 0;
        props.order.forEach(el => total += Number.parseFloat(el.price) * el.qty)
        return (
            <>
                <h2>В корзине:</h2>
                {props.order.map(el => (
                    <div key={el.id} className="shoppingCart-item">
                        <p>{el.id}.</p>
                        <span>{el.name}</span>
                        <img src={'./img/' + el.image} alt=""/>
                        <div className="chanche_quanity">
                            <button type="button" className="minus" onClick={ () => {props.minusQty(el.id)} }>-</button>
                            <input type="text" readOnly="readOnly" value={el.qty} />
                            <button type="button" className="plus" onClick={ () => {props.plusQty(el.id)} }>+</button>
                        </div>
                        <FaTrash onClick={() => {props.onDelete(el.id)}} className="trash"/>
                    </div>
                ))}
                <label htmlFor="promo">Промокод:
                    <input type="text" name="promo" placeholder='СКИДКА'/>
                </label>
                <div className="shoppingCart-out">
                    <span>Итого: {total}РУБ</span>
                    <Link to="/checkout">Перейти к оформлению ></Link>
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
                    <h2>Ваша корзина пуста</h2>
                </div>
            }

      </div>
    );
}

export default ShopCart;