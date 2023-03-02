import React from 'react';
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import { Col, Row, Button, Space, Carousel } from 'antd';
import Background from '../images/Background-image-Listing.jpg'

import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { IMAGES } from '../utils/queries';


const SingleListing = () => {
    const { property_id } = useParams();

    const { loading, data } = useQuery(IMAGES, {

        variables: { property_id: property_id },
    });


    console.log(property_id)

    if (loading) return <p>Loading...</p>;
    if (!loading) console.log(data.home_search)

    const property = data.home_search

    return (
        <div className="Listing container">
            <Header />
            <div className="SingleListing" style={{
                backgroundImage: `url(${Background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}>
                <Row>
                    <Col span={12} push={12}>
                    </Col>
                    <Col span={12} pull={8}>
                        <h2> {property.location.address.line}, {property.location.address.city}, {property.location.address.state} </h2>
                    </Col>
                </Row>
                <Row>

                    <Col span={10} push={12}>
                        <div style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: '12px',
                            marginBottom: '50px',
                            marginLeft: '10px',
                            height: '60vh'
                        }}>

                            <h3>Description:</h3>
                            <p style={{ fontWeight: 'bold' }}>List Price: {property.list_price.toLocaleString()}</p>
                            <p style={{ fontWeight: 'bold' }}>Type: {property.description.type.replace("_", " ")}</p>
                            <p style={{ fontWeight: 'bold' }}>Beds: {property.description.beds}</p>
                            <p style={{ fontWeight: 'bold' }}>Baths: {property.description.baths}</p>
                            <p style={{ fontWeight: 'bold' }}>Lot squarefeet: {property.description.lot_sqft}</p>
                            <p style={{ fontWeight: 'bold' }}>Squarefeet: {property.description.sqft}</p>
                        </div>

                        <Space direction="vertical" style={{ width: '100%', marginBottom: '350px' }}>
                            <Button type="primary" block>
                                <Link to="/contactrealtor">Contact a Realtor today!</Link>
                            </Button>
                        </Space>

                    </Col>

                    <Col span={10} pull={8}>
                        <Carousel autoplay>
                            <div>
                                <img
                                    alt="example"
                                    src={data.home_search.photos[0].href}
                                    style={{ borderRadius: '15px', width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div>
                                <img
                                    alt="example"
                                    src={data.home_search.photos[0].href}
                                    style={{ borderRadius: '15px', width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div>
                                <img
                                    alt="example"
                                    src={data.home_search.photos[0].href}
                                    style={{ borderRadius: '15px', width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div>
                                <img
                                    alt="example"
                                    src={data.home_search.photos[0].href}
                                    style={{ borderRadius: '15px', width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div>
                                <img
                                    alt="example"
                                    src={data.home_search.photos[0].href}
                                    style={{ borderRadius: '15px', width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div>
                                <img
                                    alt="example"
                                    src={data.home_search.photos[0].href}
                                    style={{ borderRadius: '15px', width: '100%', height: 'auto' }}
                                />
                            </div>
                        </Carousel>
                    </Col>

                </Row>
            </div>
            <footer style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                marginBottom: "10px"
            }}>
                <Footer />
            </footer>
        </div>

    );
};

export default SingleListing;