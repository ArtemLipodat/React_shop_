import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./components/Main";
import Contact from "./components/Contact";
import {Routes, Route, Link} from "react-router-dom";

class App extends React.Component{

    state = {

    };

    render() {
        return(
            <div className="wrapper">
                <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="contacts" element={<Contact/>} />
                    </Routes>
                <Footer/>
            </div>
        )
    }
}

export default App;
