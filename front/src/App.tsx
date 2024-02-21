import './App.css'
import Header from "./components/Header.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import TodayQuizz from "./pages/TodayQuizz.tsx";
import CardsList from "./pages/CardsList.tsx";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <div className="page-content">
            <Routes>
                <Route index element={<TodayQuizz/>}/>
                <Route path='/cards' element={<CardsList/>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
