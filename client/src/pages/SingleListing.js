import React from 'react';
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import { useLocation } from "react-router-dom";
import { Col, Row, Button, Space, Carousel } from 'antd';


import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { LISTING } from '../utils/queries';



const SingleListing = () => {
    const { property_id } = useParams();
    // const location = useLocation();

    const { loading, data } = useQuery(LISTING, {
        // pass URL parameter
        variables: { property_id },
    });

    // const listing = data?.listing || {};


    if (loading) return <p>Loading...</p>;
  
    const property = data.listing.results.find((p) => p.property_id === property_id);
  
    return (
      <div className="Listing container">
        <Header />
        <div className="SingleListing">
          <Row>
            <Col span={12} push={12}>
            </Col>
            <Col span={12} pull={8}>
              <h2> "{property.location.address.line}" </h2>
            </Col>
          </Row>
          <Row>
            <Col span={10} push={12}>
              <h3>Description:</h3>
              <p>Type: {property.description.type}</p>
              <p>Beds: {property.description.beds}</p>
              <p>Baths: {property.description.baths}</p>
              <p>Sqft: {property.description.sqft}</p>
            </Col>
                    <Col span={10} pull={8}>
                        <Carousel autoplay>
                            <div>
                                <h3 className="contentStyle">Picture 1</h3>
                            </div>
                            <div>
                                <h3 className="contentStyle">Picture 2</h3>
                            </div>
                            <div>
                                <h3 className="contentStyle">Picture 3</h3>
                            </div>
                            <div>
                                <h3 className="contentStyle">Picture 4</h3>
                            </div>
                        </Carousel>
                    </Col>

                </Row>
                <Row>
                    <Col span={10} push={12}>
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