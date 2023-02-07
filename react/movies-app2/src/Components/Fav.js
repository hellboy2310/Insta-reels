import { Component } from "react";



class Fav extends Component {
    constructor() {
        super();
        this.state = {
            currgenre: 'All genres',
            genres: [],
            movies: [],
            movies2:[],
            currtext:''


        }
    }

    handleSearch = (inputvalue) =>{
        console.log(inputvalue);
        this.setState({
            currtext:inputvalue
        },this.searchMovies)
    }


    searchMovies = () =>{
        
        if(this.state.currtext != ''){
            let filteredArr = this.state.movies2.filter((movieObj)=>{
                let title = movieObj.original_title.toLowerCase();
                return title.includes(this.state.currtext.toLowerCase());
            })
            this.setState({
                movies:[...filteredArr]
            })
        }
        else{
        
            let data = JSON.parse(localStorage.getItem('movies-app2')||'[]');
            this.setState({
                movies:[...this.state.movies2]
            })
        }
    }


    handleChangeGenre = (genre) =>{
        this.setState({
            currgenre:genre
        },this.filterMovies)

    }

    filterMovies = () =>{
        let genreids = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }
        let data = JSON.parse(localStorage.getItem('movies-app2') || '[]');

        if(this.state.currgenre == 'All genres'){
            this.setState({
                movies:[...data]
            })
        }
        else{
            let filteredMovies = data.filter((movieObj)=>genreids[movieObj.genre_ids[0]] == this.state.currgenre);
            this.setState({
                movies:[...filteredMovies],
                movies2:[...filteredMovies]
            })
        }
    }

    componentDidMount() {
        let genreids = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }
        let data = JSON.parse(localStorage.getItem('movies-app2') || '[]');

        let tempArr = [];
        tempArr.push("All genres");

        data.map((movieObj) => {
            if (!tempArr.includes(genreids[movieObj.genre_ids[0]])) {
                tempArr.push(genreids[movieObj.genre_ids[0]])
            }
        })
        this.setState({
            genres:[...tempArr],
            movies:[...data],
            movies2:[...data]
        })

    }

    render() {
        let genreids = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }

        return (
            <>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <ul class="list-group">

                                {this.state.genres.map((genre) => (
                                   this.state.currgenre == genre?(<li class="list-group-item active">{genre}</li>
                                   ):
                                   (<li class="list-group-item " onClick={()=>this.handleChangeGenre(genre)}>{genre}</li>)
                                   
                                ))}


                            </ul>


                        </div>
                        <div class="col-sm-9">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" value = {this.state.currtext} onChange = {(e)=>this.handleSearch(e.target.value)}  />
                            </div>

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Popularity</th>
                                        <th scope="col">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.movies.map((movieObj) => (
                                        <tr>
                                            <th scope="row">
                                                <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{ width: '10rem', padding: '1rem' }} class="card-img-top" alt="..." />
                                                {movieObj.original_title}
                                            </th>
                                            <td style={{ paddingTop: '3rem' }}>

                                                {genreids[movieObj.genre_ids[0]]}
                                            </td>
                                            <td style={{ paddingTop: '3rem' }}>{movieObj.popularity}</td>
                                            <td style={{ paddingTop: '3rem' }}>{movieObj.vote_average}</td>
                                            <td style={{ paddingTop: '3rem' }} ><button type="button" className="btn btn-danger">Delete</button></td>
                                        </tr>

                                    ))


                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Fav;