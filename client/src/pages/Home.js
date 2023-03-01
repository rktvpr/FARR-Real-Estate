import React from 'react';
import { useQuery } from '@apollo/client';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { QUERY } from '../utils/queries';


const Home = () => {
    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    )
}

export default Home