interface Props {
    img: string,
    alt: string,
    title: string,
    deployLink: string,
    codeLink: string;
}

export const Card = ({img, alt, title, deployLink, codeLink}: Props) => {
    return(
        <div className="card-item">
            <div className="card-item-wrap">
                <div className="card-img">
                    <img src={img} alt={alt} />
                </div>
                <div className="card-info">
                    <div className="card-title">
                        {title}
                    </div>
                    <div className="card-links">
                        {
                            deployLink === "#"? <></> : 
                            <>
                            <a href={deployLink} target="_blank">
                                <span>Ver projeto</span>
                            </a>
                            <span> | </span>
                            </> 
                        }
                        <a href={codeLink} target="_blank">
                            <span>Código</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}