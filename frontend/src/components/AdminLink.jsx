import { useEffect, useState } from 'react'
import LinkForm from './LinkForm'
import './style/adminLink.css'
import { Draggable } from 'react-beautiful-dnd'

const AdminLink = ({link, index}) => {
    const [ displayEdit, setDisplayEdit ] = useState(false)

    useEffect(() => {
        setDisplayEdit(false)
    }, [link])

    return (
        <Draggable draggableId={`${index}-id`} index={index}>
        {(provided, snapshot) => (
            <div
                style={provided.draggableProps.style}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                
                <div className='admin-link-container'>
                    <div className={'admin-shadow '+ `${displayEdit ? 'show' : ''}`}>
                        <div className="admin-link-flex">
                            {link.url ? 
                                <div className="display-link" onClick={() => setDisplayEdit(!displayEdit)}>
                                        <a>
                                            <div style={{ backgroundImage: `url("${link.icon}")` }} className="icon"></div>
                                            <p className="name">
                                                {link.name}
                                            </p>
                                        </a>
                                </div>
                            :
                                <div className="display-text" onClick={() => setDisplayEdit(!displayEdit)}>
                                    <p>
                                        {link.name}
                                    </p>
                                </div>
                            }
                            <div className="sort">
                                <p>||</p>
                            </div>
                        </div>
                        <div className="collapse">
                            <LinkForm link={link} linkCount={index} />
                        </div>
                    </div>
                </div>
            </div>
        )}
        </Draggable>
    )
}

export default AdminLink