import React, { Component } from 'react';
import { Carousel, Container, Row, Col, Alert } from 'react-bootstrap';
import Spinner from "react-bootstrap/Spinner";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const { title } = this.props;
    const apiKey = "4ca18575";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        this.setState({ movies: data.Search,
          isLoading: false,
          isError: true,
         });
        
      }
    } catch (error) {
      console.error("Errore nel fetch dei dati:", error);
    }
  };

  render() {
    const { movies } = this.state;

    // Divide i film in gruppi di 6
    const groupedMovies = [];
    for (let i = 0; i < movies.length; i += 6) {
      groupedMovies.push(movies.slice(i, i + 6));
    }

    return (
      <Container fluid className='w-75 gallerys'>
        <h4>{this.props.title}
        {this.state.isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {/* {this.state.isError && (
                <Alert variant="danger">
                  Ops! Qualcosa è andato storto
                  <i className="bi bi-exclamation-triangle"></i>
                </Alert>
              )}  togliere il commento per vedere se ce errore*/}
        </h4>
        <Carousel indicators={false} controls={true} className="mb-5">
          {groupedMovies.map((group, index) => (
            <Carousel.Item key={index} className="mt-2">
              <Container fluid className="p-0">
                <Row>
                  {group.map((movie, idx) => (
                    <Col xs={12} md={2} className="mb-3 p-1" key={idx}>
                      <img
                        src={movie.Poster}
                        className="d-block w-100"
                        alt={movie.Title}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default Gallery;
