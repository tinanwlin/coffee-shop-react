import React from 'react';

const Checkbox = ({type = "checkbox", name, value, onChange }) => {
  return (
    <form action="#">
      <p>
        <label>
          <input type={type} value={value} onChange={onChange}/>
          <span>{name}</span>
        </label>
      </p>
    </form>
  )
}

export default Checkbox;