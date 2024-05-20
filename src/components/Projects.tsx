import { Card } from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import funstartBanner from '../assets/imgs/funstart-banner.png';
import jokenpoBanner from '../assets/imgs/jokenpo-banner.png';
import pokedexBanner from '../assets/imgs/pokedex-banner.png';
import javaBanner from '../assets/imgs/java-banner.png';

export const Projects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    swipeToSlide: true,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    swipeToSlide: true,
                    initialSlide: 2,
                    columns: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    swipeToSlide: true,
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
                    <Card img={pokedexBanner} alt="Pokédex banner" title={"Pokédex"} deployLink="https://santiagohenrique.github.io/pokedex/" codeLink="https://github.com/santiagohenrique/pokedex" />
                    <Card img={javaBanner} alt="Projeto em desenvolvimento" title={"Exercícios Java"} deployLink="#" codeLink="https://github.com/santiagohenrique/exercicios_java" />
                </Slider>
            </div>
        </section>
    );
}