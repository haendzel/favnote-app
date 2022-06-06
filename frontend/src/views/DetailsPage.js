import React, { Component } from 'react';
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
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterUrl: 'https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    const { pageType } = this.state;

    return (
      <DetailsTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterUrl={dummyArticle.twitterUrl}
      />
    );
  }
}

export default DetailsPage;
