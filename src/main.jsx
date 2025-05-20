import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Gmae from "./Game";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Gmae />
  </StrictMode>
);
