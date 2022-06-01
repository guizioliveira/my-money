import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer } from "miragejs";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

createServer({
  routes() {
    this.namespace = "/api";

    this.get("/transactions", () => [
      {
        title: "New transaction",
        value: 500,
        category: "Food",
        date: "02/20/2022"
      }
    ]);
  }
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
