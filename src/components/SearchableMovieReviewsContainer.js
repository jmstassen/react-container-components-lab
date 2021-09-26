import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'eng86BFEaFin7KyAdsFLbvT6bltSefw2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(URL + "&query=" + this.state.searchTerm)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }
 
  render() {
    return(
      <div className="searchable-move-reviews">
        <h1>Search Reviews</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="query" value={this.state.searchTerm}></input>
          <input type="submit" value="search"></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }


}