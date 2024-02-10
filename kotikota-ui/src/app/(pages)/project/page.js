
"use client"
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import '../project/page.css';
import Buton from './component/buton';
import Desc from './component/desc';
import Question from './component/question';
import { dataProvider } from "@/app/providers/projects/project";
import { useRouter } from 'next/navigation';


const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [ownerId, setOwnerId] = useState("");

  const [category, setCategory] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      title,
      description,
      targetAmount,
      deadline,
      ownerId,
      category,
    };

    try {
      await dataProvider.launchProject(project);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar /> <br/><br/>
      <form className="project-create" onSubmit={handleSubmit}>
        <div className='title-container'>
          <label className="title">Lancez votre projet</label>
          <label className="ktk">sur KOTIKOTA</label>
        </div> <br/>
        <div className='idea-container'>
          <img src='/images/idea.png' className='idea' alt="Idea" />
          <b><label className="phrases">Avez-vous un projet ? Prenez quelques minutes pour nous le décrire</label></b>
        </div> <br/>
        <div className='container'>
          <div className='question'>
            <Question className1="number" className2="phrase" phrase="Quel est votre projet ?" number={1} />
          </div>
          <div className='describes'>
            <b><Desc className="phrases" phrase="Commencez par nous dire le nom de votre projet :" /></b><br/>
            <input className='input1' type='text' placeholder="Kotikota..." value={title} onChange={(e) => setTitle(e.target.value)} /> <br/>
            <b><Desc className="phrases" phrase="Décrivez brièvement votre projet :" /></b><br/>
            <textarea placeholder="Entrez votre description ici..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br/>
            <b><Desc className="phrases" phrase="Précisez le montant dont vous avez besoin :" /></b><br/>
            <input className='input1' type='text' placeholder="Kotikota..." value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} /> <br/>
            <b><Desc className="phrases" phrase="Deadline.. :" /></b><br/>
            <input className='input1' type='text' placeholder="Kotikota..." value={deadline} onChange={(e) => setDeadline(e.target.value)} /> <br/>
            <b><Desc className="phrases" phrase="Choisissez la catégorie de votre projet ou entrez le si ce n'est pas présent dans la liste :" /></b><br/>
            <div className='wrapper-types'> 
              <div className='types'>
                <div className='radio-container'>              
                  <div className='categories'>
                    <input className='input-radio'  type='radio' />
                  </div>
                  <div className='icon'>
                    <img src='/images/running.png' className='runing' alt="Running" />
                    <label className="type">SPORT</label>
                  </div>
                </div>
                <div className='radio-container'>              
                  <div className='categories'>
                    <input className='input-radio'  type='radio' />
                  </div>
                  <div className='icon'>
                    <img src='/images/music.png' className='runing' alt="Music" />
                    <label className="type">MUSIQUE</label>
                  </div>
                </div>
                <div className='radio-container'>              
                  <div className='categories'>
                    <input className='input-radio'  type='radio' />
                  </div>
                  <div className='icon'>
                    <img src='/images/running.png' className='runing' alt="Running" />
                    <label className="type">CUISINE</label>
                  </div>
                </div> 
              </div>
              <div className='others'>
                <b><Desc className="phrases" phrase="Veuillez écrire ici ci votre projet n'est pas dans ces domaines :" /></b>
                <input className='input1' type='text'placeholder="Agriculture..." value={category} onChange={(e) => setCategory(e.target.value)} /> <br/>
              </div>
            </div>
          </div> <br/>
          <Buton className="btn" phrase="Envoyer"/>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;