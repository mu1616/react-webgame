import React from 'react';
import { BrowserRouter, HashRouter, Link, Route, Switch } from 'react-router-dom';
import NumberBaseball from '../3. 숫자야구/number-baseball';
import RSP from '../5. 가위바위보/rsp-class';
import Lotto from '../6. 로또/lotto-class';
import WordRelay from './word-relay';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to='/number-baseball'>숫자야구</Link>
        &nbsp;
        <Link to='/rsp'>가위바위보</Link>
        &nbsp;
        <Link to='/lotto'>로또</Link>
        &nbsp;
        <Link to='/word-relay'>끝말잇기</Link>
      </div>
      <Switch>
        <Route exact path='/number-baseball' component={NumberBaseball} />
        <Route exact path='/rsp' component={RSP} />
        <Route exact path='/lotto' component={Lotto} />
        <Route exact path='/word-relay' component={WordRelay} />
        {/* <Route exact path='/game/:name' component={GameMatcher} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Games;