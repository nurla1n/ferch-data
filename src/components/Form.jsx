import React, { useState } from 'react'

function Form({search}) {
const [value,setValue]=useState("")
const handleChange=(e)=>{
   setValue(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    search(value)
}
  return (
    <>
  <div className="main">
  <form onSubmit={handleSubmit} action="">
        <label htmlFor="image">What are you looking for?</label>
        <input value={value} onChange={handleChange} type="text"  id='image'/>
    </form>
  </div>
    
    </>
  )
}

export default Form