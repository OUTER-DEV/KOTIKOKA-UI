"use client"
import React, { useState } from "react";
import { dataProvider } from "@/app/providers/projects/project";

const Projet = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState(0);
  const [deadline, setDeadline] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [category, setCategory] = useState("");
  const [balance, setBalance] = useState(0);
  const [percentageAchieved, setPercentageAchieved] = useState(0);
  const [numberOfContributors, setNumberOfContributors] = useState(0);
  const [contributors, setContributors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const project = {
      title,
      description,
      targetAmount,
      deadline,
      ownerId,
      category,
      balance,
      percentageAchieved,
      numberOfContributors,
      contributors,
    };

    try {
      await dataProvider.launchProject(project);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      
      <button type="submit">Launch Project</button>
    </form>
  );
};

export default Projet;