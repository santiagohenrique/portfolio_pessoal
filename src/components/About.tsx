import { SocialMedia } from "./SocialMedia";
import personalPhoto from "/foto_henrique.jpg"
import personalCV from '/Henrique_S_Pires.pdf'

export const About = () => {
    return(
        <section id="sobre">
            <h2 className='about-title'>Sobre</h2>
            <div className='main-info'>
                <div className='photo-container'>
                    <img src={personalPhoto} alt='' />
                </div>
                <div className='personal-info'>
                    <div className='presentation'>
                        <h2 className='presentation-title'>
                            Oi, meu nome é Henrique Santiago &#128075;
                        </h2>
                        <p className='presentation-subtitle'>
                            Desenvolvedor de software
                        </p>
                        <ul>
                            <li>- Estudante de Análise e Desenvolvimento de Sistemas</li>
                            <li>- Focado em desenvolvimento Web</li>
                            <li>- Experiência com algumas tecnologias, tais como: JavaScript, Java, React, SpringBoot, HTML, CSS, MySQL, PostgreSQL</li>
                        </ul>
                    </div>
                    <div className='download-container'>
                        <a href={personalCV} className='download-link' target='_blank'>
                            <button className='download-button'>
                                Visualizar CV
                            </button>
                        </a>
                    </div>
                    <SocialMedia />
                </div>
            </div>
        </section>
    );
}