import React, {useEffect,useState} from 'react'
import NewsItems from './NewsItems'

export default function News(props) {

  const updateNews = async() => {
    let data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=39df46f4102f46089d8a0fb87a3fd5c7')
    let parsedData= await data.json()
    console.log(parsedData);
    setArticles(parsedData.articles) 
}


useEffect(() => {
  updateNews(); 
  // eslint-disable-next-line
}, [])

const [articles, setArticles] = useState('')

  
  return (
    <div>
      {articles.map((e) =>
        <NewsItems title={e.title} urlToImage={e.urlToImage} content={e.content}/>
      )}
    </div>
    )
}