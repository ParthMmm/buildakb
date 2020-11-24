import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Size from "./Size";

import "./styles.css";
import { Grommet, Button, Menu, Header, Box, Tip } from "grommet";
import { Help } from "grommet-icons";

function HeaderZ() {
  return (
    <Header background="dark-2">
      <Button icon={<Help />} hoverIndicator />
    </Header>
  );
}

export default class App extends Component {
  render() {
    return (
      <Grommet>
        <Box
          background="dark-2"
          overflow="auto"
          responsive="true"
          border={{ color: "#bd93f9", size: "large", style: "solid" }}
          height="100vh"
        >
          <HeaderZ />
          <Router>
            <div>
              <Route exact path="/" component={Landing} />
              <Route exact path="/size" component={Size} />
            </div>
          </Router>
        </Box>
      </Grommet>
    );
  }
}
