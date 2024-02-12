import React, { useEffect, useState } from 'react'
import Sections from './component/Sections'
import { Link } from 'react-router-dom'



function App() {
    let [cat, setCat] = useState([])
    let [product, setProduct] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(d => setCat(d))

        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => setProduct(data))
    }, [])


    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand" href="#"><span className='text-danger'>e</span>Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Prodcut</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

            <section className='border-bottom py-2'>
                <div className="container">

                    <div className="row ">
                        {cat.map((c) =>
                            <div className="col-2">{c}</div>
                        )}
                    </div>

                </div>
            </section>

            <Sections/>
        </>
    )
}

export default App