import { useEffect } from 'react'
import './style/iconSelect.css'

const iconUrls = [
    "https://img.icons8.com/wired/50/000000/facebook",
    "https://img.icons8.com/wired/64/000000/instagram",
    "https://img.icons8.com/wired/64/000000/tiktok",
    "https://img.icons8.com/wired/64/000000/youtube",
    "https://img.icons8.com/wired/64/000000/shopify",
    "https://img.icons8.com/wired/64/000000/spotify",
    "https://img.icons8.com/wired/64/000000/discord",
    "https://img.icons8.com/wired/64/000000/amazon",
    "https://img.icons8.com/wired/64/000000/twitch",
    "https://img.icons8.com/wired/64/000000/tinder",
    "https://img.icons8.com/wired/64/000000/vk-com",
    "https://img.icons8.com/wired/64/000000/github",
    "https://img.icons8.com/wired/64/000000/reddit",
    "https://img.icons8.com/wired/64/000000/domain",
    "https://img.icons8.com/wired/64/000000/pin",
    "https://img.icons8.com/wired/64/000000/share",
    "https://img.icons8.com/wired/64/000000/connect",
    "https://img.icons8.com/wired/64/000000/code-file",
    "https://img.icons8.com/wired/64/000000/audio-file",
    "https://img.icons8.com/wired/64/000000/video-file",
    "https://img.icons8.com/wired/64/000000/word",
    "https://img.icons8.com/wired/64/000000/developer",
    "https://img.icons8.com/wired/64/000000/usa",
    "https://img.icons8.com/wired/64/000000/api",
    "https://img.icons8.com/wired/64/000000/text",
    "https://img.icons8.com/wired/64/000000/chrome",
    "https://img.icons8.com/wired/64/000000/notification",
    "https://img.icons8.com/wired/64/000000/link",
    "https://img.icons8.com/wired/64/000000/data-transfer",
    "https://img.icons8.com/wired/64/000000/upload",
    "https://img.icons8.com/wired/64/000000/download",
    "https://img.icons8.com/wired/64/000000/document",
    "https://img.icons8.com/wired/64/000000/folder",
    "https://img.icons8.com/wired/64/000000/medium-icons",
    "https://img.icons8.com/wired/64/000000/cursor",
    "https://img.icons8.com/wired/64/000000/eye",
    "https://img.icons8.com/wired/64/000000/watch",
    "https://img.icons8.com/wired/64/000000/bookmark",
    "https://img.icons8.com/wired/64/000000/opened-folder",
    "https://img.icons8.com/wired/64/000000/music",
    "https://img.icons8.com/wired/64/000000/shop",
    "https://img.icons8.com/wired/64/000000/shopping-basket",
    "https://img.icons8.com/wired/64/000000/windows-10-store",
    "https://img.icons8.com/wired/64/000000/sell",
    "https://img.icons8.com/wired/64/000000/receive-cash",
    "https://img.icons8.com/wired/64/000000/summer-sales",
    "https://img.icons8.com/wired/64/000000/free-shipping",
    "https://img.icons8.com/wired/64/000000/banknotes",
    "https://img.icons8.com/wired/64/000000/bitcoin-sccepted",
    "https://img.icons8.com/wired/64/000000/wallet",
    "https://img.icons8.com/wired/64/000000/bank-cards",
    "https://img.icons8.com/wired/64/000000/qr-code",
    "https://img.icons8.com/wired/64/000000/one-free",
    "https://img.icons8.com/wired/64/000000/book-shelf",
    "https://img.icons8.com/wired/64/000000/play",
    "https://img.icons8.com/wired/64/000000/google-play",
    "https://img.icons8.com/wired/64/000000/play-button-circled",
    "https://img.icons8.com/wired/64/000000/epic-games",
    "https://img.icons8.com/wired/64/000000/steam",
    "https://img.icons8.com/wired/64/000000/world-of-warcraft",
    "https://img.icons8.com/wired/64/000000/roblox",
    "https://img.icons8.com/wired/64/000000/controller",
    "https://img.icons8.com/wired/64/000000/counter-strike",
    "https://img.icons8.com/wired/64/000000/xbox",
    "https://img.icons8.com/wired/64/000000/apple-app-store",
    "https://img.icons8.com/wired/64/000000/stocks",
    "https://img.icons8.com/wired/64/000000/economic-improvement",
    "https://img.icons8.com/wired/64/000000/unsplash",
    "https://img.icons8.com/wired/64/000000/camera",
    "https://img.icons8.com/wired/64/000000/gift",
    "https://img.icons8.com/wired/64/000000/picture",
    "https://img.icons8.com/wired/64/000000/movie-projector",
    "https://img.icons8.com/wired/64/000000/lol",
    "https://img.icons8.com/wired/64/000000/sad",
    "https://img.icons8.com/wired/64/000000/user",
    "https://img.icons8.com/wired/64/000000/people",
    "https://img.icons8.com/wired/64/000000/team",
    "https://img.icons8.com/wired/64/000000/thumb-up",
    "https://img.icons8.com/wired/64/000000/thumbs-down",
    "https://img.icons8.com/wired/64/000000/hand-right",
    "https://img.icons8.com/wired/64/000000/ok-hand",
    "https://img.icons8.com/wired/64/000000/good-quality",
    "https://img.icons8.com/wired/64/000000/thumbnails",
    "https://img.icons8.com/wired/64/000000/arrow",
    "https://img.icons8.com/wired/64/000000/checkmark.png",
    "https://img.icons8.com/wired/64/000000/left",
    "https://img.icons8.com/wired/64/000000/right",
    "https://img.icons8.com/wired/64/000000/up",
    "https://img.icons8.com/wired/64/000000/down",
    "https://img.icons8.com/wired/64/000000/forward",
    "https://img.icons8.com/wired/64/000000/forward-arrow",
    "https://img.icons8.com/wired/64/000000/open-source",
    "https://img.icons8.com/wired/64/000000/taco",
]


const IconSelect = ({ setDisplayIconSelect, setIconValue }) => {

    useEffect(() => {

        document.querySelector('body').style.overflowY = 'hidden'

        return () => {
            document.querySelector('body').style.overflowY = 'auto'
        }
    })

    return (
        <div className="icon-select-overlay">
            <div className="icon-select-wrapper">
                <button onClick={() => setDisplayIconSelect(false)} className="close">Close</button>
                <div>
                    <h3>Icons</h3>
                    <hr />
                    <div className="icons-container">
                        <div className="icons-grid">
                            {iconUrls.map((icon, index) => {
                                return (
                                    <button key={`Icon-button-select-${index}`} data-url={icon} onClick={() => {setIconValue(icon); setDisplayIconSelect(false) }} className="icon-select-btn">
                                        <div className="select-icon" style={{backgroundImage: `url(${icon})`}}></div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconSelect