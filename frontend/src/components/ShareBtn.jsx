import './style/shareBtn.css'

const ShareBtn = ({username}) => {

    const onClick = () => {
        const shareData = {
            title: `${username}`,
            text: `Check out ${username} on LinkTree`,
            url: `https://link-tree-clone.herokuapp.com/${username}`
        }
        navigator.share(shareData)
    }

    return (
        <div className="share" title="Share" onClick={onClick}>
            <div className="share-icon"></div>
        </div>
    )
}

export default ShareBtn