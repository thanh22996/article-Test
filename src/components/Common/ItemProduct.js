import React from "react";

const ItemProduct = ({ dataProduct }) => {
    // console.log('props: ', props);
    // const { dataProduct, functionTest } = props
    return (
        <div
            style={{ marginTop: 20, position: 'relative' }}
            className='product-block'
        >
            <div className='wrapper-sale'>
                <span className='saler'>{dataProduct.sale}</span>
            </div>

            <img className='img-control' src={dataProduct.image}></img>

            <div
                style={{ position: 'absolute', bottom: 16 }}
                className='vertical-block'
            >
                <p className='p-control'>
                    {' '}
                    <b>{dataProduct.name}</b>{' '}
                </p>
                <p style={{ color: 'green', marginBottom: 0 }}>
                    {dataProduct.description}
                </p>

                <div>
                    <span style={{ marginRight: 20, marginBottom: 10 }}>
                        {' '}
                        <b>{dataProduct.currentPrice}</b>{' '}
                    </span>
                    <span className='text-muted font-14'>
                        {' '}
                        <del> {dataProduct.price} </del>{' '}
                    </span>
                </div>

                <ul style={{ marginLeft: -10, marginBottom: 0 }}>
                    <span
                        style={{ marginRight: 5 }}
                        className='fa fa-star checked'
                    ></span>
                    <span
                        style={{ marginRight: 5 }}
                        className='fa fa-star checked'
                    ></span>
                    <span
                        style={{ marginRight: 5 }}
                        className='fa fa-star checked'
                    ></span>
                    <span
                        style={{ marginRight: 5 }}
                        className='fa fa-star checked'
                    ></span>
                    <span
                        style={{ marginRight: 5 }}
                        className='fa fa-star-half checked'
                    ></span>
                </ul>

                <a>
                    <button type='button' className='btn btn-primary'>
                        Add To Cart
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ItemProduct