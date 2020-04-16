import React from 'react';
import UserRegistry from './user/UserRegistry';
import UserCounter from './user/UserCounter';

function App() {
  return (
    <div className="App">
      <UserCounter />
      <UserRegistry />
    </div>
  );
}

export default App;
