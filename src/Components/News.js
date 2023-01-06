import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  static defaultProps={
country:'in',
pageSize:8,
category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor(){
      super();
      this.state={
        articles:[],
        loading:true,
        page:1,
        totalResults:0
      }
    }
    async updateNews(){
      this.props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
     this.setState({loading:true})
       let data= await fetch(url);
       this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(60);
      console.log(parsedData);
      this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false,})
      this.props.setProgress(100);
    }
    fetchMoreData = async() => {
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`

        let data= await fetch(url);
       let parsedData = await data.json();
       console.log(parsedData);
       this.setState({articles:this.state.articles.concat(parsedData.articles),
       totalResults:parsedData.totalResults
      })
    };
     async componentDidMount(){
      this.updateNews();
     //let url=`https://newsapi.org/v2/top-headlines?//country=${this.props.country}&category=${this.props.//category}&apiKey=5d67cb8f099545aeac77e582daaeaef1&//page=1&pageSize=${this.props.pageSize}`
     //this.setState({loading:true})
     //  let data= await fetch(url);
     // let parsedData = await data.json();
     // console.log(parsedData);
     // this.setState({articles:parsedData.articles,
     // totalResults:parsedData.totalResults,
     // loading:false,})
    }
  /* handlePrevClick=async ()=>{
    this.setState({page:this.state.page-1})
      this.updateNews();
      //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d67cb8f099545aeac77e582daaeaef1&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //this.setState({loading:true})
    //let data= await fetch(url);
    //let parsedData = await data.json();
    //console.log(parsedData);
    //this.setState({
    //page:this.state.page-1,
    //articles:parsedData.articles,
    //loading:false,})
    }*/
    /*  handleNextClick=async ()=>{
      this.setState({page:this.state.page+1})
      this.updateNews();
      //if (!(this.state.page+1>Math.ceil(this.state.//totalResults/this.props.pageSize))){
      //let url=`https://newsapi.org/v2/top-headlines?//country=${this.props.country}&category=${this.//props.category}&//apiKey=5d67cb8f099545aeac77e582daaeaef1&page=$//{this.state.page + 1}&pageSize=${this.props.//pageSize}`;
      //this.setState({loading:true})
      // let data= await fetch(url);
      //let parsedData = await data.json();
      //console.log(parsedData);
      //this.setState({
        //page:this.state.page+1,
        //articles:parsedData.articles,
        //loading:false})
      //}
     
    }*/
  render() {
    return (
      <>
        <h2 className="text-center" style={{margin:'35px,0px'}}>Daily News Headlines</h2>
        <div className="text-center">{this.state.loading && <Spinner/>}</div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          
        <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
            return        <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title?element.title:""}
                      description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author}/>
                      </div>
        
        })}
        </div>
        </div>
        </InfiniteScroll>
      
              {/*<div className="continer d-flex justify-content-between">
              <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1}> &larr; Previous</button>
              <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
      </div>*/}
              
      </>
    );
  }
}

export default News;

