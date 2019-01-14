import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import  robots  from './robots'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    {robots.map((item, index) => {
      {<Card id={item.id} name={item.name} username={item.username} email={item.email} />}
      // <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />
      // <Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email} />
      // <Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email} />
      // <Card id={robots[3].id} name={robots[3].name} username={robots[3].username} email={robots[3].email} />
    })};
  </div>
  , document.getElementById('root'));

serviceWorker.unregister();
