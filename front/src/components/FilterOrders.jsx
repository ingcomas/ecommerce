import React from 'react';

const FilterOrders = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Filtar por estado de orden"   
        onChange={props.handleChange}
        value={props.inputValue}
      />
    </form>
  );
}

export default FilterOrders;