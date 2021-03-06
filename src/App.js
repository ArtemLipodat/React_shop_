import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import ShopCart from "./components/ShopCart";
import Checkout from "./components/Checkout";
import CheckoutDelivery from "./components/CheckoutDelivery";
import Alert from "kodobe-react-alert";
import {Routes, Route} from "react-router-dom";
import { Rings } from  'react-loader-spinner'

class App extends React.Component{

    state = {
        loading: true,
        buttonText : 'Добавить в корзину',
        products: [
                {
                    id: 1,
                    name: 'Осенний букет с яблоками, лимоном и ягодами',
                    image: 'products.png',
                    price : 1000,
                    qty: 1,
                    description: 'В букет входит: тут мы описываем что входит точный состав и тря ляляляля ля ля ля ут мы описываем что входит точный состав и тря ляляляля ля ля ля'
                },
                {
                    id:2,
                    name: 'Осенний букет с яблоками, лимоном и ягодами',
                    image: 'products.png',
                    price : 5000,
                    qty: 1,
                    description: 'В букет входит: тут мы описываем что входит точный состав и тря ляляляля ля ля ля ут мы описываем что входит точный состав и тря ляляляля ля ля ля'
                }
            ],
        order: [],
        checkout: []
    }

    componentDidMount() {
        if (localStorage.getItem('shoppingCart')) {
            this.setState({order: JSON.parse(localStorage.getItem('shoppingCart'))})
        }
    }

    addToCart = (item) => {
        let isInArray = false
        this.state.order.forEach(el => {
            if (el.id === item.id)
            isInArray = true
        })
         if (!isInArray) {
             if (JSON.parse(localStorage.getItem('shoppingCart')))
                 JSON.parse(localStorage.getItem('shoppingCart')).forEach(el => {
                     if (el.id === item.id) {
                         isInArray = true
                     }
                 })
         }
         if (isInArray){
             Alert.showInfo({
                 content: <div className="alert">Товар уже корзине <a href='shopping_cart'>Перейти в корзину</a></div>
             })
         }
         if (!isInArray) {
             Alert.showInfo({
                 content: <div className="alert">Товар добавлен в корзину</div>
             })
             this.setState({
                 order: [...this.state.order, item],
             }, () => {
                 localStorage.setItem('shoppingCart', JSON.stringify(this.state.order))
             })
         }
    }

    deleteToCart = (id) => {
        this.setState({order: this.state.order.filter(el => el.id !== id)}, () => {localStorage.setItem('shoppingCart', JSON.stringify(this.state.order))})
    }

    plusQty = (id) => {
        this.state.order.map(el => {
            if (el.id === id) {
                this.setState({
                    ...this.state.order,
                    qty: ++el.qty
                })
            }
            return el
        })
    }

    minusQty = (id) => {
        this.state.order.map(el => {
            if (el.id === id) {
                this.setState({
                    ...this.state.order,
                    qty: el.qty - 1 > 0  ? --el.qty : 1
                })
            }
            return el
        })
    }

    loader = () => {
        return(
            <div className="loader">
                <Rings
                    height="500"
                    width="600"
                    color='#7DB8C2FF'
                    ariaLabel='loading'
                />
            </div>
        )
    }

    app = () => {
        return(
            <>
                <Routes>
                    <Route path="/" element={<Main addToCart={this.addToCart} buttonText={this.state.buttonText} products={this.state.products} />} />
                    <Route path="contacts" element={<Contact/>} />
                    <Route path="shopping_cart" element={<ShopCart plusQty={this.plusQty} minusQty={this.minusQty} onDelete={this.deleteToCart}  order={this.state.order}/>} />
                    <Route path="checkout" element={<Checkout order={this.state.order} />} />
                    <Route path="/checkout/continue" element={<CheckoutDelivery order={this.state.order} />} />
                </Routes>
            </>
        )
    }

    render() {
        return(
            <div className="wrapper">
                <Header order={this.state.order} />
                {this.state.loading ? this.app() : this.loader()}
                <Footer/>
            </div>
        )
    }
}

export default App;
