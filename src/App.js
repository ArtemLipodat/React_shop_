import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import ShopCart from "./components/ShopCart";
import {Routes, Route, Link} from "react-router-dom";

class App extends React.Component{

    state = {
        buttonText : 'Добавить в корзину',
        buttonClick : false,
        products: [
                {
                    id: 1,
                    name: 'Осенний букет с яблоками, лимоном и ягодами',
                    image: 'products.png',
                    price : 1000,
                    description: 'В букет входит: тут мы описываем что входит точный состав и тря ляляляля ля ля ля ут мы описываем что входит точный состав и тря ляляляля ля ля ля'
                },
                {
                    id:2,
                    name: 'Осенний букет с яблоками, лимоном и ягодами',
                    image: 'products.png',
                    price : 5000,
                    description: 'В букет входит: тут мы описываем что входит точный состав и тря ляляляля ля ля ля ут мы описываем что входит точный состав и тря ляляляля ля ля ля'
                }
            ],
        order: []
    }


     addToCart = (item) => {
        let isInArray = false
        this.state.order.forEach(el => {
            if (el.id === item.id)
            isInArray = true
        })
         if (!isInArray)
             this.setState({
                 order: [...this.state.order, item],
                 buttonClick : true
             })
    }

    render() {
        return(
            <div className="wrapper">
                <Header buttonClick={this.state.buttonClick} order={this.state.order} />
                    <Routes>
                        <Route path="/" element={<Main addToCart={this.addToCart} buttonText={this.state.buttonText} products={this.state.products} />} />
                        <Route path="contacts" element={<Contact/>} />
                        <Route path="shopping_cart" element={<ShopCart order={this.state.order}/>} />
                    </Routes>
                <Footer/>
            </div>
        )
    }
}

export default App;
