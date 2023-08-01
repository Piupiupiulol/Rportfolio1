import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login/Login';
import PrivateRoute from './security/PrivateRoute';
import HomePage from "./home/HomePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path="/home" element={<PrivateRoute redirectTo="/a"><HomePage /></PrivateRoute>} />
                    <Route path="*" element={<Navigate to="/" replace />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
