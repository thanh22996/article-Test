import React from 'react'

export function Product() {
  const products = [
    {
      sale: '50%',
      image: 'https://demo.dashboardpack.com/sales-html/img/products/img-5.png',
      name: 'Life Style',
      description: 'Unique Blue Bag',
      currentPrice: '$49.00',
      price: '$99.00',
    },
    {
      sale: '50%',
      image: 'https://demo.dashboardpack.com/sales-html/img/products/img-2.png',
      name: 'Life Style',
      description: 'Unique Blue Bag',
      currentPrice: '$49.00',
      price: '$99.00',
    },
    {
      sale: '50%',
      image: 'https://demo.dashboardpack.com/sales-html/img/products/02.png',
      name: 'Life Style',
      description: 'Unique Blue Bag',
      currentPrice: '$49.00',
      price: '$99.00',
    },
    {
      sale: '50%',
      image: 'https://demo.dashboardpack.com/sales-html/img/products/img-1.png',
      name: 'Life Style',
      description: 'Unique Blue Bag',
      currentPrice: '$49.00',
      price: '$99.00',
    },
    {
      sale: '10%',
      image: 'https://demo.dashboardpack.com/sales-html/img/products/img-5.png',
      name: 'Life Style',
      description: 'Unique Blue Bag',
      currentPrice: '$49.00',
      price: '$99.00',
    },
    {
      sale: '20%',
      image: 'https://demo.dashboardpack.com/sales-html/img/products/img-5.png',
      name: 'Life Style',
      description: 'Unique Blue Bag',
      currentPrice: '$49.00',
      price: '$99.00',
    },
    {
      sale: '30%',
      image: 'https://demo.dashboardpack.com/sales-html/img/products/img-5.png',
      name: 'Life Style',
      description: 'Unique Blue Bag',
      currentPrice: '$49.00',
      price: '$99.00',
    },
    {
      sale: '40%',
      image: 'https://demo.dashboardpack.com/sales-html/img/products/img-5.png',
      name: 'Life Style',
      description: 'Unique Blue Bag',
      currentPrice: '$49.00',
      price: '$99.00',
    },
  ]

  return (
    <div className='container-product flex-block'>
      {products?.map((value, index) => {
        return (
          <div
            key={index}
            style={{ margin: 20, position: 'relative' }}
            className='product-block'
          >
            <div className='wrapper-sale'>
              <span className='saler'>{value.sale}</span>
            </div>

            <img className='img-control' src={value.image}></img>

            <div
              style={{ position: 'absolute', bottom: 16 }}
              className='vertical-block'
            >
              <p className='p-control'>
                {' '}
                <b>{value.name}</b>{' '}
              </p>
              <p style={{ color: 'green', marginBottom: 0 }}>
                {value.description}
              </p>

              <div>
                <span style={{ marginRight: 20, marginBottom: 10 }}>
                  {' '}
                  <b>{value.currentPrice}</b>{' '}
                </span>
                <span className='text-muted font-14'>
                  {' '}
                  <del> {value.price} </del>{' '}
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
      })}
    </div>
  )
}
