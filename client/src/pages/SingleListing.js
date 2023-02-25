import React from 'react';
import Header from '../components/header'
import { Footer } from '../components/footer'
import { Col, Row, Button, Space, Carousel } from 'antd';


import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_LISTING } from '../utils/queries';



const SingleListing = () => {
    const { listingId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_LISTING, {
        // pass URL parameter
        variables: { listingId: listingId },
    });

    const listing = data?.listing || {};


    if (loading) {
        return <div>One moment please!</div>;
    }
    return (
        <div className="Listing container">
            <Header />
            <div className="SingleListing">
                <Row>
                    <Col span={12} push={12}>
                        <h2> ADDRESS </h2>
                    </Col>
                    <Col span={12} pull={12}>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} push={12}>
                        <Carousel autoplay>
                            <div>
                                <h3 className="contentStyle">1</h3>
                            </div>
                            <div>
                                <h3 className="contentStyle">2</h3>
                            </div>
                            <div>
                                <h3 className="contentStyle">3</h3>
                            </div>
                            <div>
                                <h3 className="contentStyle">4</h3>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={12} pull={12}>
                        DESCRIPTION
                    </Col>
                </Row>
                <Row>
                    <Col span={12} push={12}>
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Button type="primary" block>
                                <Link to="/contactrealtor">Contact a Realtor today!</Link>
                            </Button>
                        </Space>
                    </Col>
                    <Col span={12} pull={12}>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>

    );
};

export default SingleListing;