import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Date } from '../../Controller/Data/Date'

export const Login = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(prev => [...prev, { user, password }])
    setUser("")
    setPassword("")
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen gap-4'>
      <h1>Login Page</h1>
      <input type="text" 
        placeholder='usuario'
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      
      <input type="password" 
        placeholder='contraseña'
        value={password}
        onChange={(e) => setPassword(e.target.value)}      
      />

      <button onClick={handleSubmit}>Ingresar</button>

      <button onClick={() => navigate("/reset-password")}> olvido la contraseña</button>

      <div className="mt-6">
        <Date date={data} />
      </div>

    </div>
  )
}


