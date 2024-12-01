import React from 'react'
import { useDispatch } from 'react-redux'
import { addOrder, removeOrder } from '../../../store/slices/orders'
import { addCart } from '../../../store/slices/cart';

function OrdersProduct({ product }) {
  // const { id, title, mainImage, model, price } = product
  const dispatch = useDispatch()
console.log(product);
  const handleRemove = () => {
    dispatch(removeOrder(product.id))
  }
  const handleAddCart = () => {
    dispatch(addCart(product))
}


  return (
    <div className='ordres-product'>
      <div className="ordres-product__image">
        <img src={product.image} alt="" />
      </div>
      <div className="ordres-product__content">
        <div className="ordres-product__row">
          <p className="ordres-product__title">{product.title}</p>
          <p className='ordres-product__price'>{product.price} UZS</p>
        </div>
        <div className="ordres-product__row">
          <p className='ordres-product__subtitle'>{product.model}</p>
        </div>
        <div className="ordres-product__row">
          <button className="ordres-product__button" onClick={handleRemove}>Remove</button>
          <button className="ordres-product__btn" onClick={handleAddCart}>Add cart</button>
        </div>
      </div>
    </div>
  )
}

export default OrdersProduct