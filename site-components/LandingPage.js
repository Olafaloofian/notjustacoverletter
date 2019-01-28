import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'

const presentations = ['MotionDSP', 'Cubic']

export default class LandingPage extends Component {
    state = {
        input: '',
        displayList: [],
        height: window.innerHeight,
        width: window.innerWidth
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.value.length < 3) {
            this.setState({
                displayList: false
            })
        }
    }

    componentDidMount() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }

    componentDidUpdate(prevProps, prevState) {

        const { input } = this.state
        if (prevState.input !== input && input.length >= 3) {
            const inputRegex = new RegExp(`${this.state.input}`, 'gi')
            if(this.state.input === '') {
                this.setState({
                    displayList: []
                })
            } else {
                const matches = presentations.filter(company => company.match(inputRegex))

                if(matches.length>0) {
                    this.setState({
                        displayList: presentations.filter(company => company.match(inputRegex))
                    })
                } else {
                    this.setState({
                        displayList: false
                    })
                }
            }
        }
    }

    render() {
        const {displayList, input} = this.state
        console.log('------------ window.innerHeight', 
        window.innerHeight)
        const isMobile = this.state.width < 1000
        return (
            <div className='container' style={isMobile && { height: this.state.height }} >
                <div className='home-top'></div>
                <div className="content">
                    <header>
                        <h2 className='title'>NOT JUST A COVER LETTER</h2>
                        {!isMobile &&                         <h3>Reviewing job applications doesn't have to be boring!</h3>}
                    </header>
                    <div className="tooltip-container">
                        <input type="text" name='input' autoComplete='off' onChange={(e) => this.handleInput(e)} placeholder='Company Name'/>
                        <div className='tooltip-text' id={`${input.length ? 'disabled' : ''}`}>Search for your company to see if you have an application!</div>
                    </div>
                    {input.length > 0 && 
                        <div className={`company-container ${displayList ? '' : 'error'}`}>
                            {displayList.length > 0 ? displayList.map(company => (
                                <Link key={company} to={`/${company.toLowerCase()}`}><div className='company whitebox'>{company}</div></Link>
                        )):
                            <div className='whitebox'>{input.length !== 0 && input.length < 3 ? 'Please type at least three characters.' : 'Sorry, no matches were found'}</div>}
                        </div>}
                        {isMobile &&                         <h3>Reviewing job applications doesn't have to be boring!</h3>}
                </div>
                <footer>Designed and developed by Michael Kerr</footer>
            </div>
        );
    }
}