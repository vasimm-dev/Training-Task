// Libraries
import { useEffect, useState } from "react"

// Component
import AddProducts from "./components/AddProducts"
import Products from "./components/Products"

// Css Style 
import './styles/App.css'

function App() {
  const [productsList, setProductsList] = useState([])

  const addProductToList = (product) => {
    setProductsList( [ ...productsList, product])
    let productsInLocalStorage = JSON.parse(localStorage.getItem('products'))
    productsInLocalStorage = [ ...productsInLocalStorage, product]
    localStorage.setItem('products', JSON.stringify(productsInLocalStorage))
  }

  const removeProductFromList = (productId) => {
    let productsInLocalStorage = JSON.parse(localStorage.getItem('products'))
    const updatedProductsList = productsInLocalStorage.filter((product) => product.id!== productId)
    setProductsList(updatedProductsList)
    productsInLocalStorage = updatedProductsList
    localStorage.setItem('products', JSON.stringify(productsInLocalStorage))
  }

  useEffect(() => {
    let productsInLocalStorage = JSON.parse(localStorage.getItem('products'))
    if(productsInLocalStorage == null) {
      localStorage.setItem('products', "[]")
    }
  },[])

  return (
    <div className="App">
      <div className="containerApp">
        <AddProducts addProductToList={addProductToList} />
        <Products removeProductFromList={removeProductFromList} />
      </div>
    </div>
  )
}

export default App
