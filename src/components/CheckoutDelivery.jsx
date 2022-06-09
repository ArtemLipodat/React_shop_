import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FaPhone} from "react-icons/fa"

function CheckoutDelivery({total, delMethod, setDelivery} ) {
    const date = new Date()
    const delivery = () => {
       return(
           <div className="checkout">
               <form action="">
                   <div className="checkout-fields">
                       <div className="checkout-fields-name">Дата получения: </div>
                       <div className="checkout-fields-value"><input type="date" placeholder="дата"/></div>
                   </div>
                   <div className="checkout-fields">
                       <div className="checkout-fields-name">Удобное время: </div>
                       <div className="checkout-fields-value">
                           <select name="time" id="time">
                               <option value="1">10:00-11:00</option>
                           </select></div>
                   </div>
                   <div className="checkout-fields">
                       <div className="checkout-fields-name">Способ доставки: </div>
                       <div className="checkout-fields-value">
                           <select name="dilevery" id="delivery">
                               <option value="1">Доставка по городу</option>
                           </select></div>
                   </div>
                   <a href="tel:79501573115"><FaPhone/>+7 (950) 157-31-15</a>
                   <div className="total">
                       <span>Итого: {total} + <p className="dos">доставка (от 200 РУБ)</p></span>
                       <Link to="">Оформить заказ</Link>
                   </div>
               </form>
               <a onClick={() => setDelivery(0)} className="back">Назад</a>
           </div>
       ) 
    }
    
    const selfDelivery = () => {
      return(
          <div className="checkout">
              <form action="">
                  <div className="checkout-fields">
                      <div className="checkout-fields-name">Дата получения: </div>
                      <div className="checkout-fields-value"><input type="date" placeholder="дата"/></div>
                  </div>
                  <div className="checkout-fields">
                      <div className="checkout-fields-name">Удобное время: </div>
                      <div className="checkout-fields-value">
                          <select name="time" id="time">
                              <option value="1">10:00-11:00</option>
                          </select></div>
                  </div>
                  <p>Пункт самовывоза : г. Ижевск, ул. Удмуртская, 286</p>
                  <a href="tel:79501573115"><FaPhone/>+7 (950) 157-31-15</a>
                  <div className="total">
                      <span>Итого: {total}</span>
                      <Link to="">Оформить заказ</Link>
                  </div>
              </form>
              <a onClick={() => setDelivery(0)} className="back">Назад</a>
          </div>
      )
    }

    return(
        <>
            {delMethod === 1 ? selfDelivery() : delivery()}
        </>
    );

}

export default CheckoutDelivery