import React, { Component } from 'react';
import { Routes } from 'react-router-dom';
import DetailsTemplate from 'templates/DetailsTemplate';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (window.location.href.split(window.location.hostname)[1].split('/')[1]) {
      case 'twitters':
        this.setState({ pageType: 'twitters' });
        break;
      case 'notes':
        this.setState({ pageType: 'notes' });
        break;
      case 'articles':
        this.setState({ pageType: 'articles' });
        break;
    }
  }

  render() {
    return <DetailsTemplate pageType={this.state.pageType} />;
  }
}

export default DetailsPage;
