import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

const ListingCard = ({ property_id, address, description, primary_photo }) => {
    return (
      <Link to={`/listings/${property_id}`}>
        <Card
          style={{ width: 500 }}
          cover={
            <img
              alt="example"
              src={primary_photo}
            />
          }
        >
          {/* <Meta title={address} description={description} /> */}
<<<<<<< HEAD
          <Meta title="Example Address" description="Example description" />
=======
          <Meta title={address?.line} description="Test description" />
>>>>>>> 9dc5e8e2410b1ef601fbaa6473c982c323ece890
        </Card>
      </Link>
    );
  };

export default ListingCard