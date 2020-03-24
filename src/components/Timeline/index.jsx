import React, { Component } from 'react';
import VerticalTimeline from './VerticalTimeline';
import VerticalTimelineElement from './VerticalTimelineElement';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // fetch('http://localhost:5000/v2/total')
    fetch('https://covid19-wiki-api.herokuapp.com/v2/total', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(statsJSON => {
        fetch('http://api-go-article.herokuapp.com/all', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
          .then(res => res.json())
          .then(async articleJSON => {
            const days = [];
            await statsJSON['total'].forEach(day => {
              // Reformat the statsDate to match the articleDate
              const formmattedDate = [];
              var date = day.date.split('/');
              formmattedDate.push('20' + date[2]);
              formmattedDate.push(date[0].length > 1 ? date[0] : '0' + date[0]);
              formmattedDate.push(date[1].length > 1 ? date[1] : '0' + date[1]);
              date = formmattedDate.join('');

              // Loop through articleJSON at date and append the needed info to days new article array
              days.articles = [];
              articleJSON[date].forEach(article => {
                const articleData = {};
                articleData.title = article['title'];
                articleData.url = article['url'];
                articleData.abstract = article['abstract'];
                days.articles.push(articleData);
              });
              // Push the updated day object to the days array
              days.push(day);
            });
            this.setState({
              items: days,
              isLoaded: true
            });
          });
      });
  }

  render() {
    let { items, isLoaded } = this.state;

    if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <VerticalTimeline className="vertial-timeline">
          {items.reverse().map(item => {
            return (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element"
                contentStyle={{ color: '#000' }}
                infoStyle={{ background: 'rgba(94, 196, 237, 0.50)' }}
                date={item.date}
                dateStyle={{ color: '#000' }}
                iconStyle={{ background: '#000', color: '#fff' }}
                stats={{
                  totalConf: item.confirmed,
                  confPctIncDec: '(^872 / 0.44%)',
                  totalDead: item.deaths,
                  deadPctIncDec: '(^43 / 0.54%)',
                  totalRecr: item.recovered,
                  recrPctIncDec: '(^1,110 / 1.35%)'
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  <u>WHAT HAPPEND ON THIS DAY?</u>
                </h3>
                {item.articles.map(article => {
                  return (
                    <div className="article-card">
                      <h4>
                        <a href={article.url}>{article.title}</a>
                      </h4>
                      <p>{article.abstract}</p>
                    </div>
                  );
                })}
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement iconStyle={{ background: '#fff', color: '#fff' }} />
        </VerticalTimeline>
      );
    }
  }
}

export default Timeline;
