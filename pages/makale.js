import React from 'react';
import firebase from 'firebase';

class Makale extends React.Component {
  
  state = {
    articles: []
  }

  componentDidMount() {
    firebase.database().ref('articles/').once('value').then(snapshot => {
      const articles = [];
      snapshot.forEach((article) => {
        articles.push(article.val());
      });

      this.setState({
        articles: articles
      })
    });
  }

  render() {
    return (
      <div className="Makale page">
        { this.state.articles.map(article => (
          <div dangerouslySetInnerHTML={{__html: article}} className="Article" />
        ))}
      </div>
    );
  }
};

export default Makale;