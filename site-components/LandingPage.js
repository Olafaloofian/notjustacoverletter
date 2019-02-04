import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom'

const presentations = ['MotionDSP', 'Cubic', 'Carvana']

export default class LandingPage extends Component {
    state = {
        input: '',
        displayList: [],
        height: window.innerHeight,
        width: window.innerWidth
    }

    // Catch-all input handler
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

    // A lot of this app is heavily reliant on knowing the size of the viewport to make sure the user is shown the information in the best way possible.
    componentDidMount() {
        window.addEventListener('orientationchange', (e) => this.updateWindowDimensions(e, true), { passive: false });

        window.addEventListener('resize', (e) => this.updateWindowDimensions(e), { passive: false });
    }

    componentWillUnmount() {
        window.removeEventListener('orientationchange', this.updateWindowDimensions);

        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    // Handles changes in the window dimensions
    updateWindowDimensions = (e, reverse) => {
        if(e) {
            e.preventDefault()
        }

        if(reverse) {
            this.setState({ width: window.innerHeight, height: window.innerWidth });
        } else {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        }
    }

    componentDidUpdate(prevProps, prevState) {

        // The user shouldn't be able to see results unless they type at least three characters
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
        const {displayList, input, height, width} = this.state
        const isMobile = this.state.width < 1000
        
        return (
            <div className='container' style={isMobile ? { height: this.state.height } : {} } >
                <div className='home-top'></div>
                <div className="content">
                    <header>
                        {height > 150 && <h2 className='title'>NOT JUST A COVER LETTER</h2>}
                        {!isMobile && <h3>Reviewing job applications doesn't have to be boring!</h3>}
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
                        {isMobile && height > 500 && <h3>Reviewing job applications doesn't have to be boring!</h3>}
                </div>
                <footer>{isMobile && height > 350 && 'Designed and developed by Michael Kerr'}</footer>
            </div>
        );
    }
}