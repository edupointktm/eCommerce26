import React from 'react'
import Prodcut from './Prodcut'
import { Route, Routes } from 'react-router-dom'
import Productdetails from './Productdetails'

function Sections() {
    return (
        <>
        
            <Routes>
                <Route path="/" element={<Prodcut />} />
                <Route path="/product-details/:pID" element={<Productdetails/>} />
            </Routes>



        </>
    )
}

export default Sections