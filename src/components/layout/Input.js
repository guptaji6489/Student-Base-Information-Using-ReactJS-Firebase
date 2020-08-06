import React from 'react'

const Input = (props) => {
    const {placeholder,value,onChange,type,name} = props;
    return (
        <div>
            <input
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  value={value} 
                  className="form-control"
                  onChange={onChange}
                  required
                />
        </div>
    )
}

export default Input
