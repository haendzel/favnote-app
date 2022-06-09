import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: null,
  };

  componentDidMount() {
    if (this.props.activeItem) {
      console.log(this.props.activeItem);
      this.setState({ activeItem: this.props.activeItem });
    } else {
      const { id } = this.props.match.params;

      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => console.log(data))
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        _id={activeItem}
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (state[ownProps.pageContext]) {
    return {
      activeItem: state[ownProps.pageContext].filter(
        item => item._id === ownProps.match.params._id,
      ),
    };
  }
};

export default withContext(connect(mapStateToProps)(DetailsPage));
