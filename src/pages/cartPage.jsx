import {useState, useEffect} from 'react'

const cartPage = () => {

    const [cart, setCart] = useState([]);

    useEffect (() => {
        
        const fetchCart = async () => {
            try {
                const res = await fetch(`/api/user/${userId}/cart`)
                const data = await res.json();
                setCart(data.cart || [])
            } catch (error) {
                console.error('Error in fecthCart in cartPage', error)
            }
        }
        fetchCart();

    },[])  // default an userId 1 so it only runs once
  return (
    <div className='cart-page'>
        <h1>Shopping Ingredients</h1>
        {cart.map((item) => (
            <div key = {item.idMeal}>
                <div>{item.strMeal}</div>
                <div> 
                    {item.ingredients.map((ingredient, index) => (
                        <li key = {index}>{ingredient.name} : {ingredient.measure}</li>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default cartPage