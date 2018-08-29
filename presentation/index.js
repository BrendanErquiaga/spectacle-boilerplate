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
  cattle: require('../assets/images/cattle.png'),
  dad: require('../assets/images/dad.jpg'),
  dadplaying: require('../assets/images/dadplaying.jpg'),
  dutchbelt: require('../assets/images/dutchbelt.jpg'),
  sheriff: require('../assets/images/sheriff.jpg'),
  wife: require('../assets/images/wife.jpg'),
  clogs: require('../assets/images/clogs.jpg'),
  familygametime: require('../assets/images/familygametime.jpg'),
  gametime: require('../assets/images/gametime.jpg'),
  movietheater: require('../assets/images/movietheater.jpg'),
  netflix: require('../assets/images/netflix.jpg'),
  netflixcommercial: require('../assets/images/netflixcommercial.jpg'),
  thumbsup: require('../assets/images/thumbsup.jpg'),
  expensive: require('../assets/images/expensive.png'),
  santamaria: require('../assets/images/santamaria.jpg'),
  istanbul: require('../assets/images/istanbul.jpg'),
  collection: require('../assets/images/collection.jpg'),
  graph: require('../assets/images/graph.png'),
  lgs: require('../assets/images/lgs.jpg'),
  gamedepot: require('../assets/images/gamedepot.jpg'),
  ncase: require('../assets/images/ncase.jpg'),
  ipswitch: require('../assets/images/ipswitch.png'),
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
  butwait: require('../assets/gifs/butwait.gif'),
  tableflip: require('../assets/gifs/tableflip.gif'),
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
        notes="Ok. I legitimately do not have enough time to tell you all the reasons Monopoly is terrible. (There is a 20 minute 99% invisible podcast on JUST this.) The best strategy is to buy property and suck up all the houses as fast as possible, as long as you never upgrade them there will be a housing shortage and as long as you made it there first you are mathmatically in the most adventageous position. And there's NOTHING anyone can do about it. There is no counterplay. It is hopeless. You just lose slowly."/>

        <Slide transition={["slide"]} bgColor="lightGrey" bgImage={images.landlords.replace('/', '')} bgSize="contain"
        notes="OH OH OH. And lets not forget Monopoly started from The Landlords Game. Originally it had two rule sets, one designed to highlight the benefits of Single Tax theory, the other one to highlight the ruthless soul sucking systems of monopolies crushing the lower class. Guess which one the Parker Brothers printed. The game’s creator, Lizzy Magie, patented it in 1904 and included two sets of rules."/>

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

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Min Max! (Minimax or MM)">
          <Layout>
            <BigFill>
              <Image src={images.ncase.replace('/', '')} height="400px" width="auto"/>
            </BigFill>
          </Layout>

          <Heading textColor="lightRed" bold size={3} margin="50px auto auto auto">
            ncase.me/trust
          </Heading>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/l4q8hrNIxa0WHBw9a/source.gif" transition={["slide"]} bgSize="contain" notes="You need to diversify, don't be lego-businessman"/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Min Max! (Minimax or MM)">
          <Heading textColor="black" bold size={2}>
            learn all the things
          </Heading>

          <List margin="50px auto auto 200px">
            <Layout>
              <Fill>
                <ListItem>how to deal with mistakes</ListItem>
                <ListItem>cooperation & competition</ListItem>
                <ListItem>emotional intelligence</ListItem>
                <ListItem>logical thinking</ListItem>
                <ListItem>problem solving</ListItem>
                <ListItem>planning</ListItem>
              </Fill>
            </Layout>
          </List>

          <Image src={images.logo.replace('/', '')} margin="200px auto -100px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://i.giphy.com/media/uzZh2psw4J3ri/giphy.webp" transition={["slide"]} bgSize="contain" notes="The good news is all of this happens passively, you don't have to think about it."/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Board games can even be used to treat mental health problems, take that movies. http://www.ipswichstar.co.uk/news/ipswich-library-using-board-games-to-tackle-mental-health-issues-and-loneliness-1-5645544">
          <Layout>
            <BigFill>
              <Image src={images.ipswitch.replace('/', '')} height="800px" width="auto" margin="-100px auto auto auto"/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="30px auto -100px auto" width="100px"/>
        </Slide>

        {/*~~~~~~~~~~~~~~~~~SECTION 4 - Board games as a hobby!~~~~~~~~~~~~~~~~~*/}

        <Slide bgImage="https://i.giphy.com/media/j5QcmXoFWl4Q0/giphy.webp" transition={["spin"]} bgSize="contain" notes="All right all right, games are cool. Obviously I've convinced you. What else"/>

        <Slide bgImage={images.lgs.replace('/', '')} transition={["slide"]} bgDarken="0.1" notes="Friendly Local Game Store"/>

        <Slide bgImage={images.gamedepot.replace('/', '')} transition={["slide"]} notes="Game Depot, Southern & McClintock. The gentleman on the right & his wife own & run the store. They are SUPER nice & friendly, they will answer any of your questions & always have a great selection of games."/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="According to this total real & accurate graph I made games are bigger than ever">
          <Layout>
            <BigFill>
              <Image src={images.graph.replace('/', '')} margin="-50px auto auto auto"/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="150px auto -100px auto" width="100px"/>
        </Slide>

        <Slide bgImage={images.collection.replace('/', '')} transition={["slide"]} notes="The sheer number of games you can buy these days is bonkers"/>

        <Slide bgImage="https://media.giphy.com/media/eLAHxY9cYXdO8/giphy.gif" transition={["spin"]} bgSize="contain" notes="Not only can you buy tons of games, you can buy games about anything you can imagine. Trains, Farming, being a spy, being a robot, making robots, making factories that make robots. Seriously if you can think it, there's probably a game for it."/>

        <Slide bgImage="https://i.giphy.com/media/xT9KVmZwJl7fnigeAg/giphy.webp" transition={["slide"]} bgSize="contain" notes="Now, I have to pause & talk about the bad parts of this hobby, because I'm a unbiased presenter & I want to give it to you straight."/>

        <Slide bgImage="https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif" transition={["slide"]} bgSize="contain" notes="Sometimes people in your 'Friendly local game store' can be downright creepy, especially if your a woman."/>

        <Slide bgImage="https://media.giphy.com/media/l0MYQHkVjWEH7N3ig/giphy.gif" transition={["slide"]} bgSize="contain" notes="This is obviously not ok. Its a big problem and the community is currently going through a slow process to change the culture but I just wanted to make you aware it exists."/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="These two games are also great examples of another common problem in board games. Namely diversity and hand waving human tragedy. Santa Maria glorifies colonialism & ignores the fact that the 'laborers' you are acquiring is actually you capturing indiginous people and placing them in indentured servitude. And Istanbul has ~82 characters depicted in the cards and board, annnnnd none of them are women... And these are just two examples of naive culutural framing that is persistent in board games, especially from older entries.">
          <Layout margin="-200px auto auto auto">
            <BigFill>
              <Image src={images.santamaria.replace('/', '')} margin="100px 0 0 0"/>
            </BigFill>
            <BigFill>
              <Image src={images.istanbul.replace('/', '')} />
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="50px auto -100px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/nh9k1qzeLf99S/giphy.gif" transition={["slide"]} bgSize="contain" notes="Ok one last negative before we move back into happy stuff. Games as a hobby has this very subtle problem. Because new games keep coming out, and because of rampant consumerism, which is only promoted by 'influencers', there is a big push to keep buying games. And frankly they aren't all that good..."/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="For reference my collection is _already_ worth ~$1300, in no world do I _need_ to spend another thousand dollars...">
          <Layout>
            <BigFill>
              <Image src={images.expensive.replace('/', '')} height="150px" width="auto"/>
            </BigFill>
          </Layout>

          <Image src={images.logo.replace('/', '')} margin="300px auto -150px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/ALvdHigd2gBqw/giphy.gif" transition={["slide"]} bgSize="contain" notes="I think these kinds of issues are becoming more and more visible to the community so we can only hope they get better."/>

        {/*~~~~~~~~~~~~~~~~~SECTION 5 - If you don't play games you don't love your family~~~~~~~~~~~~~~~~~*/}

        <Slide bgImage="https://media.giphy.com/media/l0HlJiVs2oAtVet0c/giphy.gif" transition={["spin"]} bgSize="contain" notes="Ok next. Lets get one thing straight. If you don't play board games."/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="BOOOM TRUTH BOMBS">
          <Heading size={3} bold textColor="lightRed">
            you don't love your family <Hidden>'</Hidden>
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/5xtDarHn0Wg9xtk4xdm/giphy.gif" transition={["spin"]} bgSize="contain" notes="Shrug. I just call em like I see em."/>

        <Slide bgImage={images.netflixcommercial.replace('/', '')} transition={["slide"]} notes="If this is you... well then you're in an ad for netflix"/>

        <Slide bgImage={images.netflix.replace('/', '')} transition={["slide"]} notes="Ok if this is you... No one looks happy in this photo & I'm positive we've all been here"/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="seriously no one cares about the other people here...">
          <Heading size={1} bold textColor="black">
            no engagement
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="seriously no one cares about the other people here...">
          <Heading size={1} bold textColor="black">
            don't you like your family? <Hidden>'</Hidden>
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide bgImage={images.movietheater.replace('/', '')} transition={["slide"]} notes="If so then why are you giving them what everyone agrees is a terrible first date???"/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="no interaction here, there's no inspiration for conversation">
          <Heading size={1} bold textColor="black">
            no conversation
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide bgImage={gifs.butwait.replace('/', '')} transition={["slide"]} notes="But wait! NO I won't wait. I call shenanigans on the 'conversations' you have after binging netflix & ignoring each other. If you go around and ask your family and all you get is this: "/>

        <Slide bgImage={images.thumbsup.replace('/', '')} transition={["slide"]} notes="This is NOT critical thought... There is no discovering or interesting things happening here. "/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Reach for a higher standard. I believe you can do better!">
          <Heading size={1} bold textSize="150" textColor="black">
            ಠ_ಠ
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Don't you want an enriched experience? better relationships? don't you want to know more about your friends and family? if not... whats the point...">
          <Heading size={1} bold textColor="black">
            don't you want more? <Hidden>'</Hidden>
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide bgImage="https://media.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy.gif" transition={["slide"]} notes="If you don't want that! If you just want to surrounded by familiar warm bodies as you mindlessly consume 'conent' until the end of your days..."/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="Then I suggest getting a pet.">
          <Heading size={1} bold textColor="black">
            🐶🐱🐟🐦
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="games provide shared experiences.">
          <Heading size={1} bold textColor="darkRed">
            shared experiences
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide bgImage={images.gametime.replace('/', '')} transition={["slide"]} notes="These are memories that will last a lifetime, look at the smile on Andy's face right now! He probably remembers Jake being the biggest traitor camelot has ever seen."/>

        <Slide bgImage={images.familygametime.replace('/', '')} bgSize="contain" bgRepeat="no-repeat" transition={["slide"]} notes="And not just nerds, this is my family preventing worldwide epidemics, look how happy."/>

        <Slide bgImage={images.clogs.replace('/', '')} bgSize="contain" transition={["slide"]} notes="And frankly games let you have moments like this. Yes those are traditional Dutch clogs my old roommates, & those are obviously my beautiful legs."/>

        <Slide transition={["slide"]} bgColor="lightGrey" notes="games provide shared experiences.">
          <Heading size={1} bold textColor="black">
            story time
          </Heading>

          <Image src={images.logo.replace('/', '')} margin="350px auto -250px auto" width="100px"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Layout>
            <BigFill>
              <Image src={images.wife.replace('/', '')} height="800px" width="auto" margin="-150px auto auto auto"/>
            </BigFill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="lightGrey">
          <Layout>
            <BigFill>
              <Image src={images.wife.replace('/', '')} height="600px" width="auto"/>
            </BigFill>
            <BigFill>
              <Image src={images.sheriff.replace('/', '')} height="600px" width="auto"/>
            </BigFill>
          </Layout>
        </Slide>


        {/*
          Family Game Time
          Story Time - Wife
          Story Time - Father (mention there are fewer than 1000 pure bred dutch belted cows left in the world)
          Games will TEACH you things about your family, these are powerful moments that you shouldn't miss out on. (Dutch belted, also known as Lakenvelder)
        */}

        {/*~~~~~~~~~~~~~~~~~SECTION 6 - Ok fine... You convinced me... how do I do this, where should I start~~~~~~~~~~~~~~~~~*/}

        {/*~~~~~~~~~~~~~~~~~SECTION 7 - Outro~~~~~~~~~~~~~~~~~*/}


        {/* PLAN:
            Get into the "If you don't play board games you don't love your family spheal"
            Talk about HOW to get into the hobby
            OUTRO.
            Try not to cry as you have to finish all of this tomorrow...
        */}



        {/*NOTE LINK TO ncase trust: https://ncase.me/trust/*/}

      </Deck>
    );
  }
}
