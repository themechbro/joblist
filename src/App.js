import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Joblist from './components/joblist';
import Navbar from './components/navbar';
import Experience from './components/experience';


function App() {
  return (
    <Provider store={store}>
    <div className="App container">
         <Navbar/>
         
      <Joblist/>
    </div>
    </Provider>
  );
}

export default App;
