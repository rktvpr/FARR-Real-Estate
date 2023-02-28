import React from 'react';
//import { useQuery } from '@apollo/client';
import { Row, Col} from "antd";
import Header from '../components/Header';
import Footer from '../components/Footer';

import { QUERY } from '../utils/queries';


const SearchResult = () => {
    //const location = useLocation();
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