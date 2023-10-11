import axios from 'axios'
export const fetchProducts = async (category, setterfunction = null) => {
    const { data } = await axios.post('/api/fetchProducts', {
      category: category ? category : ''
    },
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (setterfunction) setterfunction(data)
    return (data)
  }

  export const createProduct = async (productData, priceData) => {
    const { data } = await axios.post('/api/createProduct', {
      productData: productData,
      priceData: priceData? priceData:null,
    },
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
    return (data)
  }

export const fetchPricesFor = async (nameNoSpace, setterfunction) => {
    const { data } = await axios.post('/api/fetchPrices', {
      name: nameNoSpace
    },
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (setterfunction) setterfunction(data)
    return (data)
  }


  
  export const checkout = async (event , cart) => {
    event.preventDefault();
    const { data } = await axios.post('/api/Checkout',
      {
        cart: cart
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    window.location.assign(data)
  }