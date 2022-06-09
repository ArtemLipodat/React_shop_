import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CheckoutDelivery from "./CheckoutDelivery";
import Alert from "kodobe-react-alert";

function Checkout( props ) {

    const [total, setTotal] = useState(0)
    const [delivery, setdelivery] = useState(0)

    useEffect(() => {
        let total = 0;
        props.order.forEach(el => total += Number.parseFloat(el.price) * el.qty)
        setTotal(total)
    }, [props.order])


    const [name, setName] = useState('')
    const changeName = (event) => {
        setName(event.target.value)
    }

    const [tel, setTel] = useState('')
    const changeTel = (event) => {
        setTel(event.target.value)
    }

    const [delMethod, setDelMethod] = useState(0)
    const changeDelMethod = (id) => {
        setDelMethod(id)
    }

    const validation = (name, tel, delivery) => {
        let valid = true
      if (name.length < 5) {
          valid = false
          Alert.showInfo({
              content: <div className="alert danger">Введите имя корректно!</div>
          })
      }
      if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
          tel
      )) {
          valid = false
          Alert.showInfo({
              content: <div className="alert danger">Введите телефон корректно!</div>
          })
      }
      if (!delivery) {
          valid = false
          Alert.showInfo({
              content: <div className="alert danger">Выберите способ получения!</div>
          })
      }
      if (valid)
          setdelivery(1)
    }


    const checkout = () => {
        return(
            <div className="checkout">
                <form action="">
                    <div className="checkout-fields">
                        <div className="checkout-fields-name">Ваше Имя:</div>
                        <div className="checkout-fields-value"><input value={name} type="text" onChange={changeName} required="required" placeholder="имя"/></div>
                    </div>
                    <div className="checkout-fields">
                        <div className="checkout-fields-name">Телефон:</div>
                        <div className="checkout-fields-value"><input value={tel} type="text" onChange={changeTel} placeholder="+7 999 999 99 99"/></div>
                    </div>
                    <div className="checkout-fields">
                        <div className="checkout-fields-name">Способ получения :</div>
                        <div className="checkout-fields-value">
                            <label htmlFor="">
                                <input name="delivery" onChange={() => changeDelMethod(1)} checked={delMethod === 1 && "checked"} type="radio"/> Самовывоз
                            </label>
                            <label htmlFor="">
                                <input name="delivery" onChange={() => changeDelMethod(2)} checked={delMethod === 2 && "checked"} type="radio"/> Доставка
                            </label>
                        </div>
                    </div>
                    <span>*стомость доставки рассчитывается отдельно</span>
                    <div className="total">
                        <span>Итого: {total}</span>
                        <a onClick={() => validation(name, tel, delMethod)}>Продолжить ></a>
                    </div>
                </form>
                <Link className="back" to="/shopping_cart">Назад</Link>
            </div>
        )
    }

    return(
        <>
            {delivery ? <CheckoutDelivery setDelivery={setdelivery} delMethod={delMethod} total={total} /> : checkout()}
        </>
    );

}

export default Checkout