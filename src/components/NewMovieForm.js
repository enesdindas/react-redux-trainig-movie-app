import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Form, Image, Message } from 'semantic-ui-react'
import InlineError from './InlineError';

class NewMovieForm extends Component {
	state = {
		_id: this.props.movie ? this.props.movie._id : '',
		title: this.props.movie ? this.props.movie.title : '',
		category: this.props.movie ? this.props.movie.category : '',
		country: this.props.movie ? this.props.movie.country : '',
		cover: this.props.movie ? this.props.movie.cover : '',
		year: this.props.movie ? this.props.movie.year : '',
		imdb: this.props.movie ? this.props.movie.imdb : '',
		director_id: this.props.movie ? this.props.movie.director_id : '',
		errors: {},
		redirect: false
	};

	static propTypes = {
		onNewMovieSubmit: PropTypes.func.isRequired
	};

	componentWillReceiveProps(nextProps) {
		const { movie } = nextProps.newMovie;
		if (
			movie.title
			&&
			movie.title !== this.state.title
		) {
			this.setState({
				title: movie.title,
				category: movie.category,
				country: movie.country,
				cover: movie.cover,
				year: movie.year,
				imdb: movie.imdb,
				director_id: movie.director_id,
			});

		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = () => {
		const errors = this.validate();
		this.setState({
			errors,
			redirect: true
		});

		const _id = this.state._id || this.props.newMovie.movie._id;

		if (Object.keys(errors).length === 0) {
		  if (!_id)
				this.props.onNewMovieSubmit(this.state);
			else
				this.props.onUpdateMovieSubmit({ ...this.state, _id});
		}
	};

	validate = () => {
		const errors = {};
		if (!this.state.title) errors.title = "Can't be blank."
		if (!this.state.category) errors.category = "Can't be blank."
		if (!this.state.country) errors.country = "Can't be blank."
		if (!this.state.cover) errors.cover = "Can't be blank."
		if (!this.state.year) errors.year = "Can't be blank."
		if (!this.state.imdb) errors.imdb = "Can't be blank."
		if (!this.state.director_id) errors.director_id = "Can't be blank."
		return errors;
	};

	render() {
		const {errors} = this.state;
		const form = (
			<Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>
				
				<Form.Field>
					<label>Title</label>
					{ errors.title && <InlineError message={errors.title} /> }
					<input
						id="title"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
						placeholder='Title' />
				</Form.Field>

				<Form.Field>
					<label>Category</label>
					{ errors.category && <InlineError message={errors.category} /> }
					<input
						id="category"
						name="category"
						value={this.state.category}
						onChange={this.handleChange}
						placeholder='Category' />
				</Form.Field>

				<Form.Field>
					<label>Country</label>
					{ errors.country && <InlineError message={errors.country} /> }
					<input
						id="country"
						name="country"
						value={this.state.country}
						onChange={this.handleChange}
						placeholder='Country' />
				</Form.Field>

				<Form.Field>
					<label>Cover Url</label>
					{ errors.cover && <InlineError message={errors.cover} /> }
					<input
						id="cover"
						name="cover"
						value={this.state.cover}
						onChange={this.handleChange}
						placeholder='Cover Url' />
				</Form.Field>

				<Form.Field>
					<label>Year</label>
					{ errors.year && <InlineError message={errors.year} /> }
					<input
						id="year"
						name="year"
						value={this.state.year}
						onChange={this.handleChange}
						placeholder='Year' />
				</Form.Field>

				<Form.Field>
					<label>Imdb</label>
					{ errors.imdb && <InlineError message={errors.imdb} /> }
					<input
						id="imdb"
						name="imdb"
						value={this.state.imdb}
						onChange={this.handleChange}
						placeholder='Imdb' />
				</Form.Field>

				<Form.Field>
					<label>Director Id</label>
					{ errors.director_id && <InlineError message={errors.director_id} /> }
					<input
						id="director_id"
						name="director_id"
						value={this.state.director_id}
						onChange={this.handleChange}
						placeholder='Director Id' />
				</Form.Field>

				<Image src={this.state.cover} size='small' />
				<div className="clearfix"></div>
				<Button type='submit'>Submit</Button>

				{
					this.props.newMovie.error.response
					&&
					(
						<Message negative>
							<Message.Header>We`re Sorry</Message.Header>
							<p>A problem occured while recording.</p>
						</Message>
					)
				}
			</Form>
		);

		return (
			<div>
				{
					this.props.newMovie.done && this.state.redirect
						? <Redirect to="/movies" /> : form
				}
			</div>
		);
	}
}

export default NewMovieForm;
