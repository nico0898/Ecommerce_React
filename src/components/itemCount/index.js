import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export function ItemCount({ stock, initial }) {

  const [count, setCount] = useState(parseInt(initial));

  useEffect(() => {
      setCount(parseInt(initial));
      return;
  }, [initial]);
  
  const addHandle = () => {
      setCount(count + 1);
  };
  
  const removeHandle = () => {
      setCount(count - 1);
  };

  return (
        <div className="d-flex flex-row justify-content-around">
            <button type="button" className="btn btn-outline-primary" disabled={count === 0} onClick={removeHandle}>
                <FontAwesomeIcon icon={ faMinus }/>
            </button>

            <input type="text" className="form-control" value={count}></input>

            <button type="button" className="btn btn-outline-primary" disabled={count === parseInt(stock)} onClick={addHandle}>
                <FontAwesomeIcon icon={ faPlus } />
            </button>
        </div>
  );
}

export default ItemCount;


