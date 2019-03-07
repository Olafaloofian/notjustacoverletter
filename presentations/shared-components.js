import React from 'react'
import './shared-components.css'
import resume from '../assets/Michael-Kerr-Resume.pdf'
import { isLandscape } from '../site-components/Presentations'

// Two circles with an animated line connecting them
export const CircleAnimation = () => {
    return (
        <div className="circle-container">
            <div className="circle right">RESULTS</div>
            <div className='line'><code>{'<CODE>'}</code></div>
            <div className="circle left">IDEAS</div>
        </div>
    )
}

// An infinitely-sliding image animation
export const ResumeAnimation = () => {
    return (
        <div className="resume-container">
            <div className="slider"></div>
        </div>
    )
}

// Three colored and numbered blocks with content to the right of them
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

// Two pieces of content split down the middle by a diagonal line
export const SkewBox = (props) => {
    return (
        <div className="skew-container" style={{ background: props.style.right, color: props.style.left }}>
            <div className="skew-content" style={{ background: props.style.left, color: props.style.right }}>{props.content.left}</div>
            <div>{props.content.right}</div>
        </div>
    )
}

// A clickable drawer that shows more information with each step
export class InteractiveSlider extends React.Component {
    state = {
        list: [],
        drawerLength: 'empty'
    }

    // TODO: This could be refactored to be more dry/efficient
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
                <div className={`clickable ${this.state.list.length === 3 ? 'hidden': ''}`} onClick={this.slideOnDown} style={{ background: this.props.style[this.state.list.length] || 'grey', transition: '0.5s all ease-in-out'}}>{this.state.list.length ? '▼' : isLandscape ? 'Tap Here!' : 'Click Here!'}</div>
            </div>
        )
    }
}

// Animated gradient background container
export const AnimatedBackground = (props) => {
    return (
        <div className="gradient-container" style={{ background: `linear-gradient(45deg, ${props.style[0]}, ${props.style[1]}, ${props.style[2]})`, backgroundSize: '400% 400%' }}>
            <div className="content">{props.content}</div>
        </div>
    )
}

// A scrollable card for a lot of text
export const ScrollArea = (props) => {
    return (
        <div className="scrollarea-container" style={{ background: props.style.background, color: props.style.background.color}}>
            <div className="scrollarea-title">{props.title}</div>
            <div className="scrollarea-body">{props.body}</div>
            <div className="arrow-down"></div>
        </div>
    )
}

// A card that flips on tap or mouse hover
export const FlipCard = (props) => {
    return (
        <div className='flipcard'>
            <div className="flipcard-inner">
                <div className="flipcard-front" style={{ background: props.style.frontBackground, color: props.style.frontColor }}>
                    {props.front}
                    <div className='anchor-bottom' style={{ background: props.style.backBackground, color: props.style.backColor }}>{isLandscape ? 'Tap' : 'Hover'} to flip!</div>
                </div>
                <div className="flipcard-back" style={{ background: props.style.backBackground, color: props.style.backColor }}>
                    {props.back}
                    <div className='anchor-bottom' style={{ background: props.style.frontBackground, color: props.style.frontColor }}>{isLandscape ? 'Tap away' : 'Hover away'} to flip!</div>
                </div>
            </div>
        </div>
    )
}

// Most often for end of presentation. Displays buttons with extra resources.
export const HiringResources = (props) => {
    return (
        <div className="hiring-container">
            <div className="top-title" style={{ color: props.primary, fontFamily: props.font }}>
                Thank you for taking the time to view this presentation. I hope you enjoyed a more interactive hiring experience! NotJustACoverLetter.com was designed and coded by me.
            </div>
            <div className="resources-container" style={{ background: props.primary }}>
                <div className="subtitle" style={{ color: props.secondary }}>
                    I'd love to keep in touch! For more resources about who I am and what I do, use the buttons below.
                </div>
                <div className='name'>
                    MICHAEL KERR
                    <br/>
                    WEB DEVELOPER
                </div>
                <div className="resources">
                    <a href={resume} target="_blank" rel="noopener noreferrer"><button style={{ background: props.secondary }}>Resume</button></a>
                    <a href={`mailto:${process.env.EMAIL}`}><button className='svg-button' style={{ background: props.secondary }}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg></button></a>
                    <a href='https://www.github.com/Olafaloofian' target="_blank" rel="noopener noreferrer"><button className='svg-button' style={{ background: props.secondary }}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></button></a>
                    <a href='https://michaelkerr.tech' target="_blank" rel="noopener noreferrer"><button style={{ background: props.secondary }}>Portfolio</button></a>
                </div>
            </div>
        </div>
    )
}