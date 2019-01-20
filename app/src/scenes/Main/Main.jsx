import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './Main.css';
import MostStarredRepos from './scenes/Repositories/MostStarredRepos/MostStarredRepos';

class Main extends Component {
    render() {
        return (
            <Grid>
                <MostStarredRepos />
            </Grid>
        );
    }
}

export default Main;
