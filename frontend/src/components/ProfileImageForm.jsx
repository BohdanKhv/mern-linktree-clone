import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { editUser } from '../features/auth/authSlice'

const ProfileImageForm = ({user}) => {
    const profileInput = useRef()
    const dispatch = useDispatch()
    const [ isUploadingImg, setIsUploadingImg ] = useState(false)

    const onClickProfileImage = () => {
        profileInput.current.click()
    }

    const onChangeProfileImage = (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        setIsUploadingImg(true)
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = (event) => {
            setIsUploadingImg(false)
            dispatch(editUser({profileImage: event.target.result}))
        }
    }

    return (
        <section className='heading'>
            { user &&
                <div className="profile">
                    <div className="username-img-container">
                        <div className="username-img-bg" style={{backgroundImage: `url(${user.profileImage !== '' && user.profileImage})`}}>
                            {!isUploadingImg ?
                                user.profileImage === '' &&
                                    <span>{user.username.slice(0,1).toUpperCase()}</span>
                            :
                                <span>...</span>
                            }
                            <small onClick={onClickProfileImage}>+</small>
                            <input ref={profileInput} type="file" hidden name="profileImage" onChange={onChangeProfileImage} accept="image/png, image/gif, image/jpeg" />
                        </div>
                    </div>
                    <h1>{`@${user.username}`}</h1>
                    <div className="profile-views" title="Profile views">
                        <img src="https://img.icons8.com/wired/64/000000/eye" />
                        <p>{user.viewCount}</p>
                    </div>
                </div>
            }
        </section>
    )
}

export default ProfileImageForm