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
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Spin,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#F0F0F0",
  lightGrey: "#F3F3F3",
  darkGrey: "7F7F7F",
  darkRed: "2F1B1B",
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
      </Deck>
    );
  }
}
