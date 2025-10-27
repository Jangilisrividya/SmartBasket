import React, { useState, useEffect } from 'react';
import '../App.css';

function Home({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      // 🥭 Fruits
      {
        id: 1,
        name: 'Apple',
        brand: 'Fresh Farms',
        cost: 50,
        category: 'Fruits',
        img: 'https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_1280.jpg'
      },
      {
        id: 5,
        name: 'Banana',
        brand: 'Tropical Fruits',
        cost: 40,
        category: 'Fruits',
        img: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg'
      },

      // 🥬 Vegetables
      {
        id: 7,
        name: 'Tomatoes',
        brand: 'Organic Farms',
        cost: 35,
        category: 'Vegetables',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg'
      },
      {
        id: 8,
        name: 'Potatoes',
        brand: 'Veggie Land',
        cost: 25,
        category: 'Vegetables',
        img: 'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg'
      },

      // 🧀 Dairy & Bakery
      {
        id: 2,
        name: 'Milk',
        brand: 'Dairy Best',
        cost: 30,
        category: 'Dairy & Bakery',
        img: 'https://www.factsjustforkids.com/images/milk-on-the-table.png'
      },
      {
        id: 3,
        name: 'Bread',
        brand: 'Bake House',
        cost: 25,
        category: 'Dairy & Bakery',
        img: 'https://lilluna.com/wp-content/uploads/2021/06/wheat-bread-resize-10.jpg'
      },
      {
        id: 6,
        name: 'Cheese',
        brand: 'Cheesy Co.',
        cost: 120,
        category: 'Dairy & Bakery',
        img: 'https://cheesemaking.com/cdn/shop/files/cheddar-cheese-making-recipe.jpg?v=1743632339&width=2399'
      },
      {
        id: 4,
        name: 'Eggs',
        brand: 'Farm Fresh',
        cost: 60,
        category: 'Dairy & Bakery',
        img: 'https://udaipurmeathouse.com/wp-content/uploads/2022/02/white-egg-e1645558679813.jpg'
      },

      // 🍗 Meat & Beverages
      {
        id: 9,
        name: 'Orange Juice',
        brand: 'Juicy',
        cost: 70,
        category: 'Meat & Beverages',
        img: 'https://www.kitchentreaty.com/wp-content/uploads/2025/03/fresh-squeezed-orange-juice-2.jpg'
      },
      {
        id: 13,
        name: 'Chicken',
        brand: 'Meat Lovers',
        cost: 200,
        category: 'Meat & Beverages',
        img: 'https://poultry.mystagingwebsite.com/wp-content/uploads/2019/02/shutterstock_531404539-1024x684.jpg'
      }
    ]);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const categories = ['Fruits', 'Vegetables', 'Dairy & Bakery', 'Meat & Beverages'];

  return (
    <div className="home-container">
      <h1 className="main-title">Grocery Store 🛒</h1>
      {categories.map((cat) => (
        <div key={cat} className="category-section">
          <h2 className="category-title">{cat}</h2>
          <div className="product-grid">
            {products
              .filter((item) => item.category === cat)
              .map((p) => (
                <div key={p.id} className="product-card">
                  <img src={p.img} alt={p.name} />
                  <h3>{p.name}</h3>
                  <p className="brand">{p.brand}</p>
                  <p className="cost">₹{p.cost}</p>
                  <button onClick={() => addToCart(p)}>Add to Cart</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
