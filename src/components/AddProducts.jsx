// Libraries
import { useState } from 'react'
import PropTypes from 'prop-types';

// MUI Elements
import { Button, TextField } from '@mui/material'

// CSS Styles
import '../styles/AddProducts.css'

function AddProducts({addProductToList}) {
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")

    const addProduct = () => {
        if(!productName ||!productPrice) return alert("Please fill out both fields")
        const productData = {
            name: productName,
            price: Number(productPrice),
            id: Math.floor(Math.random(999999)*100000)
        }
        addProductToList(productData)
        setProductName("")
        setProductPrice("")
    }
  return (
    <div className='addProducts'>
        <TextField sx={{width:"30%"}} value={productName} onChange={e=>{setProductName(e.target.value)}} id="standard-basic" label="Product Name" required variant="standard" />
        <TextField sx={{width:"30%"}} value={productPrice} onChange={e=>{setProductPrice(e.target.value)}} inputProps={{ min: 0 }} type='number' id="standard-basic" label="Product Price" placeholder='0' required variant="standard"/>
        <Button sx={{width:"30%"}} variant="contained" color='success' onClick={addProduct}>Add Product</Button>
    </div>
  )
}

AddProducts.propTypes = {
    addProductToList: PropTypes.func.isRequired
}

export default AddProducts