import './style/iconSelect.css'

const iconUrls = [
    "https://img.icons8.com/wired/50/000000/facebook-new.png",
    "https://img.icons8.com/wired/64/000000/instagram-new.png",
    "https://img.icons8.com/wired/64/000000/tiktok.png",
    "https://img.icons8.com/wired/64/000000/youtube-play.png",
    "https://img.icons8.com/wired/64/000000/shopify.png",
    "https://img.icons8.com/wired/64/000000/spotify.png",
    "https://img.icons8.com/wired/64/000000/discord.png",
    "https://img.icons8.com/wired/64/000000/amazon.png",
    "https://img.icons8.com/wired/64/000000/twitch.png",
    "https://img.icons8.com/wired/64/000000/tinder.png",
    "https://img.icons8.com/wired/64/000000/vk-com.png",
    "https://img.icons8.com/wired/64/000000/notification",
    "https://img.icons8.com/wired/64/000000/pin",
    "https://img.icons8.com/wired/64/000000/share",
    "https://img.icons8.com/wired/64/000000/connect",
    "https://img.icons8.com/wired/64/000000/link",
    "https://img.icons8.com/wired/64/000000/data-transfer",
    "https://img.icons8.com/wired/64/000000/upload",
    "https://img.icons8.com/wired/64/000000/download",
    "https://img.icons8.com/wired/64/000000/document",
    "https://img.icons8.com/wired/64/000000/folder",
    "https://img.icons8.com/wired/64/000000/medium-icons",
    "https://img.icons8.com/wired/64/000000/bookmark.png",
    "https://img.icons8.com/wired/64/000000/opened-folder.png",
    "https://img.icons8.com/wired/64/000000/music.png",
    "https://img.icons8.com/wired/64/000000/shop.png",
    "https://img.icons8.com/wired/64/000000/shopping-basket.png",
    "https://img.icons8.com/wired/64/000000/windows-10-store.png",
    "https://img.icons8.com/wired/64/000000/sell.png",
    "https://img.icons8.com/wired/64/000000/receive-cash.png",
    "https://img.icons8.com/wired/64/000000/summer-sales.png",
    "https://img.icons8.com/wired/64/000000/free-shipping.png",
    "https://img.icons8.com/wired/64/000000/banknotes.png",
    "https://img.icons8.com/wired/64/000000/bitcoin-sccepted.png",
    "https://img.icons8.com/wired/64/000000/wallet.png",
    "https://img.icons8.com/wired/64/000000/bank-cards.png",
    "https://img.icons8.com/wired/64/000000/qr-code.png",
    "https://img.icons8.com/wired/64/000000/one-free.png",
    "https://img.icons8.com/wired/64/000000/book-shelf.png",
    "https://img.icons8.com/wired/64/000000/play.png",
    "https://img.icons8.com/wired/64/000000/google-play.png",
    "https://img.icons8.com/wired/64/000000/play-button-circled.png",
    "https://img.icons8.com/wired/64/000000/epic-games.png",
    "https://img.icons8.com/wired/64/000000/steam.png",
    "https://img.icons8.com/wired/64/000000/world-of-warcraft.png",
    "https://img.icons8.com/wired/64/000000/roblox.png",
    "https://img.icons8.com/wired/64/000000/controller.png",
    "https://img.icons8.com/wired/64/000000/mobile-legends.png",
    "https://img.icons8.com/wired/64/000000/counter-strike.png",
    "https://img.icons8.com/wired/64/000000/xbox.png",
    "https://img.icons8.com/wired/64/000000/apple-app-store.png",
    "https://img.icons8.com/wired/64/000000/stocks.png",
    "https://img.icons8.com/wired/64/000000/economic-improvement.png",
    "https://img.icons8.com/wired/64/000000/unsplash.png",
    "https://img.icons8.com/wired/64/000000/camera.png",
    "https://img.icons8.com/wired/64/000000/gift.png",
    "https://img.icons8.com/wired/64/000000/picture.png",
    "https://img.icons8.com/wired/64/000000/movie-projector.png",
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