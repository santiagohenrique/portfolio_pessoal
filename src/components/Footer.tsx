import { Navbar } from "./Navbar";
import { SocialMedia } from './SocialMedia';

export const Footer = () => {
    return(
        <footer id="footer">
            <div className="container flex align-center flex-column gap">
                <h2>
                    Henrique Santiago 
                </h2>
                <Navbar />
                <SocialMedia />
            </div>
        </footer>
    );
}