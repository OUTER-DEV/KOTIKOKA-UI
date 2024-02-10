import './navbar2.css';

const Navbar2 = ()=>{
    return(
        <>
        <nav>
        <img class="logo" src="/images/mainLogo.png" alt="Logo"/>
        <div class="options">
            <div class="login">
                <img class="user" src="/images/login.png" alt=""/>
                <a href="">SE CONNECTER</a>
            </div>
            <div class="search">
                <img class="research" src="/images/mainSearch.png" alt="research"/>
                <input type="text" placeholder="Rechercher"/>
            </div>
        </div>
    </nav>
        
        </>
    )
}

export default Navbar2