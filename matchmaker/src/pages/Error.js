import React, {Component} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';


class Error extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Error;