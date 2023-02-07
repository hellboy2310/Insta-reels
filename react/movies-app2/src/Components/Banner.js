import { Component } from "react";
import { movies } from "../moviedata";
import axios from 'axios';

class Banner extends Component {
    constructor() {
        super();
        this.state = {
            movie: ""
        }
    }
    async componentDidMount() {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=8071a22ab61069e095c902d8e411d789&language=en-US&page=1`);
        console.log(res.data);

        this.setState({
            movie: res.data.results[0]
        })
    }


    render() {
        let backdrop_path = this.state.movie.backdrop_path;
        return (
            <div>

                <img style={{ width: "99vw", height: '70vh' }} src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
                <div className="banner-card" style={{ marginBottom: '1rem', padding: "3rem" }}>
                    <h1 style={{ color: "white", marginBottom: '2rem' }}>{this.state.movie.original_title}</h1>
                    <p style={{ color: "whitesmoke" }}>{this.state.movie.overview}</p>
                </div>

            </div>

        )
    }
}

export default Banner;