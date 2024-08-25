// Libraries
import PropTypes from 'prop-types';

// Css Styles
import '../styles/Product.css'

// MUI Elements
import { Button } from '@mui/material'

// MUI Icon 
import DeleteIcon from '@mui/icons-material/Delete';

function Product({product,removeProductFromList}) {
    const {name,price,id} = product

    const handleDeleteProduct = () => {
        removeProductFromList(id)
    }
  return (
    <div className='product'>
        <span className='infoForProduct'>{name} ( {price}$ )</span>
        <Button variant="contained" onClick={handleDeleteProduct} color='error' endIcon={<DeleteIcon />}>Delete</Button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  removeProductFromList: PropTypes.func.isRequired,
}

export default Product