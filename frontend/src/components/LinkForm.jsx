import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'

export const LinkForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        url: '',
        type: 'url',
        icon: ''
    })

    const { name, url, type, icon } = formData

    const onSubmit = (e) => {
        e.preventDefault()



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
                            <option value="url">Url</option>
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
                        />
                    </div>
                </div>
                {type === 'url' &&
                    <div className="form-group">
                        <label htmlFor="text">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={type} 
                            onChange={onChange} 
                        />
                    </div>
                }
            </form>
        </section>
    )
}

export default LinkForm