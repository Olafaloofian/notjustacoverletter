// TODO: figure out how to use code splitting to achieve programmatic importing. Maybe this is the right track?

const Paths = {
    carvana: dynamic(import('./carvana/index.mdx')),
}

export default ( {company} ) => {
    const Path = Paths[company]
    return <Path />
}