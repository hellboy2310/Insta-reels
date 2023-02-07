
import React, { Component } from 'react'




class Login extends Component {


    constructor() {
        super();
        this.state = {
            Email: '',
            FirstName: '',
            LastName: '',
            form: []
        }
    }



    handleSubmit = () => {
        let data = JSON.parse(localStorage.getItem('login-app') || '[]');


        alert('you have submitted the form');
        this.state.form.push(
            this.state.Email,
            this.state.FirstName,
            this.state.LastName

        )

        data.push(this.state.form);

        localStorage.setItem('login-app', JSON.stringify(data));

        console.log(this.state.form);
        
    }

    emailHandle = (e) => {
        console.log(e.target.value);
        this.setState({
            Email: e.target.value,
        })
    }

    FirstNameHandle = (e) => {
        console.log(e.target.value);
        this.setState({
            FirstName: e.target.value,
        })
    }

    LastNameHandle = (e) => {
        this.setState({
            LastName: e.target.value,
        })
    }

    PassWordHandle = (e) => {
        console.log(e.target.value);
    }


    render() {
        return (

            <div className='header'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Create</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Students</a>
                                </li>

                            </ul>
                        </div>



                    </div>
                </nav>

                <form style={{ width: '18rem' }}>
                    <div className="form-group" >
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={this.emailHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        <label for="exampleInputName1">UserName</label>
                        <input type="text" onChange={this.FirstNameHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />


                        <label for="exampleInputEmail1">lastName</label>
                        <input type="text" onChange={this.LastNameHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your LastName" />

                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" onChange={this.PassWordHandle} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>


            </div>
        )
    }
}

export default Login;
