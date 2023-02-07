import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Student extends Component {

    constructor() {
        super();
        this.state = {
            favourites: []
        }
    }



    render() {
        let data = JSON.parse(localStorage.getItem('login-app')||'[]');
        return (
            <div>
               {data} 

            </div>

        )
    }
}

export default Student;



