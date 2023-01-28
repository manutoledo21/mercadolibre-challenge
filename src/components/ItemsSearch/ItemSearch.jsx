import React from 'react';
import { Link } from 'react-router-dom';
import './item-styles.css';

const ItemSearch = ({ results }) => {
  return (
    <div className="container">
      <Link to={`/items/${results.id}`} className="items">
        <img src={results.thumbnail} alt="img-product" className="img__product" />
        <div className="box">
          <div className="box-2_item">
            <span className="price">$ {typeOf(results.price)}</span>
          </div>
          <span className="description">{results.title}</span>
          <span className="province__product">{results.seller_address.state.name}</span>
        </div>
      </Link>
    </div>
  );
};

export { ItemSearch };
