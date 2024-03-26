import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Card } from "./Card";


export const Projects = () => {
    return(
        <section id="projetos">
            <h2 className="projects-title">Projetos</h2>
            <div className="card-container">
                <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"FunStart Games"} techs={[faReact]} />
                <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"FunStart Games"} techs={[faReact]} />
                <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"FunStart Games"} techs={[faReact]} />
            </div>
        </section>
    );
}