
import './App.css';
import React, {Component} from "react";
import NameFilter from './componenets/NameFilter'
import RatingFilter from './componenets/Ratingfilter'
import MovieList from './componenets/MovieList'

const Coco = {
  id: 'coco',
  title: 'Coco',
  rating: 5,
  image: 'https://img.over-blog-kiwi.com/0/77/65/37/20181020/ob_0c55ef_coco.jpg',
  year: 2018}

  const Casse = {
  id :'casse',
  title:'Casse-Noisette',
  rating:5,
  image:'https://fr.web.img6.acsta.net/pictures/18/10/10/09/02/3111220.jpg',
  year:2010}

  const Mouana= {
    id:'mouana',
    title:'Mouana',
    rating:4,
    image:"https://wir.skyrock.net/wir/v1/resize/?c=isi&im=%2F4647%2F89714647%2Fpics%2F3282731194_2_6_cugAy98V.jpg&w=400",
     year:2017}

  const Mermaidia={
    id:'Mermaidia',
    title:'Mermaidia',
    rating:3,
    image:"https://i.pinimg.com/474x/d9/ac/ec/d9acec1979f55243a5048a9abee1b1b6.jpg",
     year:2014}

const moviesToDisplay = [Casse, Coco, Mouana, Mermaidia]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 0,
      movies: moviesToDisplay,
      titleFilter: ''
    }
  }
  
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title.toLowerCase().includes(
          this.state.titleFilter.toLowerCase().trim()
        )
      )
  }
  render() {
    return (
      <div className="App">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter
              })
            }} />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </header>
        <main className="movie-app-main">
            <MovieList
              movies={
                this.getVisibleMovies()
              }
              onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />
        </main>
      </div>
    )
  }
}

export default App;


