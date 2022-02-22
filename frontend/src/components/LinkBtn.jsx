const LinkBtn = ({link}) => {
    return (
        <>
            {link.url ? 
                <div className="display-link">
                        <a href={link.url} target="_blank">
                            <div style={{ backgroundImage: `url("${link.icon}")` }} className="icon"></div>
                            <p className="name">
                                {link.name}
                            </p>
                        </a>
                </div>
            :
                <div className="display-text">
                    <p>
                        {link.name}
                    </p>
                </div>
            }
        </>
    )
}

export default LinkBtn