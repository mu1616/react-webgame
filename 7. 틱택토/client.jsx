import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import TicTacToe from './tictactoe';

const Hot = hot(TicTacToe);

ReactDOM.render(<Hot />, document.querySelector('#root'));