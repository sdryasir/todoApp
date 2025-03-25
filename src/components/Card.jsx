function Card(props) {
    console.log("***", props);
    
    return (
        <>
            <div className="col-md-3 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.data.subTitle}</h6>
                        <p className="card-text">{props.data.description}</p>
                        <a href={props.data.btn1.link} className="card-link">{props.data.btn1.label}</a>
                        <a href={props.data.btn2.link} className="card-link">{props.data.btn2.label}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card