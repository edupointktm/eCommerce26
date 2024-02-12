import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Prodcut() {

    let [product, setProduct] = useState([])


    useEffect(() => {

        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setProduct(data))

    }, [])
    return (
        <>
            <section>
                <div className="container">
                    <div className="row gap-2 mt-2">

                        {product.map((pData) =>

                            <div className="col">
                                <Link to={`/product-details/${pData.id}`}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="image">
                                                <img src={pData.image} alt />
                                            </div>
                                            <div className="only-price">
                                                <div className="only">Only</div>
                                                <div className="price">Rs {pData.price}</div>
                                            </div>
                                            <div className="details">{pData.category}</div>
                                            <div className="mark-price"><del>Rs 45210</del></div>

                                        </div>
                               
                            </div>
                            </Link>
                            </div>
                            
                        )}



                </div>
            </div>

        </section >
    </>
  )
}

export default Prodcut