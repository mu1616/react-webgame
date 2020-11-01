import React, { useContext } from 'react';
import { TableContext } from './mine-search';
import Tr from './tr';

const Table = () => {
  const { tableData } = useContext(TableContext);
  console.log(tableData);
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => <Tr rowIndex={i} />)}
    </table>
  )
};

export default Table;