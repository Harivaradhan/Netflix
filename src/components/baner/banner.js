import React, {useState,useEffect } from 'react'
import axios from '../../axios'
import {imageUrl} from '../../constants/const';
import {API_KEY} from '../../constants/const';
import './banner.css';
function Banner() {
const [movie, setMovie]=useState()
const rn = (Math.floor(Math.random()*20));
  useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data)
  setMovie(response.data.results[rn])
})
  },[])
  return (
   
    <div style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})`}}
     className='Banner'>
  
      <div className='content'>
        <h1 className='title'> {movie? movie.title : ""}
        </h1>
        <div className='Banner_buttons'>
          <button className='button'>play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie? movie.overview:" "}</h1>
        <div className="fade"></div>
      </div>
    </div>

    
  );
}

export default Banner;