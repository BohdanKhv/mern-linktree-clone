import { useState } from "react"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createLink, reset } from '../features/links/linkSlice'
import IconSelect from "./IconSelect"

export const LinkForm = ({ linkCount }) => {

    const [formData, setFormData] = useState({
        name: '',
        url: '',
        type: 'url',
    })
    const [iconValue, setIconValue] = useState('')

    const [displayIconSelect, setDisplayIconSelect] = useState(false)

    const { name, url, type, icon } = formData

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        if (name !== '' && ((type === 'url' && url !== '') || type === 'text')) {
            const linkData = {
                name,
                url,
                type,
                icon: iconValue,
                orderKey: linkCount
            }
            dispatch(createLink(linkData))
            setFormData((prevState) => ({
                ...prevState,
                name: '',
                url: '',
                icon: '',
            }))
        } else {
            toast.error('Please all all fields')
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
                        <select name="type" id="type" onChange={onChange}>
                            <option value="url">URL</option>
                            <option value="text">Text</option>
                        </select>
                    </div>
                    <div className="form-group form-w-75">
                        <label htmlFor="text">Name</label>
                        <input 
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
                <div className="form-group">
                    <input type="submit" className="btn" value={`Add ${type}`} />
                </div>
            </form>
            {displayIconSelect && <IconSelect setDisplayIconSelect={setDisplayIconSelect} setIconValue={setIconValue}/> }
        </section>
    )
}

export default LinkForm