import React, { useState, useEffect } from 'react';
import './TechNewsSection.css';

function TechNewsSection() {
  const [news, setNews] = useState([]);
  const [news_data, setnews_data] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json');
      const data = await response.json();
      setNews(data);

      const randomElements = [...data]
        .sort(() => Math.random() - 0.5)  // Shuffle the array
        .slice(0, 4);

      const fetchedNews = await Promise.all(
        randomElements.map(async (id) => {
          const newUrl = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          return await newUrl.json();
        })
      );

      setnews_data(fetchedNews);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <section className="tech-news-section">
      <h2>Latest Tech News</h2>
      <div className="news-grid">
        {news_data.map((article, index) => (
          <div key={index} className="news-card">
            <h3>{article.title}</h3>
            <p>{article.type}</p>
            {console.log("here" + article.url)}
            <p>{article.by}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechNewsSection;
