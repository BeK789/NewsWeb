import React, {useEffect,useState} from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

export default function News(props) {

  const updateNews = async() => {
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=39df46f4102f46089d8a0fb87a3fd5c7`)
    let parsedData= await data.json()
    setArticles(parsedData.articles) 
}


useEffect(() => {
  updateNews(); 
  // eslint-disable-next-line
}, [])

const [articles, setArticles] = useState([])

  
  return (
  <div className='container my-3'> 
  <h2> Top Headlines </h2>
    <div className='row'>
    {articles.map((e) =>
      <div className="col-md-4" key={e.url}>
        <NewsItems title={e.title} urlToImage={e.urlToImage} description={e.description} url={e.url}/>
      </div>
    )}
    </div>
  </div>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}