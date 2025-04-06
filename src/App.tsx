import './App.css'
import {SignUpPage} from "./auth/pages/SignUpPage.tsx";
import {SignInPage} from "./auth/pages/SignInPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
