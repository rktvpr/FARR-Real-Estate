import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

const ListingCard = ({ property_id, address, description }) => {
    return (
      <Link to={`/listings/${property_id}`}>
        <Card
          style={{ width: 500 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
        >
          {/* <Meta title={address} description={description} /> */}
          <Meta title={address?.line} description="Example description" />
        </Card>
      </Link>
    );
  };

export default ListingCard