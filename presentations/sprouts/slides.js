import React from 'react';
import { Slide, Text, Heading, Cite } from 'spectacle';
import { MDXProvider } from '@mdx-js/tag'
import components from '../components';
import theme from './theme';

// DEFAULT LAYOUT

export const DefaultSlide = ({ children, ...rest }) => (
  <Slide {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);

// DARK LAYOUT

const darkComponents = {
  ...components,
  h2: ({ children }) => <Heading size={2} textColor={theme.screen.colors.primary}>{children}</Heading>,
  h3: ({ children }) => <Heading size={3} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h4: ({ children }) => <Heading size={4} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h5: ({ children }) => <Heading size={5} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h6: ({ children }) => <Heading size={6} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  p: ({ children }) => <Text textColor="white">{children}</Text>
}

const coloredComponents = {
  ...components,
  h2: ({ children }) => <Heading size={2} textColor='#1e772d'>{children}</Heading>,
  h3: ({ children }) => <Heading size={3} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h4: ({ children }) => <Heading size={4} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  h5: ({ children }) => <Heading size={5} textColor={theme.screen.colors.tertiary}>{children}</Heading>,
  h6: ({ children }) => <Heading size={6} textColor={theme.screen.colors.altSecondary}>{children}</Heading>,
  p: ({ children }) => <Text textColor="white">{children}</Text>
}

const greyComponents = {
  ...components,
  h2: ({ children }) => <Heading size={2} textColor={theme.screen.colors.primary}>{children}</Heading>,
  h3: ({ children }) => <Heading size={3} textColor={theme.screen.colors.secondary}>{children}</Heading>,
  h4: ({ children }) => <Heading size={4} textColor={theme.screen.colors.primary}>{children}</Heading>,
  h5: ({ children }) => <Heading size={5} textColor={theme.screen.colors.tertiary}>{children}</Heading>,
  h6: ({ children }) => <Heading size={6} textColor={theme.screen.colors.quaternary}>{children}</Heading>,
  p: ({ children }) => <Text textColor="white">{children}</Text>
}


export const DarkSlide = ({ children, ...rest }) => (
  <Slide bgColor="#211601" {...rest}>
    <MDXProvider components={darkComponents}>{children}</MDXProvider>
  </Slide>
);

export const ColorSlide = ({ children, ...rest }) => (
  <Slide bgColor={theme.screen.colors.tertiary} {...rest}>
    <MDXProvider components={coloredComponents}>{children}</MDXProvider>
  </Slide>
)

export const AltColorSlide = ({ children, ...rest }) => (
  <Slide bgColor={theme.screen.colors.last} {...rest}>
    <MDXProvider components={coloredComponents}>{children}</MDXProvider>
  </Slide>
)

export const RedSlide = ({ children, ...rest }) => (
  <Slide bgColor={theme.screen.colors.altSecondary} {...rest}>
    <MDXProvider components={coloredComponents}>{children}</MDXProvider>
  </Slide>
)

export const YellowSlide = ({ children, ...rest }) => (
  <Slide bgColor={theme.screen.colors.quaternary} {...rest}>
    <MDXProvider components={coloredComponents}>{children}</MDXProvider>
  </Slide>
)

export const GreySlide = ({ children, ...rest }) => (
  <Slide bgColor={theme.screen.colors.quinary} {...rest}>
    <MDXProvider components={greyComponents}>{children}</MDXProvider>
  </Slide>
)


// CODE LAYOUT

export const CodeSlide = ({ children, ...rest }) => (
  <Slide bgColor="#1d1f21" {...rest}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Slide>
);
