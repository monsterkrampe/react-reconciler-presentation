// Import React
import React from 'react';
import reactLogo from './images/react-logo.svg';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Slide,
  Text,
  Appear,
  Anim,
  S,
  Code,
  Magic,
  CodePane,
  Link,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#282C34',
    secondary: '#61DAFB',
    tertiary: 'white',
    quaternary: '#FAC863',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="bar"
        theme={theme}
        bgColor="primary"
      >
        <Magic>
          <Slide>
            <Image src={reactLogo} height={200} />
          </Slide>
          <Slide>
            <Anim 
              order={1}
              transitionDuration={300} 
              easing="quadOut" 
              fromStyle={{ position: 'relative', top: 100 }} 
              toStyle={[{ position: 'relative', top: 0 }]}>
              <div>
                <Image src={reactLogo} height={200} />
                <Heading size={3} textColor="secondary">
                  We can use React to build...
                </Heading>
              </div>
            </Anim>
            <List>
              <Appear order={2}>
                <ListItem>fancy animations</ListItem>
              </Appear>
              <Appear order={3}>
                <ListItem>fancy slides like this one</ListItem>
              </Appear>
              <Appear>
                <ListItem>awesome webapps (ReactDOM)</ListItem>
              </Appear>
              <Appear>
                <ListItem>awesome native apps (ReactNative)</ListItem>
              </Appear>
              <Appear>
                <ListItem>awesome pdfs (ReactPDF)</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={5} textColor="secondary">
              Can we use React to build...
            </Heading>
            <Appear>
              <Heading size={2} caps textColor="secondary">
                everything?
              </Heading>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={2} caps textColor="secondary">
              <S type="strikethrough">React is turing complete</S>
            </Heading>
          </Slide>
          <Slide>
            <Image src={reactLogo} height={200} margin="30px auto" />
            <div style={{ paddingBottom: 10 }}>
              <Code textColor="tertiary">$ yarn remove react-dom</Code>
            </div>
            <div>
              <Code textColor="tertiary">$ yarn add react-reconciler</Code>
            </div>
          </Slide>
          <Slide>
            <Heading fit caps textColor="secondary">
              dafuq is that?
            </Heading>
          </Slide>
          <Slide>
            <Heading fit caps textColor="secondary">
              dafuq is that?
            </Heading>
            <Text textAlign="center" caps textColor="tertiary">diffing algorithm</Text>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Appear order={1}>
                <div style={{ width: "45%", padding: 5 }}>
                  <CodePane textSize={20} source={require('./code1.example')} lang="js" theme="light" />
                </div>
              </Appear>
              <Appear order={3}>
                <div style={{ width: "10%", padding: 5 }}>
                  <Text textSize={50} textAlign="center" caps textColor="tertiary">?</Text>
                </div>
              </Appear>
              <Appear order={2}>
                <div style={{ width: "45%", padding: 5 }}>
                  <CodePane textSize={20} source={require('./code2.example')} lang="js" theme="light" />
                </div>
              </Appear>
            </div>
          </Slide>
          <Slide>
            <Heading fit caps textColor="secondary">
              Cool chum!
            </Heading>
            <Heading fit caps textColor="secondary">
              But what's it good for?!
            </Heading>
          </Slide>
          <Slide>
            <Heading fit caps textColor="secondary">
              Cool chum!
            </Heading>
            <Heading fit caps textColor="secondary">
              But what's it good for?!
            </Heading>
            <List>
              <Appear>
                <ListItem>build ya own renderers!</ListItem>
              </Appear>
              <Appear>
                <ListItem>use the components you already love!</ListItem>
              </Appear>
              <Appear>
                <ListItem>web!</ListItem>
              </Appear>
              <Appear>
                <ListItem>native!!</ListItem>
              </Appear>
              <Appear>
                <ListItem>pdf!!!</ListItem>
              </Appear>
              <Appear>
                <ListItem>terminal!!1!</ListItem>
              </Appear>
              <Appear>
                <ListItem>wait what?</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading fit caps textColor="secondary">
              Show me
            </Heading>
            <Heading textSize={24} caps textColor="secondary">
              <S type="strikethrough">what you got bitch!</S>
            </Heading>
            <Heading fit caps textColor="secondary">
              Some Code!
            </Heading>
          </Slide>
          <Slide>
            <Heading caps textColor="secondary">
              Well...
            </Heading>
            <Appear>
              <div>
                <div style={{paddingBottom: 10}}>
                  <Code textColor="tertiary">$ yarn remove react-reconciler</Code>
                </div>
                <div>
                  <Code textColor="tertiary">$ yarn add react-dom</Code>
                </div>
              </div>
            </Appear>
          </Slide>
          <Slide>
            <Heading fit caps textColor="secondary">Srsly, what's in for me?</Heading>
            <List>
              <Appear>
                <ListItem>use stuff that exists</ListItem>
              </Appear>
              <Appear>
                <ListItem>ReactDOM</ListItem>
              </Appear>
              <Appear>
                <ListItem>ReactArt</ListItem>
              </Appear>
              <Appear>
                <ListItem>ReactNative</ListItem>
              </Appear>
              <Appear>
                <ListItem>ReactNativeWeb</ListItem>
              </Appear>
              <Appear>
                <ListItem>ReactPDF</ListItem>
              </Appear>
              <Appear>
                <ListItem>all with one codebase</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide>
            <Heading fit caps textColor="secondary">See also</Heading>
            <List>
              <ListItem>
                <Link textSize={40} textColor="secondary" href="https://github.com/monsterkrampe/react-reconciler-presentation">These Slides (again)</Link>
              </ListItem>
              <ListItem>
                <Link textSize={40} textColor="secondary" href="https://github.com/monsterkrampe/react-reconciler-experiments">Example Code (feel free to play)</Link>
              </ListItem>
              <ListItem>
                <Link textSize={40} textColor="secondary" href="https://medium.com/@agent_hunt/introduction-to-react-native-renderers-aka-react-native-is-the-java-and-react-native-renderers-are-828a0022f433">
                  Custom React Native Renderers (Medium)
                </Link>
              </ListItem>
            </List>
          </Slide>
        </Magic>
      </Deck>
    );
  }
}
