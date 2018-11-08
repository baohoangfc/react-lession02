import React, { Component } from 'react';
import ContentPane from './ContentPane/ContentPane';
import LeftPane from './LeftPane/LeftPane';
import RightPane from './RightPane/RightPane';


class Pane extends Component {
    render() {
        return (
            <div id="pane">
            <LeftPane />
            <ContentPane />
            <RightPane /> 
          </div>
        );
    }
}

export default Pane;