import React, { useState } from 'react';
import Menu from './Menu';
import items from './data';
import Categories from './Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

function App() {

const [menuItems, setMenuItems] = useState(items);
const [categories, setCategories] = useState(allCategories)

const filterItems = (category) =>{

  if(category === 'all'){
    return setMenuItems(items)
  }
  const newItems = items.filter((item) => item.category === category);
  return setMenuItems(newItems)
}

  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>;
}

export default App;
