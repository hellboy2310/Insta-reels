import React, { Component } from 'react'
import { movies } from '../movieData';
import axios from 'axios';

class Banner extends Component {
   
    constructor(){
        super();
        this.state = {
            movies:""
        }
    }


   
   async componentDidMount(){
    const res = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=8071a22ab61069e095c902d8e411d789');
    this.setState({
        movies: res.data.results[0]
    })
}
   
   
    render() {
        
        let backdrop_path = this.state.movies.backdrop_path;
        return (


            <div className="card banner-card" >
                <img class="card-img-top banner-img" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="Card image cap" />


                <h1 className="card-title banner-title">{this.state.movies.title}</h1>
                <p className="card-text banner-text">{this.state.movies.overview}</p>


            </div>

        )
    }
}

export default Banner;
