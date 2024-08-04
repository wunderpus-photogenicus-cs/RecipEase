import {useState, useEffect} from 'react'

const cartPage = () => {

    const [cart, setCart] = useState([]);

    useEffect (() => {
        // retrieve from local storage
        const localCart = localStorage.getItem('cart')

        // if localCart exist and not null||undefined , parse the data 
        if (localCart) setCart(JSON.parse(localCart))

    },[])  // default an empty array so it only runs once
  return (
    <div className='cart-page'>
        <h1>Shopping Ingredients</h1>
        {cart.map((item) => (
            <div key = {item.id}>
                <div>{item.ingredients}</div>
                <div>{item.quantity}</div>
            </div>
        ))}
    </div>
  )
}

export default cartPage