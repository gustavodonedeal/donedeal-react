import * as adApi from '../api/donedeal/adApi';
import * as types from './actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAdsSuccess(ads) {
  return { type: types.LOAD_ADS_SUCCESS, ads };
}

export function loadAdByIdSuccess(ad) {
  return { type: types.LOAD_AD_BY_ID_SUCCESS, ad };
}

export function loadAds(section, filter) {
  return dispatch => {
    dispatch(beginAjaxCall());
    adApi.getAds(section, filter)
      .then(ads => {
        dispatch(loadAdsSuccess(ads));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function loadAdById(adId) {
  return dispatch => {
    dispatch(beginAjaxCall());
    adApi.getAd(adId)
      .then(ad => {
        console.log(ad);
        dispatch(loadAdByIdSuccess(ad));
      })
      .catch(error => {
        throw (error);
      });
  };
}
