import React from 'react'
import './shared-components.css'

export const CircleAnimation = () => {
    return (
        <div className="circle-container">
            <div className="circle right">RESULTS</div>
            <div className='line'><code>{'<CODE>'}</code></div>
            <div className="circle left">IDEAS</div>
        </div>
    )
}

export const ResumeAnimation = () => {
    return (
        <div className="resume-container">
            <div className="slider"></div>
        </div>
    )
}

export const BlockGraphic = (props) => {
    return (
        <div className="block-container">
        <div>
            <div className="block" style={{ background: `${props.style.topBlock}`}}>1</div>
            <div className='prop-text' style={{ borderBottom: `3px solid ${props.style.topBlock}`}}>{props.text.topText}</div>
        </div>
        <div>
            <div className="block" style={{ background: `${props.style.middleBlock}`}}>2</div>
            <div className='prop-text' style={{ borderBottom: `3px solid ${props.style.middleBlock}`}}>{props.text.middleText}</div>
        </div>
        <div>
            <div className="block" style={{ background: `${props.style.bottomBlock}`}}>3</div>
            <div className='prop-text' style={{ borderBottom: `3px solid ${props.style.bottomBlock}`}}>{props.text.bottomText}</div>
        </div>
        </div>
    )
}

export const SkewBox = (props) => {
    return (
        <div className="skew-container" style={{ background: props.style.right, color: props.style.left }}>
            <div className="skew-content" style={{ background: props.style.left, color: props.style.right }}>{props.content.left}</div>
            <div>{props.content.right}</div>
        </div>
    )
}

export class InteractiveSlider extends React.Component {
    state = {
        list: [],
        drawerLength: 'empty'
    }

    slideOnDown = () => {
        const { list } = this.state
        const { items } = this.props
        if(list.length === 0) {
            this.setState({
                list: [items[0]],
                drawerLength: 'one'
            })
        } else if (list.length === 1) {
            this.setState({
                list: [items[0], items[1]],
                drawerLength: 'two'
            })
        } else if (list.length === 2) {
            this.setState({
                list: [items[0], items[1], <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}><img src="https://mediadc.brightspotcdn.com/dims4/default/4f87e48/2147483647/strip/true/crop/808x808+0+0/resize/808x808!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2F72%2Fd9%2F46a05bb16dc6255d60ff6a685472%2F998bdb362952772bbecfc953f6a03a35.jpg" width='200' alt="Chuck Norris"/> Also, I'm sponsored by Chuck Norris.</div>],
                drawerLength: 'three'
            })
        }
    }

    render() {
        return (
            <div className="interactive-container">
                <div className={`drawer ${this.state.drawerLength}`}>
                    {this.state.list.map((item, index) => {
                        return (
                            <div key={index} className="interactive-item" style={{ background: this.props.style[index] }}>{item}</div>
                        )
                    })}
                </div>
                <div className={`clickable ${this.state.list.length === 3 ? 'hidden': ''}`} onClick={this.slideOnDown} style={{ background: this.props.style[this.state.list.length] || 'grey', transition: '0.5s all ease-in-out'}}>{this.state.list.length ? '▼' : 'Click Here!'}</div>
            </div>
        )
    }
}

export const AnimatedBackground = (props) => {
    return (
        <div className="gradient-container" style={{ background: `linear-gradient(45deg, ${props.style[0]}, ${props.style[1]}, ${props.style[2]})`, backgroundSize: '400% 400%' }}>
            <div className="content">{props.content}</div>
        </div>
    )
}

export const HiringResources = (props) => {
    return (
        <div className="hiring-container">
            <div className="title">
                Thank you for taking the time to view this presentation. I hope you enjoyed a more interactive hiring experience! NotJustACoverLetter.com was designed and coded by me.
            </div>
            <div className="subtitle">
                I'd love to keep in touch! For more resources about who I am and what I do, use the buttons below.
            </div>
            <div className="resources">
                <button>Resume</button>
                <a><button>Email</button></a>
                <button>Github</button>
                <button>Portfolio</button>
            </div>
        </div>
    )
}