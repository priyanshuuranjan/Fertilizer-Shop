import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { app } from "./firebase.config";

createRoot(document.getElementById("root")).render(
  <Provider store={store} app={app}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
