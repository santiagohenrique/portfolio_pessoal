export const Navbar = () => {

    const navItems = ["sobre", "projetos", "contato"]

    return(
        <nav id="nav">
            <ul>
                {navItems.map((item) => {
                    return(
                        <li>
                            <a href={`#${item}`}>
                                {item}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}