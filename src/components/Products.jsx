// Libraries
import PropTypes from 'prop-types'

// Components
import Product from './Product'

// Css Style
import '../styles/Products.css'

function Products({removeProductFromList}) {
    let productsList = JSON.parse(localStorage.getItem('products'))
    
  return (
    <div className='productsList'>
        {productsList && productsList.map((product, index) => (
            <Product key={index} product={product} removeProductFromList={removeProductFromList} />
        ))}
        <div className='infoProducts'>
            <span>Ümumi Məhsul Sayı: {productsList.length}</span>
            <span>Məhsulların Toplam Dəyəri: &nbsp;&nbsp;
                {
                    productsList.reduce((accumulator, currentProduct) => {
                        return accumulator + currentProduct.price;
                    }, 0)
                } &nbsp;$
            </span>
        </div>
    </div>
  )
}

Products.propTypes = {
    removeProductFromList: PropTypes.func.isRequired,
}

export default Products