import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    img: string,
    alt: string,
    title: string,
    techs: IconDefinition[]
}

export const Card = ({img, title, techs}: Props) => {
    return(
        <div className="card-item">
            <div className="card-item-wrap">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-info">
                    <div className="card-title">
                        {title}
                    </div>
                    <div className="card-technologies">
                        {techs.map((icon, index) => (
                            <FontAwesomeIcon key={index} icon={icon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}