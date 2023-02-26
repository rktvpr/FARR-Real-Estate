import React from 'react';
import { useLocation } from "react-router-dom";
import { Col, Row } from 'antd';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import ListingCard from '../components/ListingCard/index'
import { useQuery } from '@apollo/client';
import { LISTING } from '../utils/queries';

const SearchResult = () => {
    const { loading, error, data } = useQuery(LISTING);
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("q");
    if (loading) return <p>loading...</p>
    return (
        <div>
            <Header/>
            <h2 className="resultsTitle" style={{ marginLeft: '45px' }}>Search Results for "{data.listing.count}"</h2>
            <Row>
                <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                    <ListingCard address= {data.listing.results[0].location.address}/>
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