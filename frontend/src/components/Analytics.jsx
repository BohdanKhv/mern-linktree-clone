import { useState } from "react"

const Analytics = ({ data }) => {

    const [display, setDisplay] = useState(false)

    return (
        <div className="analytics" title="Clicks">
            <img src="https://img.icons8.com/wired/64/000000/cursor" />
            <p>{data}</p>
        </div>
    )
}

export default Analytics