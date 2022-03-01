import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createLink, reset, editLink, deleteLink } from '../features/links/linkSlice'
import IconSelect from "./IconSelect"

export const LinkForm = ({ linkCount, link }) => {

    const [formData, setFormData] = useState({
        name: link ? link.name : '',
        url: link ? link.url : '',
        type: link ? link.type : 'url',
    })
    const [iconValue, setIconValue] = useState( link ? link.icon : '')

    const [displayIconSelect, setDisplayIconSelect] = useState(false)

    const { name, url, type } = formData

    const dispatch = useDispatch()

    useEffect(() => {
        setFormData({
            name: link ? link.name : '',
            url: link ? link.url : '',
            type: link ? link.type : 'url',
        })
        setIconValue( link ? link.icon : '')
    }, [link])

    const onSubmit = (e) => {
        e.preventDefault()

        if (name !== '' && ((type === 'url' && url !== '') || type === 'text')) {
            const linkData = {
                name,
                url: type === 'text' ? '' : url,
                type,
                icon: type === 'text' ? '' : iconValue,
                orderKey: linkCount,
            }
            if(link) {
                linkData['id'] = link._id
                dispatch(editLink(linkData))
            } else {
                dispatch(createLink(linkData))
                setFormData((prevState) => ({
                    ...prevState,
                    name: '',
                    url: '',
                    icon: '',
                }))
            }
        } else {
            toast.error('Please add all fields')
        }

    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="form-group form-w-25">
                        <label htmlFor="text">Type</label>
                        <select name="type" id="type" value={type} onChange={onChange}>
                            <option value="url">URL</option>
                            <option value="text">Text</option>
                        </select>
                    </div>
                    <div className="form-group form-w-75">
                        <label htmlFor="text">Name</label>
                        <input 
                            autoComplete="off"
                            type="text" 
                            name="name" 
                            id="name" 
                            value={name} 
                            onChange={onChange} 
                            placeholder="My YouTube Channel"
                        />
                    </div>
                </div>
                {type === 'url' &&
                <>
                    <div className="form-row">
                        <div className="form-group form-w-25">
                            <label htmlFor="text">Icon</label>
                            <div className="btn-icon" onClick={() => {setDisplayIconSelect(true)}}>
                                {iconValue !== '' ? 
                                    <div className="icon" style={{backgroundImage: `url(${iconValue})`}}></div>
                                : 
                                    'Add'    
                                }
                            </div>
                        </div>
                        <div className="form-group form-w-75">
                            <label htmlFor="text">URL</label>
                            <input 
                                autoComplete="off"
                                type="text" 
                                name="url" 
                                id="url" 
                                value={url} 
                                onChange={onChange}
                                placeholder="https://www.youtube.com/channel/JohnDoe"
                            />
                        </div>
                    </div>
                </>
                }
                {link ? 
                    <div className="form-row">
                        <div className="form-group form-w-25">
                            <div className="form-group">
                                <a onClick={() => dispatch(deleteLink(link._id))} className="btn btn-danger">Delete</a>
                            </div>
                        </div>
                        <div className="form-group form-w-75">
                            <div className="form-group">
                                <input type="submit" className="btn btn-warning" value={`Edit ${type}`} />
                            </div>
                        </div>
                    </div>
                :
                    <div className="form-group">
                        <input type="submit" className="btn" value={`${link ? 'Edit ': 'Add '} ${type}`} />
                    </div>
                }
            </form>
            {displayIconSelect && <IconSelect setDisplayIconSelect={setDisplayIconSelect} setIconValue={setIconValue}/> }
        </section>
    )
}

export default LinkForm