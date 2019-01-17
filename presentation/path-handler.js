const Paths = {
    carvana: dynamic(import('./carvana/index.mdx')),
}

export default ( {company} ) => {
    const Path = Paths[company]
    return <Path />
}