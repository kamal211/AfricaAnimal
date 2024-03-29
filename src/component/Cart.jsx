import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addQty, delItem, subQty , totalPrice} from '../redux/action/index';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()
    const plusQty = (product) => {
        dispatch(addQty(product))
    }
    const minusQty = (product) => {
        dispatch(subQty(product))
    }
    const handleClose = (product) => {
        dispatch(delItem(product))
    }
    const cartItems = (product) => {
        return (
            <div className="px-4 my-5 bg-light rounded -3 " key={product.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(product)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} className='img-fluid' />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>
                                {product.qty} x $ {product.price} = $ 
                               {product.qty * product.price}
                            </p>
                            <button className='btn btn-outline-dark me-4' onClick={() => minusQty(product)}>
                                <i className='fa fa-minus'></i>
                            </button>
                            <button className='btn btn-outline-dark me-4' onClick={() => plusQty(product)}>
                                <i className='fa fa-plus'></i>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded -3 ">
                <div className="container py-4">
                    <div className="row">
                        <h3>La carte est vide</h3>
                    </div>
                </div>
            </div>

        );
    }
    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <NavLink to='/checkout' className="btn btn-outline-dark mb-5 w-25 mx-auto">Confirmer la commande</NavLink>
                </div>
            </div>
        );
    }
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
            {/* <div className='row'>
        <div className="col-md-4">
            <img src={product.img} alt={product.title} className='img-fluid' />
        </div>
<div className="col-md-4">
    <h3> {product.title}</h3>
    <p className='lead fw-bold'>
        {product.qty} x $ {product.price} = $
        {product.qty * product.price}
    </p>
    <button className='btn btn-outline-dark me-4' onClick={() => handleButton(product)}>
        <i className='fa fa-minus'></i>
    </button>
    <button className='btn btn-outline-dark me-4' onClick={() => handleButton(product)}>
        <i className='fa fa-plus'></i>
    </button>
</div>
    </div> */}
        </>
    )
}

export default Cart;
