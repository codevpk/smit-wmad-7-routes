import React, { useCallback, useEffect, useState } from 'react'
import { Button, Image, Typography } from 'antd'

const { Paragraph } = Typography

export default function Users() {

    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(5)

    const fetchProducts = useCallback(() => {
        console.log("limit", limit)
        fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res => res.json())
            .then(products => {
                console.log(products)
                setProducts(products)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {

            })
    }, [limit])
    useEffect(() => { fetchProducts() }, [fetchProducts])

    const handleReload = () => {
        fetchProducts()
    }

    return (
        <main className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='text-center'>Users</h1>
                        <Button type='primary' onClick={handleReload}>Reload</Button>
                        {/* <input type="number" placeholder='Enter limit' className='form-control' value={limit} onChange={e => setLimit(e.target.value)} /> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((item, i) => {
                                        const { id, image, title, price, description, category } = item
                                        return (
                                            <tr key={i}>
                                                <td>{id}</td>
                                                {/* <td><img src={image} alt={title} className='img-fluid' style={{ width: 48, height: 48 }} /></td> */}
                                                <td><Image src={image} alt={title} style={{ width: 48, height: 48 }} /></td>
                                                <td>{title}</td>
                                                <td>{price}</td>
                                                <td><Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "Read more" }}>{description}</Paragraph></td>
                                                <td>{category}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {limit < 20 &&
                            <div className="text-center">
                                <Button type='primary' onClick={() => { setLimit(limit => limit + 5) }}>View More</Button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
