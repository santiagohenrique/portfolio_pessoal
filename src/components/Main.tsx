import { About } from "./About";
import { Contact } from "./Contact";
import { Projects } from "./Projects";

export const Main = () => {
    return(
        <main>
            <div className="container flex-column">
                <About />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}