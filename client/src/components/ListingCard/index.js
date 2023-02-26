import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

const ListingCard = ({ id, address, description }) => {
    return (
      <Link to={`/listings/${id}`}>
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
          <Meta title="Example Address" description="Example description" />
        </Card>
      </Link>
    );
  };

export default ListingCard