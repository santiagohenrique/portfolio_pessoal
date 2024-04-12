import { Card } from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import funstartBanner from '/funstart-banner.png';
import jokenpoBanner from '/jokenpo-banner.png';
import projeto from '/projeto.png'

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
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    columns: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    columns: 2
                }
            }
        ]
    };

    return(
        <section id="projetos">
            <h2 className="projects-title">Projetos</h2>
            <div className="card-container">
                <Slider {...settings}>
                    <Card img={funstartBanner} alt="FunStart banner" title={"FunStart Games"} deployLink="#" codeLink="#" />
                    <Card img={jokenpoBanner} alt="Jokenpô banner" title={"Jokenpô game"} deployLink="https://santiagohenrique.github.io/jokenpo_react/" codeLink="https://github.com/santiagohenrique/jokenpo_react"  />
                    <Card img={projeto} alt="Projeto em desenvolvimento" title={"Projeto"} deployLink="#" codeLink="#" />
                    <Card img={projeto} alt="Projeto em desenvolvimento" title={"Projeto"} deployLink="#" codeLink="#" />
                </Slider>
            </div>
        </section>
    );
}