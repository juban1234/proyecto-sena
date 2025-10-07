import { Route, Routes } from "react-router-dom"
import { Login } from "./Vista/Login/Login"
import { Recuperar } from "./Vista/Recuperar/Recuperar"


export const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Recuperar />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </>
  )
}

