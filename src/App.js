import { Provider } from "react-redux";
import AppComp from "./container/App/App";
import store from "./store/Index";

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppComp/>
      </div>
       </Provider>
  );
}

export default App;
