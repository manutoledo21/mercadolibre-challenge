import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInfoId, getInfoIdDescription } from '../API/Service';
import { useAppContext } from '../context/MyAppContext';
import './details-styles.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [results, setResults] = useState({});
  const [resultsDescr, setResultsDescr] = useState({});

  useEffect(() => {
    (async () => {
      const [infoId, infoIdDescription] = await Promise.all([getInfoId(id), getInfoIdDescription(id)]);
      setResults(infoId);
      setResultsDescr(infoIdDescription);
    })();
  }, []);

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
              <span className="price__product">$ {results.price}</span>
            </div>
            <div className="button__product">
              <button className="buy__product">Comprar</button>
            </div>
          </div>
        </div>

        <div className="product__description">
          <div className="container__description">
            <h3 className="title__description">Descripción del producto</h3>
            <p className="description__product">{resultsDescr.plain_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
