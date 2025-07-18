import React from 'react'
import {useNavigate} from "react-router";
import { useParams } from 'react-router';

const about = () => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params, '--- params ---')
  return (
    <div>
      <p>About Page</p>
      <button onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}

export default about
