import { Navbar } from "./Navbar";

export const Header = () => {
    return(
        <header id="header">
            <div className="container flex justify-between align-center">
                <h1 className="header-title">
                    <span>&lt; </span> 
                    Henrique Santiago 
                    <span> /&gt;</span>
                </h1>
                <Navbar />
            </div>
        </header>
    );
    
}