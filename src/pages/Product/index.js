import React from 'react'
import ItemProduct from '../../components/Common/ItemProduct';
import { products } from '../../constant/dataProduct';
import MainLayout from '../../Layout/MainLayout';

function ProductPage() {

    return (
        <MainLayout>
            <div className='form-container'>
                <div className='container-product flex-block'>
                    {products?.map((value, key) => {
                        return <ItemProduct key={key} testProps={'nguyen dat'} dataProduct={value} />
                    })}
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductPage;
