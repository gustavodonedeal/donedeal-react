import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adActions from '../../actions/adActions';
import './ad.css';

class AdPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  componentWillMount() {
    if (this.props.ad.id !== this.props.adId) {
      // check if the ad is inside ads
      let ad = {};
      if (this.props.ads.length > 0) {
        ad = this.props.ads.filter((ad) => ad.id === this.props.adId);
      }
      if (ad[0] && ad[0].id) {
        // if could find the ad, save in the store
        this.props.actions.loadAdByIdSuccess(ad[0]);
      } else {
        // load from API
        this.props.actions.loadAdById(this.props.adId);
      }
    }
  }

  render() {
    const { ad } = this.props;
    let price;
    let image;

    if (ad.id) {
      price = ad.price ? `€${ad.price}` : 'Free';  
    }

    if (ad && ad.photos && ad.photos.length > 0) {
      image = <img className="ad__image" src={ad.photos[0].largeWebp} />;
    }

    return (
      <div className="ad-box">
        <div className="ad-card">
          <div className="ad__image-box">
            {image}
          </div>
          <div className="ad__content">
            <div className="ad__header">
              <span className="ad__title">{ad.header}</span>
              <span className="ad__price">{price}</span>
            </div>
            <span className="ad__description">{ad.description}</span>
          </div>
        </div>
      </div>
    );
  }
}

AdPage.propTypes = {
  ad: PropTypes.object.isRequired,
  ads: PropTypes.array.isRequired,
  adId: PropTypes.number.isRequired,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const ad = {};
  const adId = Number(ownProps.params.id); // from the path `/ad/:id`

  return {
    ad: state.ad,
    ads: state.ads,
    adId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdPage);