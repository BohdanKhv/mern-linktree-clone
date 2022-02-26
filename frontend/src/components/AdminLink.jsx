import { useState } from 'react'
import LinkForm from './LinkForm'
import './style/adminLink.css'

const AdminLink = ({link}) => {

    const [ displayEdit, setDisplayEdit ] = useState(false)

    return (
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
                        <button>||</button>
                    </div>
                </div>
                <div className="collapse">
                    <LinkForm link={link} />
                </div>
            </div>
        </div>
    )
}

export default AdminLink