import { createRoot } from "react-dom/client";
import App from "./app/app.tsx";
import "./index.css";

createRoot(document.querySelector("#root")!).render(<App />);
