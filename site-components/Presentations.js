import React, { Suspense, lazy } from "react";
import { Deck, Slide } from 'spectacle';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './main.css'
// TODO: Get this SVG Loader working
// import SVGLoader from '../tools/SVGLoader'

require("normalize.css");

export default class Presentations extends React.Component {
    state = {
        showNotification: false,
        presentation: <div className='loader-container'><div className='loader'></div></div>
    }

    componentDidMount() {
        const { company } = this.props.match.params
        const themeImport = import(`../presentations/${company === 'cubic' || company === 'motiondsp' ? 'motiondsp' : company }/theme`)
        const slideImport = import(`../presentations/${company === 'cubic' || company === 'motiondsp' ? 'motiondsp' : company }/index.mdx`)
        Promise.all([slideImport, themeImport]).then(resolve => {
            const theme = resolve[1].default
            const transitions = resolve[0].transitions
            const slides = resolve[0].default
            let constructedDeck = (
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
            }, () => this.toggleNotification())
        }).catch(err => {
            this.setState({
                presentation: <Redirect to='/' />
            })
        })
    }

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

    creeperTransition = (transitioning, forward) => {
        const offset = forward ? 100 : -100;
        return {
            transform: `
            translate3d(0,${transitioning ? offset : 0}%, 0)
            `,
        };
    };

    render() {
        return (
            <React.Fragment>
                {this.state.presentation}
                <div className={`notification-bar ${this.state.showNotification ? 'show-notification' : ''}`}>To navigate, use your arrow keys.</div>
            </React.Fragment>
        )
    }
}