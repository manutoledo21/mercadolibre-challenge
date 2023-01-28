import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/MyAppContext';
import './details-styles.css';

const ProductDetails = () => {
  const { id } = useParams();
  const results = useAppContext().search.searchById(id);

  return (
    <div className="container">
      <div className="product__details">
        <div className="box__container">
          <img src={results.thumbnail} alt="img-description" className="img__prod-detail" />
          <div className="box-2_product">
            <span className="subtitle__product">
              {results.condition} - {results.sold_quantity} vendidos
            </span>
            <h1 className="title__product">{results.title}</h1>
            <div className="money__product">
              <span className="price__product">$ {results.price.ToLocalString().toFixed(2)}</span>
            </div>
            <div className="button__product">
              <button className="buy__product">Comprar</button>
            </div>
          </div>
        </div>

        <div className="product__description">
          <div className="container__description">
            <h3 className="title__description">Descripción del producto</h3>
            <p className="description__product">{results.descriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
