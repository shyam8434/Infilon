import { Provider } from "react-redux";
import "./App.css";
import { getConfiguredStore } from "./AppConfig/redux/configureStore";
import UserTable from "./Screens/UserTable/UserTable";

function App() {
  const store = getConfiguredStore();
  return (
    <Provider store={store}>
      <div className="App">
        <UserTable />
      </div>
    </Provider>
  );
}

export default App;
