import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import LinkForm from "../components/LinkForm"

const Admin = () => {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if(!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <>
            <section className='heading'>
                <h1>Welcome {user && user.username}</h1>
                <p>Dashboard</p>
            </section>
            <LinkForm />
        </>
    )
}

export default Admin