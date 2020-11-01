import React from 'react';
import Td from './td';

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => 
      <Td rowIndex={rowIndex} cellIndex={i} dispatch={dispatch} cellData={rowData[i]}></Td>
      )}
    </tr>
  )
};

export default Tr;