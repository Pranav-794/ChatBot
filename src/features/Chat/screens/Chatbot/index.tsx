import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';

export class App extends PureComponent {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
      </>
    );
  }
}

export default App;
