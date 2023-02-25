import React from 'react';
import { useLocation } from "react-router-dom";
import { Col, Row } from 'antd';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import ListingCard from '../components/ListingCard/index'

const SearchResult = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("q");
    return (
        <div>
            <Header/>
            <h2 className="resultsTitle">Search Results for "{searchQuery}"</h2>
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