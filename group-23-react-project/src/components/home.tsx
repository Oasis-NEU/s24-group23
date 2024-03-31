import React from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from './calendar'
import csRequirements from '../assets/cs-requirements';

function Home() {

  return(
    <div>
      <Calendar coursesArray={[csRequirements]} />
    </div>
  );

}

export default Home