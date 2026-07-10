// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './app/App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./index.css";

// inside your root render:
<RouterProvider router={router} />;
