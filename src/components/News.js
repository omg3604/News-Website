// a4cc90b77e91426f9f474fe2d4d76352
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js';

export class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 6,
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      country: "",
      category: ""
    }
    document.title = `NewsApp - ${this.props.category}`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4cc90b77e91426f9f474fe2d4d76352&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4cc90b77e91426f9f474fe2d4d76352&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false
    });
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a4cc90b77e91426f9f474fe2d4d76352&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    });
  };

  render() {
    return (
      <div className='container my-3'>
        <h4 style={{color: '#123d5e', }} className=' text-center my-4 mx-2 fw-bolder font-monospace'>{this.props.category} News</h4>
        <hr></hr>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}> &rarr; Next</button>
        </div>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return (<div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} 
                        description={element.description ? element.description.slice(0, 90) : ""}
                        imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/thumb/imgsize-37494,msid-97672613,width-400,resizemode-4/97672613.jpg"} 
                        newsUrl={element.url}
                        date={element.publishedAt.slice(0,10)}
                        source={element.source.name}
              ></NewsItem>
            </div>);
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}> &rarr; Next</button>
        </div>
      </div>
    )
  }
}

export default News