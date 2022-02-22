import { useEffect } from "react" 
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { profileSlice, getProfile } from '../features/profile/profileSlice'
import { linkSlice, getLinks } from '../features/links/linkSlice'
import Spinner from '../components/Spinner'
import LinkBtn from '../components/LinkBtn'
import { toast } from "react-toastify"

const Dashboard = () => {

    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()
    const { user, isError, isLoading, message } = useSelector((state) => state.profile )
    const { links } = useSelector((state) => state.links )

    useEffect(() => {
        if(!params.id) {
            navigate('/login')
        }
        if(isError) {
            console.log(message)
        }

        dispatch(getProfile(params.id))
        dispatch(getLinks(params.id))

        return () => {
            dispatch(profileSlice.actions.reset())
            dispatch(linkSlice.actions.reset())
        }

    }, [navigate, dispatch])

    if(isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <section className='heading'>
                <h1>{user && `@${user.username}`}</h1>
                {message && message === 'That user does not exist' && 
                <>
                    <h1>{message}</h1>
                    <h6><Link to="/register">Click here to register using "{params.id}" username!</Link></h6>
                </>
                }
                {links && links.map((link, index) => {
                    return <LinkBtn key={`Display-link-${index}`} link={link}/>
                })}
            </section>
        </>
    )
}

export default Dashboard