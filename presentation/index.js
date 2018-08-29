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
  TableBody,
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

const CloseTable = styled(Table)`
  border-spacing: 0px;
  border-collapse: collapse;
  transform: scale(1.0);
`;

const BorderTableItem = styled(TableItem)`
  border: 1px solid #000000;
  border-collapse: collapse;
`;

const BigFill = styled(Fill)`
  padding: 10px;
`;

const images = {
  minmax: require('../assets/images/minmax.svg'),
  theoryofgames: require('../assets/images/theoryofgames.jpg'),
  catan: require('../assets/images/catan.jpg'),
  yahtzee: require('../assets/images/yahtzee.jpg'),
  incan: require('../assets/images/incan.jpg'),
  acquire: require('../assets/images/acquire.jpg'),
  container: require('../assets/images/container.jpg'),
  explodingkittens: require('../assets/images/explodingkittens.png'),
  catchphrase: require('../assets/images/catchphrase.jpg'),
  set: require('../assets/images/set.png'),
  werewolf: require('../assets/images/werewolf.jpg'),
  go: require('../assets/images/go.jpg'),
  themind: require('../assets/images/themind.png'),
  loveletter: require('../assets/images/loveletter.png'),
  skull: require('../assets/images/skull.png'),
  poker: require('../assets/images/poker.jpg'),
  sushi: require('../assets/images/sushigo.png'),
  cahbox: require('../assets/images/cahbox.jpg'),
  arkwright: require('../assets/images/arkwright.jpg'),
  hitlerbox: require('../assets/images/hitlerbox.jpg'),
  clue: require('../assets/images/clue.jpg'),
  logo: require('../assets/images/logo.png'),
  scrabble: require('../assets/images/scrabble.jpg'),
  chutes: require('../assets/images/chutes.jpg'),
  mouse: require('../assets/images/mouse_trap.jpg'),
  battleship: require('../assets/images/battleship.jpg'),
  battleshipbox: require('../assets/images/battleshipbox.jpg'),
  candyland: require('../assets/images/candyland.jpg'),
  candylandbox: require('../assets/images/candylandbox.gif'),
  landlords: require('../assets/images/landlords.jpg'),
  monopoly: require('../assets/images/monopoly.jpg'),
  risk: require('../assets/images/risk.jpg'),
  sorry: require('../assets/images/sorry.jpg'),
  sorrybox: require('../assets/images/sorrybox.jpg'),
  lifebox: require('../assets/images/lifebox.jpg'),
  life: require('../assets/images/life.jpg')
};

const gifs = {
  learning: require('../assets/gifs/learning.gif')
};

// Require CSS
require("normalize.css");

