import React from 'react';

//const location = useLocation();

import { useLocation } from "react-router-dom";
import { Col, Row } from 'antd';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import ListingCard from '../components/ListingCard/index'
import { useQuery } from '@apollo/client';
import { LISTING } from '../utils/queries';
import Background from '../images/Background-img-Results.jpg'

const SearchResult = () => {
    const { loading, error, data } = useQuery(LISTING);
    const location = useLocation();

    const searchQuery = new URLSearchParams(location.search).get("q");
    if (loading) return <p>loading...</p>
    console.log(data)
    return (
        <div>
            <Header />
            <div style={{
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div style={{ marginLeft: '45px' }}>
                    <h1 className="resultsTitle" style={{ color: 'white', fontSize: '65px' }}>Search Results for "{searchQuery}"</h1>
                </div>
                <Row>
                    <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                        <ListingCard
                            address={data.listing.results[0].location.address}
                            description={data.listing.results[0].description}
                            property_id={data.listing.results[0].property_id}
                            primary_photo={data.listing.results[0].primary_photo}
                        />
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard
                            address={data.listing.results[9].location.address}
                            description={data.listing.results[9].description}
                            property_id={data.listing.results[9].property_id}
                            primary_photo={data.listing.results[9].primary_photo}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                        <ListingCard
                            address={data.listing.results[1].location.address}
                            description={data.listing.results[1].description}
                            property_id={data.listing.results[1].property_id}
                            primary_photo={data.listing.results[1].primary_photo}
                        />
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard
                            address={data.listing.results[2].location.address}
                            description={data.listing.results[2].description}
                            property_id={data.listing.results[2].property_id}
                            primary_photo={data.listing.results[2].primary_photo}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                        <ListingCard
                            address={data.listing.results[3].location.address}
                            description={data.listing.results[3].description}
                            property_id={data.listing.results[3].property_id}
                            primary_photo={data.listing.results[3].primary_photo}
                        />
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard
                            address={data.listing.results[4].location.address}
                            description={data.listing.results[4].description}
                            property_id={data.listing.results[4].property_id}
                            primary_photo={data.listing.results[4].primary_photo}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                        <ListingCard
                            address={data.listing.results[5].location.address}
                            description={data.listing.results[5].description}
                            property_id={data.listing.results[5].property_id}
                            primary_photo={data.listing.results[5].primary_photo}
                        />
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard
                            address={data.listing.results[6].location.address}
                            description={data.listing.results[6].description}
                            property_id={data.listing.results[6].property_id}
                            primary_photo={data.listing.results[6].primary_photo}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={12} push={14} style={{ marginBottom: '75px' }}>
                        <ListingCard
                            address={data.listing.results[7].location.address}
                            description={data.listing.results[7].description}
                            property_id={data.listing.results[7].property_id}
                            primary_photo={data.listing.results[7].primary_photo}
                        />
                    </Col>
                    <Col span={12} pull={8}>
                        <ListingCard
                            address={data.listing.results[8].location.address}
                            description={data.listing.results[8].description}
                            property_id={data.listing.results[8].property_id}
                            primary_photo={data.listing.results[8].primary_photo}
                        />
                    </Col>
                </Row>

                <Footer />
            </div>
        </div >
    )
}

export default SearchResult