import React from 'react';
import { useParams } from "react-router-dom";

const HeroProfile = () => {
  const { heroId } = useParams();
  return <div>{`hero${heroId}`}</div>
};

export default HeroProfile;