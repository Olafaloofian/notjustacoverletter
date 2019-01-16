import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'

const presentations = ['Discord', 'Oculus', 'Carvana']

export default class LandingPage extends Component {
    state = {
        input: '',
        displayList: []
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.input !== this.state.input) {
            const inputRegex = new RegExp(`${this.state.input}`, 'gi')
            if(this.state.input === '') {
                this.setState({
                    displayList: []
                })
            } else {
                this.setState({
                    displayList: presentations.filter(company => company.match(inputRegex))
                })
            }
        }
    }

    render() {
        const {displayList} = this.state
        return (
            <div className='container'>
                <div className='home-top'></div>
                <div className="content">
                    <header>
                        <h2 className='title'>NOT JUST A COVER LETTER</h2>
                        <h3>Reviewing job applications doesn't have to be boring!</h3>
                    </header>
                    <div className="tooltip-container">
                        <input type="text" name='input' onChange={(e) => this.handleInput(e)} placeholder='Company Name'/>
                        <div className='tooltip-text' id={`${displayList.length ? 'disabled' : ''}`}>Search for your company to see if you have an application!</div>
                    </div>
                    {displayList.length>0 && 
                        <div className='company-container'>
                            {displayList.map(company => (
                                <Link to={`/${company.toLowerCase()}`}><div className='company'>{company}</div></Link>
                    ))}</div>}
                </div>
                <footer>Designed and developed by Michael Kerr</footer>
            </div>
        );
    }
}