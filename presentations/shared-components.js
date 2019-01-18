import React from 'react'
import './shared-components.css'

export class CircleAnimation extends React.Component {
    state = {
        line: ''
    }
    
    componentDidMount() {
        this.animateLine = setInterval(() => this.animateLine(), 2000)
    }
    
    animateLine = () => {
        console.log('------------ hi')
        if(this.state.line) {
            this.setState({
                line: 'long'
            })
        } else {
            this.setState({
                line: ''
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.animateLine)
    }

    render() {
        return (
            <div className="circle-container">
                <div className="circle right">Results</div>
                <div className={`line ${this.state.line}`}><code>code</code></div>
                <div className="circle left">Ideas</div>
            </div>
        )
    }
}