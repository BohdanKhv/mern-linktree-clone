import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getLinks, reset } from "../features/links/linkSlice"
import LinkForm from "../components/LinkForm"
import AdminLink from "../components/AdminLink"
import Spinner from '../components/Spinner'

const Admin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { links, isError, isLoading, message } = useSelector((state) => state.links)

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        if(!user) {
            navigate('/login')
        }

        dispatch(getLinks(user.username))

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1>Welcome {user && user.username}</h1>
                <p>Dashboard</p>
            </section>
            <LinkForm />
            <section className="admin-body">
                {
                    links.map((link, index) => {
                        return <AdminLink key={`Admin-links-${index}`} link={link}/>
                    })
                }
            </section>
        </>
    )
}

export default Admin