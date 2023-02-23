// ${props.apiKey}
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // const [country, setCountry] = useState("");
  // const [category, setCategory] = useState("");
  document.title = `NewsApp - ${props.category}`;



  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    setTimeout(() => {
      props.setProgress(100);
    }, 1000);
  }

  useEffect(() => {
    updateNews();
  } , []);



  /* for handing the next button click
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setPage(page+1);
    setLoading(false);
  };
  */

  /* for handling the previous button click
   handlePrevClick = async () => {
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
     setLoading(true);
     let data = await fetch(url);
     let parsedData = await data.json();
     setArticles(parsedData.articles);
    setPage(page-1);
    setLoading(false);
   };
   */

  // for infinte scrolling component
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <div className='container my-5' style={{paddingTop: "3rem"}}>
      <h3 style={{ color: '#123d5e', }} className=' text-center my-4 mx-2 fw-bolder font-monospace '>{props.category}News</h3>
      <hr></hr>
      {/* <div className='container d-flex justify-content-between'>
            <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick} >&larr; Previous</button>
            <button disabled={(state.page + 1 > Math.ceil(state.totalResults / props.pageSize))} type="button" className="btn btn-dark" onClick={handleNextClick}> &rarr; Next</button>
          </div> */}
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((element) => {
              return (<div className='col-md-4' key={element.url}>
                <NewsItem title={element.title !== "" ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 90) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/thumb/imgsize-37494,msid-97672613,width-400,resizemode-4/97672613.jpg"}
                  newsUrl={element.url}
                  date={element.publishedAt.slice(0, 10)}
                  source={element.source.name}
                ></NewsItem>
              </div>);
            })}
          </div>
        </div>

      </InfiniteScroll>
      {/* <div className='container d-flex justify-content-between'>
          <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick} >&larr; Previous</button>
          <button disabled={(state.page + 1 > Math.ceil(state.totalResults / props.pageSize))} type="button" className="btn btn-dark" onClick={handleNextClick}> &rarr; Next</button>
          </div>*/}
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general',
  totalResults: 0
}

News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News;