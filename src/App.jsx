import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
         <Routes>
           <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}/>
           </Route>
         </Routes>
    </>
  );
}

export default App;
