import React, {useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/const'
import './Rawpost.css'
import Youtube from 'react-youtube'
function Rawpost(props) {
  const [movies,setmovies]=useState([])
  const [url,seturl]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    }).catch(err=>{
      alert('networki error')
    })
  },[])
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '100%',
    playerVars: {

      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
   console.log(id);
   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
   if(response.data.results.length!==0)
    {
      seturl(response.data.results[0])
    }
   
   })
  }
  return (
    <div className='raw'>
    <h2>{props.title}</h2>
    <div className='posters'>
      
        {movies.map((obj)=>
          <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter': ''} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
        )}
      
   </div>
   {
 url && <Youtube videoId={url.key} opts={opts}/>
   }

    </div>
  )
}

export default Rawpost
