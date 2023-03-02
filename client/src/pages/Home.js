import React from 'react';
import { useQuery } from '@apollo/client';
import "../pages/Home.css";

import Header from '../components/Header';
import Footer from '../components/Footer';

import { QUERY } from '../utils/queries';


const Home = () => {
    return (
        <div className='homeBg'>

            <Header />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Home