import React from 'react'

import { Header } from '../components/ProductComponent/Header'
import { Product } from '../components/ProductComponent/Product'
import { HeaderDetail } from '../components/ProductComponent/ProductDetail/HeaderDetail'
import { ListRelatedProduct } from '../components/ProductComponent/ProductDetail/ListRelatedProduct'
import { ProductDetail } from '../components/ProductComponent/ProductDetail/ProductDetail'
import { RelatedProduct } from '../components/ProductComponent/ProductDetail/RelatedProduct'


export function TodoListContainer() {
    return <div className='form-container'>
        <div style={{ backgroundColor: "#eff2f3", maxWidth: 1200, marginLeft: 47, marginRight: 47 }}>
            <HeaderDetail></HeaderDetail>
            <ProductDetail></ProductDetail>
            <RelatedProduct></RelatedProduct>
            <ListRelatedProduct></ListRelatedProduct>
        </div>

    </div >
}