import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


//  Getting data list form localStorage

const getLocalStorage = () =>{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
      return []
  }
}


function App() {

const [name, setName] = useState('');
const [list, setList] = useState(getLocalStorage())
const [isEditing, setIsEditing] = useState(false)
const [editId, setEditId] = useState(null)
const [alert, setAlert] = useState(
    {
      show:false,
      msg:'', 
      type:''
    }
  )

const handleSubmit = (e) =>{
  e.preventDefault()
  
  if(!name) {
    showAlert(true,'danger', 'Please entar a value')
  }
  else if(name && isEditing){
    // Deal with edit
  }
  else{
    showAlert(true,'success', 'Item added successfully')
    const newItem = {id: new Date().getTime().toString(), title: name}
    setList([...list, newItem])
    setName('')
    console.log(list)
  }

}

const showAlert = (show=false,type='',msg='') =>{
  setAlert({show,type,msg})
}

// Clearing all items 
const clearItem = () =>{
  showAlert(true,'danger', 'Your list is empty!')
  setList([])
}

// Remove single item from list
const removeItem = (id) =>{
  showAlert(true,'danger', 'Item removed Successfully!')
  setList(list.filter((item) => item.id !== id))
} 

// Set item in localStroage

useEffect(() =>{
  localStorage.setItem('list', JSON.stringify(list));
},[list])

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert list={list} {...alert} removeAlert={showAlert} /> }
      <h3>Grocery bud</h3>
      <div className='form-control'>
        <input 
          className='grocery' 
          type='text' 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Example: eggs...'/>
        <button type='submit' className='submit-btn'>
          {isEditing ? 'Edit' : 'Submit'}
        </button>
      </div>
    </form>

  {list.length > 0 && 
  <div className='grocery-container'>
      <List items={list} removeItem={removeItem} />
      <button type='submit' className='clear-btn' onClick={clearItem}>Clear All</button>
  </div>
  }

  {list.length <1 && <p style={{textAlign:'center', marginTop:'20px'}}>Data is not availble!</p>}
    

  </section>
}

export default App
