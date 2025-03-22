import { Provider } from "react-redux";
import { Navigator } from "./src/navigation/Navigator.jsx";
import { store } from "./src/store/store.js";
import { useDataBase } from "./src/hooks/useDataBase.js";
import { useEffect } from "react";

export default function App() {
  const { initDB } = useDataBase();
  
  useEffect(() => {
    initDB();
  },[]);

  return (
    //Provide global state for my app
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
