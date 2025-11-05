import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)
  const appClassName = darkMode ? 'app dark' : 'app light'

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  // function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item])
  }

  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('all')

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  return (
    <div className={appClassName}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Pass category + addToCart to ProductList */}
      <ProductList addToCart={addToCart} category={category} />

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;
