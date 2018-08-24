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

const CustomQuote = styled(Quote)`
  border-left: 4px solid #000000;
`;

const Hidden = styled(Text)`
  visibility: hidden;
`;

// Require CSS
require("normalize.css");

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

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage="http://www.lscheffer.com/CandyLand-big.jpg" bgSize="contain"
        notes="If you don't loathe this game you clearly haven't played since you were 6. It is terrible. Kids love it & it could not be more boring. On AVERAGE you have to take 16 turns of the most thrilling gameplay draw, count, go. Just PURE random non-sense."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage="https://thurotdotcom.files.wordpress.com/2012/12/1-risk-header.jpg" bgSize="contain"
        notes="Low player counts you start literally on the other side of the world. Watching your friend roll endless 6's on defense is infuritating as hell. Cards more important thatn strategy. The best strategy is to just hide in Australia & it always has been."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage="https://images-na.ssl-images-amazon.com/images/I/915NTWZUtjL._SL1500_.jpg" bgSize="contain"
        notes="Ok. I legitimately do not have enough time to tell you all the reasons Monopoly is terrible. The best strategy is to buy property and suck up all the houses as fast as possible, as long as you never upgrade them there will be a housing shortage and as long as you made it there first you are mathmatically in the most adventageous position. And there's NOTHING anyone can do about it. There is no counterplay. It is hopeless. You just lose slowly."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage="https://landlordsgame.info/games/lg-1906/images/lg-1906_egc-board_inplay.jpg" bgSize="contain"
        notes="OH OH OH. And lets not forget Monopoly started from The Landlords Game. Originally it had two rule sets, one designed to highlight the benefits of Single Tax theory, the other one to highlight the ruthless soul sucking systems of monopolies crushing the lower class. Guess which one the Parker Brothers printed."/>


        <Slide bgImage="https://i.giphy.com/media/3ohrysPcsSCtapcqe4/source.gif" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage="https://img.etsystatic.com/il/14fb18/1422375371/il_570xN.1422375371_pwj8.jpg?version=0" bgSize="cover" notes="What is happening here. This never exciting. Why can't you win by sinking the battleship. In what world is this exciting..."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage="https://localscrabble.files.wordpress.com/2011/11/scrabble.jpg" bgSize="cover" notes="Losing at this game REALLY makes you feel dumb, its the worst. Actually Scrabble isn't that bad, I just suck at it and my ego is very fragile."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage="https://vignette.wikia.nocookie.net/board-games-galore/images/4/4b/Sorry-game-board.jpg/revision/latest?cb=20160711232701" bgSize="cover" notes="This game basically invented #sorrynotsorry. Only one person has fun in Sorry."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage="https://www.thesprucecrafts.com/thmb/a7QgnvT1hZz_Tqdkp7ziwDzXBPE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/clue-58a6f5775f9b58a3c91a4cc5.jpg" bgSize="cover" notes="Turning murder mystery into checking boxes on a grid. The movie was better."/>

        {/*Operation*/}

        {/*Mouse Trap*/}



      </Deck>
    );
  }
}
