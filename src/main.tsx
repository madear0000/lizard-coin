import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
