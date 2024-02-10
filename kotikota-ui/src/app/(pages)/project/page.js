'use client'
import Navbar from '../components/navbar';
import '../project/page.css'
import Advantages from './component/advantages';
import Buton from './component/buton';
import Desc from './component/desc';
import Question from './component/question';



const ProjectForm = () => {

  return (
    <>
      <Navbar/> <br/><br/>
      <div className='section'>
        <form className="project-create">
          <div className='title-container'>
              <label className="title">Lancez votre projet</label>
              <label className="ktk">sur KOTIKOTA</label>
          </div> <br/>
          <div className='idea-container'>
              <img src='/images/idea.png' className='idea'></img>
              <b><label className="phrases">Avez vous un projet ? Prennez quelques minutes pour nous le décrire </label></b>
          </div> <br/>
          <div className='container'>
              <div className='question'>
                  <Question className1="number" className2="phrase" phrase="Quel est votre projet ?" number={1} />
              </div>
              <div className='describes'>
                <b><Desc className="phrases" phrase="Commencez par nous dire le nom de votre projet :" /></b><br/>
                <input className='input1' type='text' placeholder="Kotikota..."/> <br/>
                <b><Desc className="phrases" phrase="Décrivez brièvement votre projet :" /></b><br/>
                <textarea placeholder="Entrez votre description ici..."></textarea><br/>
                <b><Desc className="phrases" phrase="Précisez le montant dont vous avez besoin :" /></b><br/>
                <input className='input1' type='text' placeholder="Kotikota..."/> <br/>
                <b><Desc className="phrases" phrase="Choisissez la catégorie de votre projet ou entrez le si ce n'est pas présent dans la liste :" /></b><br/>
                <div className='wrapper-types'> 
                  <div className='types'>
                    <div className='radio-container'>              
                      <div className='categories'>
                          <input className='input-radio'  type='radio'/>
                      </div>
                      <div className='icon'>
                        <img src='/images/running.png' className='runing'></img>
                        <label className="type">SPORT</label>
                      </div>
                    </div>
                    <div className='radio-container'>              
                      <div className='categories'>
                          <input className='input-radio'  type='radio'/>
                      </div>
                      <div className='icon'>
                        <img src='/images/music.png' className='runing'></img>
                        <label className="type">MUSIQUE</label>
                      </div>
                    </div>
                    <div className='radio-container'>              
                      <div className='categories'>
                          <input className='input-radio'  type='radio'/>
                      </div>
                      <div className='icon'>
                        <img src='/images/running.png' className='runing'></img>
                        <label className="type">CUISINE</label>
                      </div>
                    </div> 
                  </div>
                  <div className='others'>
                    <b><Desc className="phrases" phrase="Veuillez écrire ici ci votre projet n'estv pas dans ces domaines :" /></b>
                    <input className='input1' type='text' placeholder="Agriculture..."/> <br/>
                  </div>
                </div>
              </div> <br/>
              <Buton className="btn" phrase="Envoyer"/>
          </div>
        </form>
        <div className='advice'>
          <div className='label-container'>
            <b><label className="title-advice">KOTIKOTA est bien plus <br/> 
            qu'une simple plateforme</label></b> 
          </div> <br/> 
          <Advantages className1="advantages" src='/images/team.png' className2="adv" className3="advantage" 
          phrase="On vous accompagne tout au long du projet"/> <br/>
          <Advantages className1="advantages" src='/images/education.png' className2="adv" className3="advantage" 
          phrase="Vous aurez accès à des formations sur le domaine"/> <br/>
          <Advantages className1="advantages" src='/images/goal.png' className2="adv" className3="advantage" 
          phrase="Votre réussite est la notre"/>
        </div>
      </div>
    </>
  );
};

export default ProjectForm;
