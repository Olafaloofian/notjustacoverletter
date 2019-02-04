import React, { Suspense, lazy } from "react";
import { Deck, Slide } from 'spectacle';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import rotateScreen from '../assets/rotate-screen.png'
import './main.css'
// TODO: Get this SVG Loader working
// import SVGLoader from '../tools/SVGLoader'

require("normalize.css");

var isMobile
var isLandscape

export default class Presentations extends React.Component {
    state = {
        showNotification: false,
        // Initial loader symbol for presentations (deck must be retrieved from another webpack bundle)
        presentation: <div className='loader-container'><div className='loader'></div></div>,
        width: window.innerWidth,
        height: window.innerHeight
    }

    componentDidMount() {
        // Handling mobile orientation changes (app must be in landscape mode)
        window.addEventListener('orientationchange', (e) => this.updateWindowDimensions(e), { passive: false });

        // Routing the user to the correct presentation based on URL, with code splitting so that the user doesn't load a ton of stuff they aren't trying to see.
        const { company } = this.props.match.params
        const companyName = company.toLowerCase()
        const themeImport = import(`../presentations/${companyName === 'cubic' || companyName === 'motiondsp' ? 'motiondsp' : companyName }/theme`)
        const slideImport = import(`../presentations/${companyName === 'cubic' || companyName === 'motiondsp' ? 'motiondsp' : companyName }/index.mdx`)
        Promise.all([slideImport, themeImport]).then(resolve => {
            const theme = resolve[1].default
            const transitions = resolve[0].transitions
            const slides = resolve[0].default
            let constructedDeck = (
                // The deck of slides is created below
                <React.Fragment>
                    <Deck transition={[this.creeperTransition]} transitionDuration={500} theme={theme}>
                    {slides.map((S, i) => {
                    let transition = transitions[i] || null;
                    return <S transition={transition} key={`slide-${i}`} />;
                    })}
                    </Deck>
                    <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" className='icon-home' height={50} width={50} viewBox='0 0 24 24' style={{fill: theme.screen.colors.quaternary}}><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
                    </Link>
                </React.Fragment>
            )
            this.setState({
                presentation: constructedDeck
            }, () => this.state.width > 1000 && this.toggleNotification())
        }).catch(err => {
            this.setState({
                presentation: <Redirect to='/' />
            })
        })
    }

    componentWillUnmount() {
        window.removeEventListener('orientationchange', this.updateWindowDimensions);
    }
    
    updateWindowDimensions = (e) => {
        if(e) {
            e.preventDefault()
        }
        
        // For some reason, this only works correctly if the height and width of the device are swapped. Maybe the innerWidth and innerHeight are set on load and orientation changes don't affect them?
        this.setState({ width: window.innerHeight, height: window.innerWidth });
        this.toggleNotification()
    }

    // Toggles navigation notification
    toggleNotification = () => {
        setTimeout(() => {
            this.setState({
                showNotification: true
            })
        }, 500)
        setTimeout(() => {
            this.setState({
                showNotification: false
            })
        }, 3600)
    }

    // Animation for deck of slides
    creeperTransition = (transitioning, forward) => {
        const offset = forward ? 100 : -100;
        return {
            transform: `
            translate3d(0,${transitioning ? offset : 0}%, 0)
            `,
        };
    };

    render() {
        // These two variables are important for detecting if the user is on mobile, and how they are holding their device.
        isMobile = this.state.width < 800 ? true : false
        isLandscape = this.state.width > 600 && this.state.width < 1000 ? true : false

        return (
            isMobile && !isLandscape ?
                <div className='landscape-prompt'>
                    <img src={rotateScreen} alt="Rotate Screen"/>
                    <div>Please rotate your device</div>
                    <svg viewBox="0 0 512 512"><path fill="black" d="M396.795 396.8H320V448h128V320h-51.205zM396.8 115.205V192H448V64H320v51.205zM115.205 115.2H192V64H64v128h51.205zM115.2 396.795V320H64v128h128v-51.205z"></path></svg>
                    <div>Use full screen for best experience</div>
                </div>
            :
                <div className='presentation-container'>
                    {this.state.presentation}
                    <div className={`notification-bar ${this.state.showNotification ? 'show-notification' : ''}`}>{this.state.width < 1000 ? 'Swipe to navigate' : 'To navigate, use your arrow keys.'}</div>
                </div>
        )
    }
}

// It's possible these will end up being used later...
export var isMobile
export var isLandscape