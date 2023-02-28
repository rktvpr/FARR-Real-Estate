import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { LISTING } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const { Meta } = Card;

const ListingCard = ({ property_id, address, description, primary_photo }) => {
  // console.log(data)

  const { loading, data } = useQuery(LISTING);
  if (loading) return <p>loading...</p>
    return (
      <Link to={`/listings/${property_id}`}>
        <Card
          style={{ width: 500 }}
          cover={
            <img
              alt="example"
              src={primary_photo?.href}
            />
          }
        >
          {/* <Meta title={address} description={description} /> */}
          <Meta title={address?.line} description={description?.type || 'No description'} />
        </Card>
      </Link>
    );
  };

export default ListingCard