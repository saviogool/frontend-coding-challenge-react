import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./Main.css";
import RepositoryRow from "./scenes/Repositories/RepositoryRow";

class Main extends Component {
  render() {
    return (
      <Grid>
        <RepositoryRow
          title="Header"
          description="Description"
          avatarUrl="http://avatar.com"
          nbIssues={10}
          nbStars={10}
          owner="Houssam"
        />
      </Grid>
    );
  }
}

export default Main;
