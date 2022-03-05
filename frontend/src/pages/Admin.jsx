import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getLinks, reset, editLink } from "../features/links/linkSlice"
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import LinkForm from "../components/LinkForm"
import AdminLink from "../components/AdminLink"
import Spinner from '../components/Spinner'
import ProfileImageForm from "../components/ProfileImageForm"
import Analytics from "../components/Analytics"
import '../components/style/adminStyle.css'

const Admin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user, isLoading } = useSelector((state) => state.auth)
    const [isDragging, setIsDragging] = useState(false)
    let { links, isError, message } = useSelector((state) => state.links)
    

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        links = result
        return result;
    };

    const onDragEnd = async (result) => {
        if (!result.destination) {
            return;
        }

        reorder(
            links,
            result.source.index,
            result.destination.index
        );
        setIsDragging(false)

        // await new Promise((resolve) => {
        //     setTimeout(() => resolve(), 1000);
        // });

        const data = links.map((item, index) => ({
            _id: item._id,
            orderKey: index
        }));
        dispatch(editLink(data))

    }

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        if(!user) {
            navigate('/login')
        } else {
            dispatch(getLinks(user.username))
        }

        return () => {
            // dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div className="admin">
            <ProfileImageForm user={user} />
            <LinkForm linkCount={links.length}/>
            <div className="admin-links">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <section className="admin-body">
                                {links && links.map((link, index) => (
                                    <AdminLink 
                                        key={`Admin-links-${index}`} 
                                        link={link} 
                                        index={index}
                                        isDragging={isDragging}
                                    />
                                ))}
                            </section>
                            {provided.placeholder}
                        </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}

export default Admin