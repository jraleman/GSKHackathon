import React from 'react';
import RootContainer from './containers/RootContainer';
import { BrowserRouter, Route } from 'react-router-dom';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <RootContainer />
//       </div>
//     );
//   }
// }

const App = () => (
  <BrowserRouter>
    <Route path='/' component={RootContainer} />
  </BrowserRouter>
);

export default App;
