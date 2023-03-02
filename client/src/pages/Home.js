import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../images/home-bg.jpg'


const Home = () => {
    return (
        <div>
            <Header />
            <div style={{
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
            }}>

            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home