import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Productdetails() {
  let [product, updateProduct] = useState([])
  let { pID } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${pID}`)
      .then(res => res.json())
      .then(json => updateProduct(json))
  }, [])

  
  return (
    <>
      <div className="container">
       
          <div className="row">
            <h4> Prodcut Detials  </h4>

            <div className="col">
              <img src={product.image} alt="" />
            </div>
          </div>
        
      </div>
    </>
  )
}

export default Productdetails