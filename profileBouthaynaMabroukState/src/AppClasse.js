import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './component/Profile'
import moi from './moi.jpg';

class AppClass extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            person: {
                profession: "FullStrack Developper",
                bio: "I like programming",
                fullName: "Bouthayna Mabrouk",
                imgSrc: moi
            },
            show: true,
            seconde: 1,
            heure: 0,
            minute: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval( () => {
            this.setState( { seconde: this.state.seconde + 1 } );
            this.state.seconde === 60 &&
                this.setState( {
                    minute: this.state.minute + 1, seconde: 0
                } );
            this.state.minute === 60 &&
                this.setState( {
                    heure: this.state.heure + 1, minute: 0
                } );
        }, 1000 );
    }

    componentWillUnmount() {
        clearInterval( this.interval );
    }


    hundleClick = () => {
        this.setState( { show: !( this.state.show ) } );
        this.state.show ? document.getElementById( "btn" ).textContent = "Show" :
            document.getElementById( "btn" ).textContent = "Unshow";
    }
    render() {
        function convertNumber( num ) {
            return ( num < 10 ? "0" : "" ) + num;
        }
        return (
            <div>
                <header>
                    <div className="container text-center">
                        <div className="logo">
                            <h1><b>Welcome to My Profile</b></h1>
                        </div>
                        <h1> <b>{convertNumber( this.state.heure )}:{convertNumber( this.state.minute )}:{convertNumber( this.state.seconde )} </b> </h1>
                    </div>
                </header>
                <button id="btn" onClick={this.hundleClick}>Unshow</button>
                <div className="contain" >
                    {this.state.show ?
                        <Profile fullName={this.state.person.fullName} bio={this.state.person.bio} profession={this.state.person.profession} imgSrc={this.state.person.imgSrc} />
                        : <Profile fullName='' bio='' profession='' imgSrc=''/>
                    }
                </div>
            </div>
        )
    }
}

export default AppClass