import React, { useContext } from 'react';
import { TableContext } from './mine-search';
import Td from './td';

const Tr = ({ rowIndex }) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {Array(tableData[0].length).fill().map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
};

export default Tr;