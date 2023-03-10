import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { HeaderCart } from '../components/ProductComponent/CartProduct/HeaderCart'
import { ProductCart } from '../components/ProductComponent/CartProduct/ProductCart'

import { Header } from '../components/ProductComponent/Header'
import { Product } from '../components/ProductComponent/Product'
import { HeaderDetail } from '../components/ProductComponent/ProductDetail/HeaderDetail'
import { ListRelatedProduct } from '../components/ProductComponent/ProductDetail/ListRelatedProduct'
import { ProductDetail } from '../components/ProductComponent/ProductDetail/ProductDetail'
import { RelatedProduct } from '../components/ProductComponent/ProductDetail/RelatedProduct'


export function TodoListContainer() {
    return <div className='form-container'>

        <HeaderCart></HeaderCart>
        <ProductCart></ProductCart>

    </div >
}