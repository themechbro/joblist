import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Joblist from './components/joblist';

function App() {
  return (
    <Provider store={store}>
    <div className="App">

      <Joblist/>
    </div>
    </Provider>
  );
}

export default App;
