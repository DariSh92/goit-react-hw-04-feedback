import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackForm/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  onLeaveFeedback = (event) => {
    if (event === 'good') {
      this.setState({ good: this.state.good + 1 })
    }
    else if (event === 'bad') {
      this.setState({ bad: this.state.bad + 1 })
    }
    else if (event === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 })
    }
  }
  
  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.bad + this.state.neutral;
    return totalFeedback; 
  }

 

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
          
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      
        {this.countTotalFeedback() > 0 ? (
        
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={this.countTotalFeedback()}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
        
        ) : (
          <Notification message="There is no feedback." />
        )}
 
      </Container>
    );
  }
}
  