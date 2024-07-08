import Inicio from "./pages/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NovoVideo from "./pages/NovoVideo"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/NovoVideo" element={<NovoVideo />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes