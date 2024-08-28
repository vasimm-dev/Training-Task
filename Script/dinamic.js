const addProductToList = document.getElementById('addProductToList');
const productsList = document.getElementById('productsList');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const totalCount = document.getElementById('totalCount');
const totalPrice = document.getElementById('totalPrice');
let productsListData = [];

window.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('productsListData');
    console.log(storedData)
    if (storedData) {
        productsListData = JSON.parse(storedData);
        console.log( productsListData)
        fillProductList();
        updateProductTotal();
    }
});

addProductToList.addEventListener('click', () => {
    const productNameValue = productName.value;
    const productPriceValue = Number(productPrice.value);
    if (!(productPriceValue >= 0) || productNameValue === "" ){
        window.alert('Please enter both product name and price');
        return;
    }else{
        const newProduct = {
            id: productsListData.length + 1,
            name: productNameValue,
            price: productPriceValue
        };
        productsListData.push(newProduct);
        fillProductList();
        updateProductTotal();
        saveDataInLocalStorage();
    }
});

const deleteProductFromListFunc = (id) => { 
    productsListData = productsListData.filter(product => product.id !== id);
    fillProductList();
    updateProductTotal();
    saveDataInLocalStorage();

    /*  Fərqli Bir Yol 
            const selectedProduct = document.querySelector(`[data-product-id="${id}"]`);
            selectedProduct.parentNode.removeChild(selectedProduct);
    */
}

const fillProductList = () => {
    productsList.innerHTML = '';
    productsListData.forEach(product => {
        const productTemplate = `<div class="product" data-product-id="${product.id}">
                                    <span class="infoForProduct">${product.name} (${product.price} AZN)</span>
                                    <button
                                        id="deleteProductFromList"
                                        class="button warning"
                                        onClick="deleteProductFromListFunc(${product.id})"
                                    >
                                        Delete
                                    </button>
                                </div>`
        productsList.innerHTML += productTemplate;
    });
};

const updateProductTotal = () => {
    totalCount.innerText = productsListData.length;
    totalPrice.innerText = productsListData.reduce((total, product) => total + product.price, 0).toFixed(2);
}
const saveDataInLocalStorage = () => {
    localStorage.setItem('productsListData', JSON.stringify(productsListData));
};