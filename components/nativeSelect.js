import React from 'react';

export const NativeSelect = (props) => {
  return (
    <select 
      id={props.id} 
      className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      value={props.selected}
      onChange={event => props.setSelected(event)}
    >

      {props.options.map(({ value, label, disabled }) => (
        <option 
          key={value} 
          value={value}
          disabled={disabled}
        >
          {label}
        </option>
      ))}
    </select>
  )
}