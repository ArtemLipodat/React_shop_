import {Link} from "react-router-dom";

function Header() {
    return(
      <header className="header">
          <div className="header-logo">
              <Link to="/"><img src="./img/logo.png" alt="Логотип компании"/></Link>
          </div>
          <div className="header-menu">
              <ul>
                  <li><a href="#products">Букеты</a></li>
                  <li><Link to="contacts">Контакты</Link></li>
                  <li><Link to="#">Корзина</Link><img src="./img/shop.png" alt="Иконка корзицы"/></li>
              </ul>
          </div>
      </header>
    );
}

export default Header;