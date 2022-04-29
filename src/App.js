import {Provider} from 'react-redux';
import store from './Redux/store';

import MainRouter from './MainRouter';
function App() {
  return (
    <Provider store={store}>
      <MainRouter/>
    </Provider>
  );
}

export default App;
