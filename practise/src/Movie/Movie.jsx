import axios from 'axios'
import React,{useState} from 'react'

export default function Movie() {

  const [movieData, setMovieData] = useState([]);
  const [movieName,setMovieName] = useState("");
  const [isStatus , setIsStatus] = useState(false);
  const [isLoading, setIsLoading] = useState()

  const movieBtn = () =>{
    axios.get(`https://omdbapi.com/?s=${movieName}&page=1&apikey=eef0b2e9`).then((res)=>{
if(res.data.Response === 'True'){
  
  setIsStatus(true)
setMovieData(res.data.Search);
}else{
setIsStatus(false)
document.body.innerHTML = `<h2>404 not found</h2>`
}
    
    
    
      
    })
    
  }

  const addMovie = (e) =>{
setMovieName(e.target.value);

  }
  return (
    <div>
      <h1>Movie-Cards</h1>
      <input placeholder='search your movie cards here...'
      type='text'
     onChange={addMovie}
     value={movieName}
      />
      <button onClick={movieBtn}>ADD</button>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    {
 movieData.map((movie,idx)=>{
return  <div className="col">
    <div className="card">
      <img src={movie.Poster} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  </div>
})
    }
  
    </div>
</div>
  )
}

  //  if(res.Response === "True"){
  //      setMovieData({res.data.Search})
  //     }