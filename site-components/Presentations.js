import React from "react";
import { Deck, Slide } from 'spectacle';
import SVGLoader from '../tools/SVGLoader'
// const pathPicker = require('../presentation/path-handler')
import { Link } from 'react-router-dom'
import './main.css'
import theme from '../presentation/carvana/theme';
import slides, { transitions } from "../presentation/carvana/index.mdx";

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
        // const theme = dynamic(import(`../presentation/${this.props.match.params.company}/theme`));
        // console.log('------------ theme', theme)
        // import slides, { transitions } from `../presentation/${this.props.match.params.company}/index.mdx`
        // const slides = require(`../presentation/${this.props.match.params.company}/index.mdx`)
        // console.log('------------ slides', slides)
        // const transitions = require(`../presentation/${this.props.match.params.company}/index.mdx`).transitions
        // const theme = require(`../presentation/${this.props.match.params.company}/theme`).theme
        // console.log('------------ pathPicker', pathPicker('carvana'))
        // const slides = pathPicker({company: this.props.match.params.company})
        return (
            <React.Fragment>
                <Deck transition={[this.creeperTransition]} transitionDuration={500} theme={theme}>
                {slides.map((S, i) => {
                let transition = transitions[i] || null;
                return <S transition={transition} key={`slide-${i}`} />;
                })}
                </Deck>
                <div className={`notification-bar ${this.state.showNotification ? 'show-notification' : ''}`}>To navigate, use your arrow keys!!!</div>
                <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" className='icon-home' height={50} width={50} viewBox='0 0 24 24'><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"/></svg></Link>
            </React.Fragment>
        )
    }
}