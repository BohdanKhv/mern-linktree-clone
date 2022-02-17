import { useState, useEffect } from "react"
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })


    const {username, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(username === '' || password === '') {
            toast.error('Please all all fields')
        } else {
            const userData = {
                username,
                password
            }

            dispatch(login(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1 className="justify-center"><FaSignInAlt/> Login</h1>
                <p>Please login using your credentials</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="username"
                            name="username" 
                            value={username} 
                            placeholder="Username"
                            onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password"
                            name="password" 
                            value={password} 
                            placeholder="Password"
                            onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block" type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login