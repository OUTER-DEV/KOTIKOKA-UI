"use client"
import React, {useState, useEffect} from "react";
import { faM } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
import Link from "next/link";
import { NotificationProvider } from "./providers/notification/notificationApi";
export default  function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [notif,setNotif] = useState();
  const [modal, setModal] = useState(false);

  const handleClick= ()=>{
    if(!modal) {
      setModal(true)
      Modal.ModalStyle = Style={display: none}
    }
    Modal.ModalStyle = Style= {display:absolute }

    
  }
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await NotificationProvider.getNotification(1)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const fetchedData = await response.json();
        console.log(fetchData)
        setNotif(fetchedData);
      } catch (error) {
        console.error(error)
      } 
      
    };

    fetchData();

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  


  return (
     <>
         <div className="header">
          <nav className={scrolled ? '_fix scrolled' : '_fix'}>
            <img className="logo" src="/images/mainLogo.png" alt="Logo"/>
            <div className="options">
                <div className="login">
                    <img className="user" src="/images/login.png" alt=""/>
                    <Link href="/connexion" onClick={ document.location.reload}>SE CONNECTER</Link>
                </div>
                <Modal className={ModalStyle} content=""/>
                <div className="notif">
<p className="notification"><img onClick={handleClick} className="notif" src="/images/R.png"></img></p>
                </div>
                <div className="search">
                    <img className="research" src="/images/mainSearch.png" alt="research"/>
                    <input className="_searchText" type="text" placeholder="Rechercher"/>
                </div>
            </div>
        </nav>
      <>
      {JSON.stringify(notif) } 
      </>
       
        <div className="titleHeader">
            <div className="title">
                <p className="subtitle">Donnez vie aux rêves</p>
                <div className="p1">
                    <p >Bienvenue sur Kotikota </p>
                <p >votre plateforme de financement participatif!</p>
                </div>
                <div className="p2">
                    <p>Ensemble, faisons grandir vos projets</p>
                    <p>Joignez-vous à nous et transformons </p>
                    <p>les rêves en réalité.</p>
                </div>
            </div>
           
            <img src="/images/people_doing_project.jpg" alt="Project Image"/>
        </div>
    </div>

    <div className="projects">
        <h2>Nous existons pour aider</h2>
        <span>Voicis quelques projets en cours de notre communauté</span>
    
    <div className="container">
        <div className="side">
            <img className="puzzle" src="/images/build.png" alt="puzzle"/>
        <div className="description2">
            <p>Comme vous pouvez le voir</p>
            <p>Divers types de projets </p>
            <p>Sont soutenus par notre communauté</p>
        </div>
        </div>
        
        <div className="projectsImg">
          <div>
            {

            }
          </div>
            <div className="img1">
              <img src="/images/projects/animals.jpg" alt="animals"/>
              <h3>MyHome</h3>
              <p className="description">Refuge pour animaux</p>
              <span>Ar 2 2670 000</span>
            </div>
            <div className="img1">
              <img src="/images/projects/pianist.jpg" alt="pianist"/>
              <h3>Music Fest</h3>
              <p className="description">Pianiste en herbe</p>
              <span>Ar 998 000</span>
            </div>
            <div className="img1">
              <img src="/images/projects/school.jpg" alt="school"/>
              <h3>123 Success</h3>
              <p className="description">Ecole "semi-privée"</p>
              <span>Ar 10 356 000</span>
            </div>
             <div className="img1">
              <img src="/images/projects/resto.jpg" alt="resto"/>
              <h3>Yummy Yummy</h3>
              <p className="description">Un resto cheap</p>
              <span>Ar 860 000</span>
            </div> 
            <div className="img1">
              <img src="/images/projects/artExpostition.jpg" alt="art"/>
              <h3>Gallery</h3>
              <p className="description">Exposition d'art contemporain</p>
              <span>Ar 4 000 100</span>
            </div> 
            <div className="img1">
              <img src="/images/projects/zumba.jpg" alt="Zumba"/>
              <h3>ZUMBATSIKA</h3>
              <p className="description">Tous en forme!</p>
              <span>Ar 127 000</span>
            </div>

          
      </div>
    </div>
        
    </div>
        </>
  );
}

const Modal = (props)=>{
  return(
    <div className={props.ModalStyle}>
    <div className="_content">
      {props.content}
    </div>
    </div>
  )
}