import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Header(props) {

    const [count, setcount] = useState(0)
    
    useEffect(() => {
        if (props.order.length > 0) {
            setcount(props.order.length)
        }
    }, [props.order.length])

    return(
      <header className="header">
          <div className="header-logo">
              <Link to="/"><img src="./img/logo.png" alt="Логотип компании"/></Link>
          </div>
          <div className="header-menu">
              <ul>
                  <li><a href="/#products">Букеты</a></li>
                  <li><Link to="contacts">Контакты</Link></li>
                  <li style={{position: 'relative' }}><Link to="shopping_cart">Корзина</Link>{count > 0 && <span className="header-count">{count}</span>}<img src="./img/shop.png" alt="Иконка корзицы"/></li>
              </ul>
          </div>
      </header>
    );
}

export default Header;