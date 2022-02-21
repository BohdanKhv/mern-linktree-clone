import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
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

        if(password === '' || username === '') {
            toast.error("Please add all fields")
        } else {
            const userData = {
                username, 
                password
            }

            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1><FaUser/> Register</h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group-username">
                        <div className="pre-input">
                            <p>LinkTree.com/</p>
                        </div>
                        <input 
                            type="text" 
                            className="form-control-username" 
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
                        <button className="btn btn-block" type="submit">Register</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register