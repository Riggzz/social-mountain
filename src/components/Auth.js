import {useState} from 'react'
import axios from 'axios' 
import {useContext} from 'react'
import AuthContext from '../store/authContext'
 
const Auth = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [register, setRegister] = useState(true)

  const authCtx = useContext(AuthContext)
 
   const submitHandler = e => {
       e.preventDefault()

       const body = {
        username,
        password
       }

       const url = 'https://socialmtn.devmountain.com'

       axios.post(register ? `${url}/register` : `${url}/login`, body)
       .then(({data}) => {
        console.log('AFTER AUTH', data)
        authCtx.login(data.token, data.exp, data.userId)
       })
       .catch(err => {
        setPassword('')
        setUsername('')
       })
       
      

       console.log('submitHandler called')
   }
 
   return (
       <main>
           <h1>Welcome!</h1>
           <form className='form auth-form' onSubmit={submitHandler}>
               <input
                   className='form-input'
                   type="text"
                   placeholder='Username'
                   value={username}
                   onChange={e => setUsername(e.target.value)} />
               <input
                   className='form-input'
                   type="password"
                   placeholder='password'
                   value={password}
                   onChange={e => setPassword(e.target.value)} />

               <button className='form-btn'>
                   {register ? 'Sign Up' : 'Login'}
               </button>
           </form>
           <button className='form-btn'>Need to {register ? 'Login' : 'Sign Up'}?</button>
       </main>
   )
}
 
export default Auth