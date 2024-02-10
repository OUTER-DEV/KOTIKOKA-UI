import './page.css'
const Landing = () => {

    return (
        <>
        <body>
<section>
  <header>
    <img class="logo" src="/images/mainLogo.png" alt="Logo"/>
    <div className="navigation">
      <a href="#">Lancer un projet</a>
      <a href="#">Formation</a>
      <a href="#">Participer à un projet</a>
    </div>
  </header>
  <div className="content">
    <div className="info">
      <h2>KOTIKOTA <br/><span>LANCEMENT</span></h2>
      <p>KOTIKOTA est une plateforme de crowdfounding spécialement faites pour vous aider à réaliser vos projets de coeur
        Entrez et décrouvez des gens passionées et qui ont les même visions que vous
        Obtenez des investissements et concrétiser vos idées.</p>
      <a href="#" className="info-btn">Vois Plus</a>
    </div>
  </div>
  <div className="media-icons">
    <a href="#"><i className="fab fa-facebook-f"></i></a>
    <a href="#"><i className="fab fa-twitter"></i></a>
    <a href="#"><i className="fab fa-instagram"></i></a>
  </div>
</section>

</body>
        </>
    )
}
export default Landing;