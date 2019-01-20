import React from "react";
import { Deck, Slide } from 'spectacle';
import { Redirect } from 'react-router-dom'
import SVGLoader from '../tools/SVGLoader'
import { Link } from 'react-router-dom'
import './main.css'
import carvanaTheme from '../presentations/carvana/theme';
import carvanaSlides, { transitions as carvanaTransitions } from "../presentations/carvana/index.mdx";
import motiondspTheme from '../presentations/motiondsp/theme'
import motiondspSlides, { transitions as motiondspTransitions } from '../presentations/motiondsp/index.mdx'
// TODO: Try to get these imports modularized somehow - maybe with code splitting?

require("normalize.css");

export default class Presentations extends React.Component {
    state = {
        showNotification: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showNotification: false
            })
        }, 2500)
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
        const { company } = this.props.match.params
        let slides
        let theme
        let transitions
        // if(company === 'carvana') {
        //     slides = carvanaSlides
        //     transitions = carvanaTransitions
        //     theme = carvanaTheme
        // } else 
        if (company === 'motiondsp' || company === 'cubic') {
            slides = motiondspSlides
            transitions = motiondspTransitions
            theme = motiondspTheme
        } else {
            slides = null
        }
        console.log('------------ theme', theme)

        // More codesplitting code below
        // const lazyImport = React.lazy(() => import(`../presentations/${this.props.match.params.company}/index.mdx`))
        // console.log('------------ lazyImport', lazyImport)
        return (
            <React.Fragment>
                {slides ?
                    <React.Fragment>
                        <Deck transition={[this.creeperTransition]} transitionDuration={500} theme={theme}>
                        {slides.map((S, i) => {
                        let transition = transitions[i] || null;
                        return <S transition={transition} key={`slide-${i}`} />;
                        })}
                        </Deck>
                        <div className={`notification-bar ${this.state.showNotification ? 'show-notification' : ''}`}>To navigate, use your arrow keys.</div>
                        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" className='icon-home' height={50} width={50} viewBox='0 0 24 24' style={{fill: theme.screen.colors.quaternary}}><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg>
                        </Link>
                    </React.Fragment>
                :
                    <Redirect to='/' />
                }
            </React.Fragment>
        )
    }
}