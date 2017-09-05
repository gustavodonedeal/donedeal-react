import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adActions from '../../actions/adActions';

import SearchList from './SearchList';
import './search.css';

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.refreshList = this.refreshList.bind(this);
  }

  componentWillMount() {
    if (this.props.ads.length === 0) {
      this.props.actions.loadAds();
    }
  }

  refreshList(e) {
    e.preventDefault();
    this.props.actions.loadAds();
  }

  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <a className="refresh-list" onClick={(e) => this.refreshList(e)}>
          Refresh List
        </a>
        <SearchList ads={this.props.ads} />
      </div>
    );
  }
}

SearchPage.propTypes = {
  ads: PropTypes.array.isRequired,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    ads: state.ads
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);