import React from 'react';
<<<<<<< HEAD
//import { useQuery } from '@apollo/client';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { QUERY } from '../utils/queries';

=======
import { useLocation } from "react-router-dom";
import { Col, Row } from 'antd';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import ListingCard from '../components/ListingCard/index'
>>>>>>> 2cc510a62f333e3871dffdb5a32cfba5a69a13b9

const SearchResult = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("q");
    return (
        <div>
            <Header/>
            <h2 className="resultsTitle" style={{ marginLeft: '45px' }}>Search Results for "{searchQuery}"</h2>
            <Row>
                <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                    <ListingCard/>
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard/>
                    </Col>
                </Row>
                <Row>
                <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                    <ListingCard/>
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard/>
                    </Col>
                </Row>
                <Row>
                <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                    <ListingCard/>
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard/>
                    </Col>
                </Row>
                <Row>
                <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                    <ListingCard/>
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard/>
                    </Col>
                </Row>
                <Row>
                <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                    <ListingCard/>
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard/>
                    </Col>
                </Row>
        
        <Footer/>
        </div>
    )
}

export default SearchResult