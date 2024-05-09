import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Joblist from "./components/joblist";
import Navbar from "./components/navbar";
import Loader from "./components/loader";

function App({ loading }) {
  return (
    <Provider store={store}>
      <div className="App container p-3">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Navbar />
            <Joblist />
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;
