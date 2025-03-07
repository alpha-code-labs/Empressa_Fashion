import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { deleteProduct, findProducts } from '../../State/Product/Action'
import { useDispatch, useSelector } from 'react-redux'

const ProductsTable = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);

    const handleProductDelete = (productID) => {
        dispatch(deleteProduct(productID))
    }

    useEffect(() => {
        const data = {
            category: "",
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 100000000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 1,
            pageSize: 30,
        }
        dispatch(findProducts(data))
    }, [products.deletedProduct, dispatch])

    return (
        <div className='p-5'>
            <Card className='mt-2'>
                <CardHeader title="All Products" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">
                                        <Avatar src={`${item.imageUrl[item.defaultImageIndex]}@lq`} />
                                    </TableCell>
                                    <TableCell align="left" scope="row">
                                        {item.title}
                                    </TableCell>
                                    <TableCell align="left">{item.discountedPrice}</TableCell>
                                    <TableCell align="left">
                                        {item.sizes.map((size) => (
                                            <div key={size._id}>
                                                {size.name}: {size.quantity}
                                            </div>
                                        ))}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => handleProductDelete(item._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default ProductsTable
