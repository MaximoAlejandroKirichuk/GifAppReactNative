import { Provider } from "react-redux";
import { Navigator } from "./src/navigation/Navigator.jsx";
import { store } from "./src/store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
