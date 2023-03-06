import { Product } from '../../types/Product';
import React, { FC } from 'react';
import { getPrice } from '../../utils';

import './ProductCard.css';

export const ProductCard: FC<Product> = ({
    name,
    description,
    price,
    priceSymbol,
    category,
    imgUrl,
}) => {
    return (
        <div className="product-card">
            <div className="product-card__text">
                <div className="product-card__name">{name}</div>
                <div className="product-card__description">{description}</div>
                <div className="product-card__price">
                    {getPrice(price, priceSymbol)}
                </div>
                <div className="product-card__category">{category}</div>
            </div>
            {imgUrl && (
                <img src={imgUrl} alt={name} className="product-card__image" />
            )}
        </div>
    );
};