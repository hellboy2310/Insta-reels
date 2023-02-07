import { Component } from "react";
import { movies } from "../moviedata";
import axios from 'axios'

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            parr: ['1'],
            movie: [],
            currPage: 1,
            hover:"",
            favourites:[]


        }

    }

    handleNext = () => {
       if(this.state.parr.length == this.state.currPage){
        this.setState({
            parr: [...this.state.parr, this.state.parr.length + 1],
            currPage: this.state.currPage + 1
        }, this.changeMovies)
       }
       else{
        this.setState({
            currPage:this.state.currPage+1,
            
        },this.changeMovies)
       }
        
    }

    handleprevious = () => {
        if (this.state.currPage != 1) {
            this.setState({
                currPage: this.state.currPage - 1,
            }, this.changeMovies)
        }
    }

    changeMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=8071a22ab61069e095c902d8e411d789&language=en-US&page=${this.state.currPage}`);
        this.setState({
            movie: [...res.data.results]
        })
    }

    handlepageClick = (ele) =>{
        if(ele != this.state.currPage){
            this.setState({
                currPage:ele
            },this.changeMovies)
        }
        
    }

    handlefavourites = (movieObj) =>{
        let oldData = JSON.parse(localStorage.getItem('movies-app2')||'[]');

        if(this.state.favourites.includes(movieObj.id)){
            oldData = oldData.filter((movie)=>movie.id != movieObj.id);
        }
        else{
            oldData.push(movieObj)
        }
        localStorage.setItem("movies-app2",JSON.stringify(oldData));
        this.handlefavouritesState();


    }

    handlefavouritesState = () =>{
        let oldData = JSON.parse(localStorage.getItem('movies-app2')||'[]');

        let temp = oldData.map((movie)=>movie.id);
        this.setState({
            favourites:[...temp]
        })
    }

    async componentDidMount() {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=8071a22ab61069e095c902d8e411d789&language=en-US&page=${this.state.currPage}`);
        console.log(res.data);

        this.setState({
            movie: [...res.data.results]
        })
    }



    render() {



        return (
            <>

                <h2 style={{ color: 'purple', padding: '1rem' }} className="text-center">Trending</h2>
                <div className="movie-list">
                    {this.state.movie.map((movieEle) => (
                        <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieEle.id})} onMouseLeave = {()=>this.setState({hover:""})} style={{ height: "40vh", width: "16vw", margin: '0rem 3rem 3rem 4rem', borderRadius: "0.5rem" }}>
                            <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} style={{ height: "40vh", width: "20vw", borderRadius: '0.5rem' }} className="card-img-top" alt="..." />
                            <h5 className="card-title movie-title" style={{ paddingLeft: "1rem" }}>  {movieEle.original_title || movieEle.name}</h5>
                           {this.state.hover == movieEle.id &&(
                            <a type = "button" style={{ marginLeft: "5rem" }}  className="btn btn-primary img-btn" onClick={()=>this.handlefavourites(movieEle)} >
                                {this.state.favourites.includes(movieEle.id)?"Remove from favourites":"Add To Favourites"}
                                </a>
                           )}
                            
                        </div>
                    ))}
                </div>

                <nav aria-label="Page navigation example ">
                    <ul className="pagination text-center " style={{ display: "flex", justifyContent: "center" }}>
                        <li className="page-item"><a className="page-link" onClick={this.handleprevious}>Previous</a></li>
                        {this.state.parr.map((ele) => (
                            <li className="page-item"><a className="page-link" onClick={()=>this.handlepageClick(ele)}> {ele}</a></li>
                        ))}

                        <li className="page-item"><a className="page-link" onClick={this.handleNext} >Next</a></li>
                    </ul>
                </nav>


            </>


        )
    }

}

export default MovieList;