import React, { Component } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Header,
  Button,
  Menu,
  Main,
  Paragraph,
  Heading,
  Anchor,
} from "grommet";
import { LinkNext } from "grommet-icons";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <Box background="dark-2" overflow="auto" responsive="true" height="100vh">
        <Box
          background="dark-2"
          direction="column"
          border={{ color: "dark-2", size: "large" }}
          pad="medium"
          animation="slideUp"
        >
          <motion.h2
            className="text"
            animate={{ opacity: 1, scale: 1.5 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Let's build a keyboard!
          </motion.h2>
          <Main pad="large" background="dark-2" className="text" fill="true">
            <Heading alignSelf="center">Something</Heading>
            <Paragraph alignSelf="center">Something about something</Paragraph>
            <Anchor href="/size">
              <LinkNext></LinkNext>
            </Anchor>
          </Main>
        </Box>
      </Box>
    );
  }
}
