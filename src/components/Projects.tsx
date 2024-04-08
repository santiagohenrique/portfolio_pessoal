import { Card } from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        <section id="projetos">
            <h2 className="projects-title">Projetos</h2>
            <div className="card-container">
                <Slider {...settings}>
                    <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"FunStart Games"} deployLink="#" codeLink="#" />
                    <Card img={"./jokenpo-banner.PNG"} alt="Jokenpô banner" title={"Jokenpô game"} deployLink="https://santiagohenrique.github.io/jokenpo_react/" codeLink="https://github.com/santiagohenrique/jokenpo_react"  />
                    <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"Slide 3"} deployLink="#" codeLink="#"  />
                    <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"Slide 4"} deployLink="#" codeLink="#"  />
                    <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"Slide 5"} deployLink="#" codeLink="#"  />
                    <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"Slide 6"} deployLink="#" codeLink="#"  />
                    <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"Slide 7"} deployLink="#" codeLink="#"  />
                    <Card img={"./funstart-banner.png"} alt="FunStart banner" title={"Slide 8"} deployLink="#" codeLink="#"  />
                </Slider>
            </div>
        </section>
    );
}