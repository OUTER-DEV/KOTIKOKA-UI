import './navbar.css'
const Navbar = () => {

    return (
        <>
            <nav>
                <img class="logo" src="/images/mainLogo.png" alt="Logo" />
                <div class="options">
                                <input type="checkbox" id="toggle"/>
                                    <label for="toggle">Open Overlay</label>

                                    <dialog >
                        <p>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
                        </p>


                        <label for="toggle">close overlay</label>
                        </dialog>
                    <div class="search">
                        <img class="research" src="/images/mainSearch.png" alt="research" />
                        <input type="text" placeholder="Rechercher" />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;