import { useState } from "react"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createLink, reset } from '../features/links/linkSlice'
import IconSelect from "./IconSelect"

export const LinkForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        url: '',
        type: 'url',
        icon: ''
    })
    const [displayIconSelect, setDisplayIconSelect] = useState(false)

    const { name, url, type, icon } = formData

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        const iconRegex = "/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/"

        if (name != '' && (type === 'url' && url != '' || type === 'text')) {
            const linkData = {
                name,
                url,
                type,
                icon
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
                    <div className="form-group">
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
                    <a className="btn btn-block" onClick={() => {setDisplayIconSelect(true)}}>Add Icon</a>
                    {displayIconSelect && <IconSelect setDisplayIconSelect={setDisplayIconSelect}/> }
                </>
                }
                <div className="form-group">
                    <input type="submit" className="btn" value={`Add ${type}`} />
                </div>
            </form>
        </section>
    )
}

export default LinkForm