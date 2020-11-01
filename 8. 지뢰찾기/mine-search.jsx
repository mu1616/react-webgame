import React, { useReducer, createContext, useMemo } from 'react';
import Table from './Table';
import Form from './Form';

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, // 0 이상이면 다 open
};

export const TableContext = createContext(null);

const plantMine = (row, cell, mine) => {
  console.log(row, cell, mine);
  const candidate = Array(row * cell).fill().map((arr, i) => {
    return i;
  });
  const shuffle = []; // 지뢰 개수만큼 뽑아서 저장
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }

  return data;
};

const initialState = {
  tableData: [],
  timer: 0,
  result: '',
}

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';

const reducer = (state, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case START_GAME: {
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
      }
    }
    case OPEN_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.OPENED;
      return {
        ...state,
        tableData,
      }
    }
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ tableData: state.tableData, dispatch }), [state.tableData]);

  return (
    <TableContext.Provider value={value}>
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </TableContext.Provider>
  );
};

export default MineSearch;