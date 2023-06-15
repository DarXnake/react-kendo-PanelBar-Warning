import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';

import './styles.css';

const App = () => {
  const customValues = [];

  return (
    <PanelBar>
      <PanelBarItem></PanelBarItem>
      {customValues.length > 0 && <PanelBarItem></PanelBarItem>}
    </PanelBar>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
