import React, { useState, useContext } from 'react';
import { TableContext, START_GAME } from './mine-search';

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);
  const { dispatch } = useContext(TableContext);

  const onChangeRow = (e) => {
    setRow(e.target.value);
  };

  const onChangeCell = (e) => {
    setCell(e.target.value);
  };

  const onChangeMine = (e) => {
    setMine(e.target.value);
  };

  const onClickBtn = (e) => {
    dispatch({ type: START_GAME, row, cell, mine });
  }

  return (
    <div>
      <input type='number' placeholder='세로' value={row} onChange={onChangeRow} />
      <input type='number' placeholder='가로' value={cell} onChange={onChangeCell} />
      <input type='number' placeholder='지뢰' value={mine} onChange={onChangeMine} />
      <button onClick={onClickBtn}>시작</button>
    </div>

  )
};

export default Form;