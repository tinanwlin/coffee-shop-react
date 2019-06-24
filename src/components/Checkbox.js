// import React from 'react';

// const Checkbox = ({type = "checkbox", name, value, checked = "", onChange }) => {
//   return (
//     <form action="#">
//       <p>
//         <label>
//           <input type={type} name={name} value={value} checked={checked} onChange={onChange}/>
//           <span>{name}</span>
//         </label>
//       </p>
//     </form>
//   )
// }

// export default Checkbox;

import React, { Component } from 'react'

class Checkbox extends Component {
  render() {
    const { name, value, checked, onChange } = this.props;
    return (
      <div>
        <form action="#">
          <p> 
            <label>
              <input type="checkbox" name={name} value={value} checked={checked} onChange={onChange}/>
              <span>{name}</span>
            </label>
          </p>
        </form>
      </div>
    )
  }
}

export default Checkbox;