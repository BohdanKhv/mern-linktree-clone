import { useEffect } from "react" 
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const Dashboard = () => {

    const navigate = useNavigate()
    const params = useParams()
    // const { user } = useSelector((state) => state.auth )

    // useEffect(() => {
    //     console.log(!params.id)
    //     if(!user) {
    //         navigate('/login')
    //     }
    // }, [user, params, navigate])

    return (
        <>
            <section className='heading'>
                <h1>It's {params && params.id} display</h1>
            </section>
        </>
    )
}

export default Dashboard