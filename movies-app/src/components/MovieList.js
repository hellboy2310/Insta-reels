import React, { Component } from 'react';
import { movies } from '../movieData.js'
import axios from 'axios';

// https://api.themoviedb.org/3/trending/all/day?api_key=8071a22ab61069e095c902d8e411d789
class MovieList extends Component {

    constructor() {
        super();
        this.state = {
            hover: "",
            pArr: [1],
            movies: [],
            currPage:1,
            favourites:[]
        }
    }



    async componentDidMount() {
            const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`);
            console.log(res.data);
            this.setState({
                movies:[...res.data.results]
            })

        }


        changeMovies = async() =>{
                const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`);
                this.setState({
                    movies:[...res.data.results]
                })        
        }

        handleNext = () =>{
            this.setState({
                pArr:[...this.state.pArr,this.state.pArr.length+1],
                currPage:this.state.currPage + 1,
            },this.changeMovies);
        }

        handleChange = (ele) =>{
            if(ele != this.state.currPage){
                this.setState({
                    currPage:ele,
                    
                },this.changeMovies)
            }
        }

        handlePrevious = () =>{
            if(this.state.currPage != 1){
               this.setState({
                currPage:this.state.currPage - 1,
                
               },this.changeMovies) 

            }
        }

        handleFavourites = (movieObj) =>{
            let oldData = JSON.parse(localStorage.getItem('movies-app')||'[]');
            if(this.state.favourites.includes(movieObj.id)){
                oldData = oldData.filter((movie)=>movie.id != movieObj.id);
            }
            else{
                oldData.push(movieObj);
            }
            localStorage.setItem("movies-app",JSON.stringify(oldData));
            this.handleFavouriteState();
        }

        handleFavouriteState = () =>{
            let oldData = JSON.parse(localStorage.getItem('movies-app')||'[]');
            let temp = oldData.map((movie)=>movie.id);

            this.setState({
                favourites:[...temp]
            })
        }


    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <h1>Trending</h1>
                </div>
                <div className='movies-list'>
                    {this.state.movies.map((movieEle) => (
                        <div className="card movie-card" onMouseEnter={() => this.setState({ hover: movieEle.id })} onMouseLeave={() => this.setState({ hover: "" })}>
                                    
                            <img className="card-img-top movie-img" style={{ height: "40vh", width: "20vw" }}   src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} alt="Card image cap" />

                            <h5 className="card-title movie-title">{movieEle.original_title }</h5>
                            <div style={{ display: "flex", justifyContent: 'center' }}>
                                {
                                    this.state.hover == movieEle.id
                                        &&(<a  type="button" className="btn btn-primary movies-button" onClick={()=>this.handleFavourites(movieEle)}>
                                        {this.state.favourites.includes(movieEle.id)?"Remove From Favourites":"Add To Favourites"}
                                        </a>)
                                        
                                }


                            </div>




                        </div>
                    ))}
                </div>



                <nav aria-label="Page navigation example" style={{ display: "flex", justifyContent: "center " }}>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={this.handlePrevious}>Previous</a></li>
                        {this.state.pArr.map((ele) => (
                            <li className="page-item"><a className="page-link" onClick={()=>this.handleChange(ele)}>{ele}</a></li>
                        ))}
                        <li className="page-item"><a className="page-link" onClick={this.handleNext}>Next</a></li>
                    </ul>
                </nav>

            </>
        )
    }
}

export default MovieList;