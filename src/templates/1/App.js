import React from 'react';

import ColumnSmall from './ColumnSmall';
import ColumnLarge from './ColumnLarge';
import './main.css';

const App = () => (
  <div className="resume">
    <ColumnSmall />
    <ColumnLarge />
  </div>
);

export default App;
