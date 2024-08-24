import React, { useState, useEffect } from 'react';
import './TechNewsSection.css';

function TechNewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2024-08-23&to=2024-08-23&sortBy=popularity&apiKey=6cedc1e4560445b9a50742114f2203dc');
      const data = await response.json();
      setNews(data.articles.slice(0, 4)); // Get only the first 4 articles
      console.log(news)
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <section className="tech-news-section">
      <h2>Latest Tech News</h2>
      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="news-image" />
            )}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            {console.log(article.url)}
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechNewsSection;