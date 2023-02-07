import React, { Component } from "react";
import { movies } from "../movieData";


class Favourites extends Component {

   constructor(){
    super();
    this.state  = {
        currgenre:"All Genres",
        genres:[],
        movies:[],
        movies2:[],
        
        currText:'',

    }
   }

  

   componentDidMount(){
    let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
    
    let data = JSON.parse(localStorage.getItem('movies-app')||'[]');
    let tempArr = [];
    tempArr.push("All Genres");
    
    data.map((movieObj)=>{
        if(!tempArr.includes(genreIds[movieObj.genre_ids[0]])){
            tempArr.push(genreIds[movieObj.genre_ids[0]]);
        }
    })

    this.setState({
       movies:[...data],
       movies2:[...data],
        genres:[...tempArr]
    })
    

    
   }
   
   handleChangeGenre = (genre)=>{
    this.setState({
        currgenre:genre
    },this.filterMovies)
}

filterMovies = ()=>{
    let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
    let data = JSON.parse(localStorage.getItem("movies-app") || '[]');
    if(this.state.currgenre == "All Genres"){
        this.setState({
            movies:[...data],
            movies2:[...data]
        })
    }else{
        let filteredMovies = data.filter((movieObj)=>genreIds[movieObj.genre_ids[0]] == this.state.currgenre)
        this.setState({
            movies:[...filteredMovies],
            movies2:[...filteredMovies]

        })
    }
}
   handleChange = (inputValue) =>{
        this.setState({
            currText:inputValue,
        },this.handleSearch)
        console.log(movies);
    }
   
   

   handleSearch = () =>{
    if(this.state.currText != '' ){
            let filterMovies = this.state.movies2.filter((movieObj)=>{
                
                    let title = movieObj.original_title.toLowerCase();
                    


                    return title.includes(this.state.currText.toLowerCase());
                                   
                


                // return title.includes(this.state.currText.toLowerCase());
            })
            this.setState({
                movies:[...filterMovies],
            })
    }
    else{
        let data = JSON.parse(localStorage.getItem('movies-app')||'[]');
        this.setState({
            movies:[...this.state.movies2]
        })
    }
   }



    render() {

        

        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
    

        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 ">
                        <ul className="list-group genre-selector">
                           
                           
                           {this.state.genres.map((genre)=>(
                            genre == this.state.currgenre?
                            (<li class="list-group-item active">{genre}</li>):
                            (<li class="list-group-item"  onClick={()=>this.handleChangeGenre(genre)}>{genre}</li>)
                           ))}
                        </ul>
                    </div>
                    <div className="col-9">
                        <div className="row fav-table">
                            <input type="text"  className="form-control" placeholder="Search"  value = {this.state.currText} onChange={(e)=>this.handleChange(e.target.value)}  />

                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    this.state.movies.map((movieEle) => (
                                        <tr>
                                            <th scope="row">
                                                <img  style={{width:'8rem',marginRight:'1rem',padding:'1rem'}} src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`}/>{movieEle.title}</th>
                                            <td>{genreIds[movieEle.genre_ids[0]]}</td>
                                            <td>{movieEle.popularity}</td>
                                            <td>{movieEle.vote_average}</td>
                                            <td><button type="button" class="btn btn-danger">Danger</button></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                               
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                               
                            </ul>
                        </nav>

                    </div>

                </div>
            </div>
        )


    }

}

export default Favourites;