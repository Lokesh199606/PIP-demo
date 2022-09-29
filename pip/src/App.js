import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./employees/Employees";
import LoginPage from "./login/login";
import configureStore from "./reducers/store";
import { Provider } from 'react-redux'
import Personal from "./personal/personal";

function App() {

    const [role, setRole] = useState(false);

    const roleHandler = (value) => {
        setRole(value);
    }

    return (
        <div>
            <Provider store={configureStore()}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage role={roleHandler} />} />
                        <Route path="/employees" element={<Employees role={role} />} />
                        <Route path="/personal" element={<Personal />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}
export default App;