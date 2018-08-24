// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Font,
  Heading,
  GoogleFont,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  S,
  Slide,
  Spin,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text,
  Typeface
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import styled from 'react-emotion';
import preloader from "spectacle/lib/utils/preloader";

const CustomQuote = styled(Quote)`
  border-left: 4px solid #000000;
`;

const Hidden = styled(Text)`
  visibility: hidden;
`;

const images = {
  clue: require('../assets/images/clue.jpg'),
  scrabble: require('../assets/images/scrabble.jpg'),
  chutes: require('../assets/images/chutes.jpg'),
  mouse: require('../assets/images/mouse_trap.jpg'),
  battleship: require('../assets/images/battleship.jpg'),
  candyland: require('../assets/images/candyland.jpg'),
  landlords: require('../assets/images/landlords.jpg'),
  monopoly: require('../assets/images/monopoly.jpg'),
  risk: require('../assets/images/risk.jpg'),
  sorry: require('../assets/images/sorry.jpg'),
  life: require('../assets/images/life.jpg')
};

// Require CSS
require("normalize.css");

preloader(images);

const theme = createTheme({
  primary: "#F0F0F0",
  lightGrey: "#F3F3F3",
  darkGrey: "#7F7F7F",
  darkRed: "#2F1B1B",
  lightRed: "#DF4958"
}, {
  primary: "Roboto",
  secondary: "Open Sans"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme} progress="none" bgColor="lightGrey">
        <Slide bgDarken="0.3" bgImage="https://i.imgur.com/LFb9dlQ.jpg" transition={["none"]} controls="false">
          <Heading size={1} textSize="150" lineHeight={1} margin="-150px 0 15px 0"textColor="white">
            board games
          </Heading>
          <Text textSize="60" textColor="white">
            everything you need to know!
          </Text>
          <Table margin="400px 0 -400px 0">
            <TableRow>
              <TableItem>
                <Text textSize="16" textColor="white" textAlign="right">
                  ok not everything... also, yep meltCommentary returns! 
                </Text>
              </TableItem>
              <TableItem>
                <Image src={"https://i.imgur.com/axPL7jm.png"} align="center" margin="0 0 0 5px" height="50px"/>
              </TableItem>
            </TableRow>
          </Table>
        </Slide>

        <Slide bgColor="#263340" textColor="white" transition={["none"]}>
          <Heading textAlign="left" margin="-175px 0 75px 0" textColor="white" size={2}>
            topics
          </Heading>
          <List margin="120px 0 0 100px">
            <ListItem>where board games came from</ListItem>
            <ListItem>why you should play board games</ListItem>
            <ListItem>which games you should play</ListItem>
          </List>
          <Table margin="400px 0 -285px 0">
            <TableRow>
              <TableItem>
                <Text textSize="16" textColor="white" textAlign="right">
                  bonus topic: which games you should not play 
                </Text>
              </TableItem>
              <TableItem>
                <Image src={"https://i.imgur.com/axPL7jm.png"} align="center" margin="0 0 0 5px" height="50px"/>
              </TableItem>
            </TableRow>
          </Table>
        </Slide>

        <Slide bgColor="#263340" textColor="white" transition={["none"]}>
          <Heading textColor="white" size={1}>
            so...
          </Heading>
          <Table margin="415px 0 -300px 0">
            <TableRow>
              <TableItem>
                <Text textSize="16" textColor="white" textAlign="right">
                  can he just give a normal presentation once... 
                </Text>
              </TableItem>
              <TableItem>
                <Image src={"https://i.imgur.com/axPL7jm.png"} align="center" margin="0 0 0 5px" height="50px"/>
              </TableItem>
            </TableRow>
          </Table>
        </Slide>

        <Slide bgColor="#263340" textColor="white" transition={["none"]}>
          <Heading textColor="white" size={2}>
            time to change it up
          </Heading>
          <Table margin="415px 0 -300px 0">
            <TableRow>
              <TableItem>
                <Text textSize="16" textColor="white" textAlign="right">
                  uh-oh... I think this is goodbye...
                </Text>
              </TableItem>
              <TableItem>
                <Image src={"https://i.imgur.com/axPL7jm.png"} align="center" margin="0 0 0 5px" height="50px"/>
              </TableItem>
            </TableRow>
          </Table>
        </Slide>

        <Slide transition={["fade"]} bgColor="lightGrey">
          <Image src={"https://i.imgur.com/wfOiUNy.png"}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="lightGrey">
          <Image src={"https://i.imgur.com/OaOpjWV.png"} width="190px"/>
        </Slide>

        <Slide transition={["spin"]} bgColor="lightGrey">
          <Heading textColor="black" size={1}>
            board games
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/13f5iwTRuiEjjW/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games are for kids</CustomQuote>
            <Cite textColor="darkRed">someone probably</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/hPPx8yk3Bmqys/source.gif" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={4}>
            [examples of adult games]
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/A9KfKenpqNDfa/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={4}>
            [examples of games for cool kids]
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games take too long</CustomQuote>
            <Cite textColor="darkRed">impatient loser</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/7mtVSIlPRHR1m/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={4}>
            [examples of games that take 5 min]
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games have too many rules</CustomQuote>
            <Cite textColor="darkRed">possibly illiterate person</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/1zSz5MVw4zKg0/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={4}>
            [examples of games with 2 rules]
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games are expensive</CustomQuote>
            <Cite textColor="darkRed">cheap loser</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/l396InTOf9zsp2EO4/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={4}>
            [price comparison slide]
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games just aren't my cup of tea<Hidden>'</Hidden></CustomQuote>
            <Cite textColor="darkRed">british person</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/E2gJ9kNjCgL6g/giphy.webp" transition={["slide"]}/>

        <Slide bgImage="https://i.giphy.com/media/l4Ep6uxU6aedrYUik/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games are boring</CustomQuote>
            <Cite textColor="darkRed">boring person</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/ATeaW1obQfED6/giphy.gif" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={4}>
            [example of exciting games]
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/11EGftT7x9FQME/giphy.gif" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={4}>
            [example of games that are boring]
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/xUPGcqpOD13ZhkBZGE/source.gif" transition={["slide"]}/>

        <Slide bgImage="https://i.giphy.com/media/8fDi6GZUzWVPy/giphy.webp" bgColor="#000000" bgSize="contain" bgRepeat="no-repeat" transition={["fade"]}/>
        <Slide bgImage="https://media.giphy.com/media/snS4j2xSV393G/giphy.gif" bgColor="#000000" bgSize="contain" bgRepeat="no-repeat" transition={["none"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={2}>
            games are a medium
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/l0ExoFKNJ64AxcWsw/giphy.gif" transition={["spin"]}/>

        <Slide bgImage="https://s3.amazonaws.com/mychurchwebsite/images/c1264/annc_drpexx.jpg" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={2}>
            let's be honest <Hidden>'</Hidden>
          </Heading>
          <Image src={"https://i.imgur.com/OaOpjWV.png"} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/l0IynvPneUpb7SnBe/giphy.gif" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.life.replace('/', '')} bgSize="contain" notes="This game attempts to brain washes children into becoming cookie cutter people who can't make decisions for themselves. Random chance controls how much money you start with, which opportunities you'll get, who you'll marry, and ultimately judges how happy you are based on accumulation of wealth. The 'game' of life has a horribly negative outlook, even if it is mildly accurate. How is this fun?"/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.chutes.replace('/', '')} bgSize="cover" notes="This game used to be an exploration of virtues and good deeds. As you moved around you landed on different squares with lessons & stories on them. Now it's you spinning a dial and counting the minutes until you can move onto something better in your life."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.monopoly.replace('/', '')} bgSize="contain"
        notes="Ok. I legitimately do not have enough time to tell you all the reasons Monopoly is terrible. The best strategy is to buy property and suck up all the houses as fast as possible, as long as you never upgrade them there will be a housing shortage and as long as you made it there first you are mathmatically in the most adventageous position. And there's NOTHING anyone can do about it. There is no counterplay. It is hopeless. You just lose slowly."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.landlords.replace('/', '')} bgSize="contain"
        notes="OH OH OH. And lets not forget Monopoly started from The Landlords Game. Originally it had two rule sets, one designed to highlight the benefits of Single Tax theory, the other one to highlight the ruthless soul sucking systems of monopolies crushing the lower class. Guess which one the Parker Brothers printed."/>

        <Slide bgImage="https://i.giphy.com/media/3ohrysPcsSCtapcqe4/source.gif" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.battleship.replace('/', '')} bgSize="cover" notes="Cheating your siblings since 1931 (yea that game is old!)"/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.risk.replace('/', '')} bgSize="contain"
        notes="Australia..."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.candyland.replace('/', '')} bgSize="contain"
        notes="A boring propaganda piece for big candy. Unjustly vilifies licorice."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.mouse.replace('/', '')} bgSize="cover" notes="Game??? More like a rube goldberg machine that is played once before losing half the pieces into the void."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.sorry.replace('/', '')} bgSize="cover" notes="This game basically invented #sorrynotsorry. Only one person has fun in Sorry."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.clue.replace('/', '')} bgSize="cover" notes="Turning murder mystery into checking boxes on a grid. The movie was better."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.scrabble.replace('/', '')} bgSize="cover" notes="Win, feel smug. Lose, feel stupid. Actually Scrabble isn't that bad, I just suck at it and my ego is very fragile."/>
      </Deck>
    );
  }
}