preloader(images);
preloader(gifs);

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
        {/*~~~~~~~~~~~~~~~~~SECTION 0 - Intro~~~~~~~~~~~~~~~~~*/}

        <Slide bgDarken="0.3" bgImage="https://i.imgur.com/LFb9dlQ.jpg" transition={["none"]} controls="false">
          <Heading size={1} textSize="150" lineHeight={1} margin="-150px 0 15px 0"textColor="white">
            board games
          </Heading>
          <Text textSize="60" textColor="white">
            everything you need to know!
          </Text>
          <Table margin="400px 0 -400px 0">
            <TableRow>
              <TableBody>
                <TableItem>
                  <Text textSize="16" textColor="white" textAlign="right">
                    ok not everything... also, yep meltCommentary returns! 
                  </Text>
                </TableItem>
                <TableItem>
                  <Image src={"https://i.imgur.com/axPL7jm.png"} align="center" margin="0 0 0 5px" height="50px"/>
                </TableItem>
              </TableBody>
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
          <Image src={images.logo.replace('/', '')} width="190px"/>
        </Slide>

        <Slide transition={["spin"]} bgColor="lightGrey">
          <Heading textColor="black" size={1}>
            board games
          </Heading>
          <Image src={images.logo.replace('/', '')} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        {/*~~~~~~~~~~~~~~~~~SECTION 1 - You know nothing~~~~~~~~~~~~~~~~~*/}

        <Slide bgImage="https://i.giphy.com/media/13f5iwTRuiEjjW/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games are for kids</CustomQuote>
            <Cite textColor="darkRed">someone probably</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/hPPx8yk3Bmqys/source.gif" transition={["slide"]} bgSize="contain"/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Layout>
            <BigFill>
              <Image src={images.cahbox.replace('/', '')} margin="100px 0 0 0"/>
              <Image src={images.hitlerbox.replace('/', '')}/>
            </BigFill>
            <BigFill>
              <Image src={images.arkwright.replace('/', '')}/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="30px auto -100px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/A9KfKenpqNDfa/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Poker? Yea thats not for nerds... And this is Skulls & Roses, a game that used to be played by Biker Gangs...">
          <Layout>
            <BigFill>
              <Image src={images.poker.replace('/', '')} margin="100px 0 0 0"/>
            </BigFill>
            <BigFill>
              <Image src={images.skull.replace('/', '')}/>
            </BigFill>
          </Layout>
          <Image src={images.logo.replace('/', '')} margin="200px auto -200px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games take too long</CustomQuote>
            <Cite textColor="darkRed">impatient loser</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/7mtVSIlPRHR1m/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Layout>
            <BigFill>
              <Image src={images.loveletter.replace('/', '')}/>
            </BigFill>
            <BigFill>
              <Image src={images.werewolf.replace('/', '')}/>
            </BigFill>
          </Layout>
          <Image src={images.logo.replace('/', '')} margin="250px auto -200px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games have too many rules</CustomQuote>
            <Cite textColor="darkRed">possibly illiterate person</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/1zSz5MVw4zKg0/giphy.webp" transition={["slide"]} bgSize="contain"/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Layout>
            <BigFill>
              <Image src={images.set.replace('/', '')} margin="100px 0 0 0"/>
            </BigFill>
            <BigFill>
              <Image src={images.go.replace('/', '')} />
            </BigFill>
          </Layout>
          <Image src={images.logo.replace('/', '')} margin="100px auto -200px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <BlockQuote>
            <CustomQuote bold textColor="black">games are expensive</CustomQuote>
            <Cite textColor="darkRed">cheap loser</Cite>
          </BlockQuote>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/l396InTOf9zsp2EO4/giphy.webp" transition={["slide"]} bgSize="contain"/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="movies ~$10, last 1.5 hr. Music album ~$14, last ~1h, assumes 10 plays. Video games ~$60, ~60h (super generous).">
          <Heading textColor="black" size={5}>
            Movies: ~$4.32/hr
          </Heading>
          <Heading textColor="black" size={5}>
            Music: ~$1.40/hr
          </Heading>
          <Heading textColor="black" size={5}>
            Video Games: ~$1.00/hr
          </Heading>
          <Image src={images.logo.replace('/', '')} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="assume a game is $40, plays 4 players, & takes 90m">
          <Heading textColor="black" size={3}>
            Board Game: ~$26.30/hr
          </Heading>
          <Image src={images.logo.replace('/', '')} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="ok now imagine you actually played that game with 4 people...extrapolate. ALSO ALSO https://www.shutupandsitdown.com/how-to-build-an-amazing-board-game-collection-for-10/">
          <Heading textColor="black" size={3}>
            Board Game * 4 * 1: ~$6.66/hr
            Board Game * 4 * 2: ~$3.33/hr
            Board Game * 4 * 3: ~$1.66/hr
            Board Game * 4 * 4: ~$0.83/hr
          </Heading>
          <Image src={images.logo.replace('/', '')} margin="300px auto -300px auto" width="100px"/>
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
          <Layout>
            <BigFill>
              <Image src={images.explodingkittens.replace('/', '')}  margin="100px 0 0 0"/>
            </BigFill>
            <BigFill>
              <Image src={images.catchphrase.replace('/', '')} />
            </BigFill>
          </Layout>
          <Image src={images.logo.replace('/', '')} margin="100px auto -200px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/11EGftT7x9FQME/giphy.gif" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Layout>
            <BigFill>
              <Image src={images.acquire.replace('/', '')} />
            </BigFill>
            <BigFill>
              <Image src={images.container.replace('/', '')} />
            </BigFill>
          </Layout>
          <Image src={images.logo.replace('/', '')} margin="100px auto -200px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/xUPGcqpOD13ZhkBZGE/source.gif" transition={["slide"]}/>

        <Slide bgImage="https://i.giphy.com/media/8fDi6GZUzWVPy/giphy.webp" bgColor="#000000" bgSize="contain" bgRepeat="no-repeat" transition={["fade"]}/>
        <Slide bgImage="https://media.giphy.com/media/snS4j2xSV393G/giphy.gif" bgColor="#000000" bgSize="contain" bgRepeat="no-repeat" transition={["none"]} notes="This is Blade Runner, it was released in 1982 and it is STILL a masterpiece, shoutout Ridley Scott."/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={2}>
            games are a medium
          </Heading>
          <Image src={images.logo.replace('/', '')} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        {/*~~~~~~~~~~~~~~~~~SECTION 2 - Digging up the Past~~~~~~~~~~~~~~~~~*/}

        <Slide bgImage="https://media.giphy.com/media/l0ExoFKNJ64AxcWsw/giphy.gif" transition={["spin"]}/>

        <Slide bgImage="https://s3.amazonaws.com/mychurchwebsite/images/c1264/annc_drpexx.jpg" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" size={2}>
            let's be honest <Hidden>'</Hidden>
          </Heading>
          <Image src={images.logo.replace('/', '')} margin="300px auto -300px auto" width="100px"/>
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

        {/*~~~~~~~~~~~~~~~~~SECTION 3 - Games teach you things~~~~~~~~~~~~~~~~~*/}

        <Slide bgImage="https://i.giphy.com/media/dILrAu24mU729pxPYN/giphy.webp" bgSize="contain" transition={["spin"]}/>

        <Slide bgImage="https://i.giphy.com/media/l3dj09hpsfuYkijDi/giphy.webp" transition={["slide"]}/>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Heading textColor="black" bold size={2}>
            the "classics" disrespect you
          </Heading>
          <Image src={images.logo.replace('/', '')} margin="300px auto -300px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="darkGrey" notes="None of these games let you make interesting decisions. Things happen to you, you don't choose to do things.">
          <CloseTable margin="-200px 0 0 0" padding="0 0 0 0">
            <TableBody >
              <TableRow margin="0 0 0 0" padding="0 0 0 0">
                <TableItem margin="0 0 0 0" padding="0 0 0 0" >
                  <Image src={images.lifebox.replace('/', '')} margin="0 0 0 0" padding="0 0 0 0" height="500px" width="500px"/>
                </TableItem>
                <TableItem margin="0 0 0 0" padding="0 0 0 0" >
                  <Image src={images.sorrybox.replace('/', '')} margin="0 0 0 0" padding="0 0 0 0" height="500px" width="500px"/>
                </TableItem>
              </TableRow>
              <TableRow margin="0 0 0 0" padding="0 0 0 0" >
                <TableItem margin="0 0 0 0" padding="0 0 0 0" >
                  <Image src={images.battleshipbox.replace('/', '')} margin="0 0 0 0" padding="0 0 0 0"  height="500px" width="500px"/>
                </TableItem>
                <TableItem margin="0 0 0 0" padding="0 0 0 0" >
                  <Image src={images.candylandbox.replace('/', '')} margin="0 0 0 0" padding="0 0 0 0" height="500px" width="500px"/>
                </TableItem>
              </TableRow>
            </TableBody>
          </CloseTable>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Push your luck games inheritenly let you make more interesting decisions (hint there's a reason gambling is addictive)">
          <Layout>
            <BigFill>
              <Image src={images.incan.replace('/', '')} height="500px" width="auto"/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="30px auto -100px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="darkGrey">
          <Layout>
            <BigFill>
              <Image src={images.clue.replace('/', '')}/>
            </BigFill>
            <BigFill>
              <Image src={images.yahtzee.replace('/', '')} margin="20px 0 0 0"/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="100px auto -100px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Player interaction is essential to winning in Catan">
          <Layout>
            <BigFill>
              <Image src={images.catan.replace('/', '')} height="500px" width="auto"/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="30px auto -100px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://cdn.shopify.com/s/files/1/1134/2518/products/Screen_Shot_2017-11-07_at_4.24.35_PM_1024x1024.png?v=1511264949" transition={["slide"]} notes="Classic games are like marshmallows... Lets dream to do better shall we?"/>

        <Slide bgImage="https://i.giphy.com/media/8PnbQkG5uCl0s/giphy.webp" transition={["slide"]} notes="Shoutout point break."/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="If we take a brief detour into the world of mathmatics... In 1944 John von Neumann & Oskar Morgenstern publish...">
          <Layout>
            <BigFill>
              <Image src={images.theoryofgames.replace('/', '')} height="500px" width="auto"/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="30px auto -100px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/Fjr6v88OPk7U4/giphy.webp" transition={["slide"]} bgSize="contain" notes="OK FINE. Just because I took Game Design classes doesn't mean you want to. Lets just hit the highlights"/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Min Max! (Minimax or MM)">
          <Layout>
            <BigFill>
              <Image src={images.minmax.replace('/', '')} height="400px" width="auto"/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="30px auto -100px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/ZikyVyLF7aEaQ/giphy.webp" transition={["slide"]} bgSize="contain" notes="The prisoners dilemma"/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="TABLES">
          <CloseTable>
            <TableBody >
              <TableHeaderItem>
              </TableHeaderItem>
              <TableHeaderItem>
                <Text bold textColor="darkRed">
                  Cooperate (B)
                </Text>
              </TableHeaderItem>
              <TableHeaderItem>
                <Text bold textColor="darkRed">
                  Defect (B)
                </Text>
              </TableHeaderItem>
              <TableRow>
                <TableItem>
                  <Text bold>
                    Cooperate (A)
                  </Text>
                </TableItem>
                <BorderTableItem>
                  <Text textColor="darkGrey">0, 0</Text>
                </BorderTableItem>
                <BorderTableItem>
                  <Text textColor="lightRed">0, -15</Text>
                </BorderTableItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <Text bold>
                    Defect (A)
                  </Text>
                </TableItem>
                <BorderTableItem textColor="darkGrey" textSize="50px">
                  <Text textColor="lightRed">0, -15</Text>
                </BorderTableItem>
                <BorderTableItem>
                  <Text textColor="darkRed">-10, -10</Text>
                </BorderTableItem>
              </TableRow>
            </TableBody>
          </CloseTable>

          <Image src={images.logo.replace('/', '')} margin="200px auto -200px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/l4q8hrNIxa0WHBw9a/source.gif" transition={["slide"]} bgSize="contain" notes="You need to diversify, don't be lego-businessman"/>

        {/* PLAN:
            Mention great things games can teach you, maybe 1 more example
            Talk about board games as a hobby, don't skip the negatives
            Get into the "If you don't play board games you don't love your family spheal"
            Talk about HOW to get into the hobby
            OUTRO.
            Try not to cry as you have to finish all of this tomorrow...
        */}


        {/* THINGS TO TALK ABOUT
            Reflective Thinking
            Planning
            Problem Solving
            Decision Making
            Logical Thinking
            Emotional Intelligence
            Cooperation
            Competition
            How to Deal with Mistakes
            Deferring Gratification; and so on

            https://geekandsundry.com/9-life-lessons-learned-from-board-games/
        */}


        {/*NOTE LINK TO ncase trust: https://ncase.me/trust/*/}

      </Deck>
    );
  }
}
