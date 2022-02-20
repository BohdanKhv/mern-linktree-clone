const AdminLink = ({link}) => {
    return (
        <div className="admin-link">
            {link.url ? 
                <a href={link.url} target="_blank">
                    <span className="icon">
                        {link.icon}
                    </span>
                    <span className="name">
                        {link.name}
                    </span>
                </a>
            :
                <div>
                    <span className="icon">
                        {link.icon}
                    </span>
                    <span className="name">
                        {link.name}
                    </span>
                </div>
            }
        </div>
    )
}

export default AdminLink