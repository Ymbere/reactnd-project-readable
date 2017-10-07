import { headers } from '../headers'
import { url } from '../../../api-server/configurl'
import { push } from 'react-router-redux'

export const FETCH_CATEGORY_DATA_SUCCESS = 'FETCH_CATEGORY_DATA_SUCCESS'
export const FETCH_TAB_DATA_SUCCESS = 'FETCH_TAB_DATA_SUCCESS'

export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export const SELECT_TAB = 'SELECT_TAB'
export const SET_OPERATION = 'SET_OPERATION';

export const selectCategory = ({tab, category}) => {
  
  return {
    type: SELECT_CATEGORY,
    tab, category,
  }
}

export const selectTab = ({tab}) => {
  return {
    type: SELECT_TAB,
    tab,
  }
}

export const fetchCategoryDataSuccess = (categories) => {
  return {
    type: FETCH_CATEGORY_DATA_SUCCESS,
    categories,
  }
}

export const categoryFetchData = () => {
  return (dispatch) => {
    fetch(`${url}/categories`, {headers})
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    })
    .then((response) => response.json())
    .then((data) => dispatch(fetchCategoryDataSuccess(data.categories)))
  }
}


export const fetchTabDataSuccess = (tabs) => {
  return {
    type: FETCH_TAB_DATA_SUCCESS,
    tabs,
  }
}

export const tabFetchData = () => {
  return (dispatch) => {
    fetch(`${url}/tabs`, {headers})
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    })
    .then((response) => response.json())
    .then((data) => dispatch(fetchTabDataSuccess(data.tabs)))
  }
}


