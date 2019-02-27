import React, {Component} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList';
import { fetchMovies } from '../../actions/movies';
class MoviesPage extends Component {
    
    static propTypes = {
        movies: PropTypes.array.isRequired
    };

    componentDidMount(){
        this.props.fetchMovies();
    }
    
    render() {
        console.log(this.props);
        return (
        <div>
          <h2>Movies Page</h2>
          <MoviesList movies={this.props.movies}></MoviesList>
        </div>
        );
    };
};

const mapStateToProps = ({movies}) => {
    return {
        movies
    };
};

const mapDispatchToprops={
    fetchMovies
}
export default connect(mapStateToProps,mapDispatchToprops)(MoviesPage);