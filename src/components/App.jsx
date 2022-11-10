import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackForm/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';



export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);


  const onLeaveFeedback = event => {
    if (event === 'good') {
      setGood(good + 1);
    }
    else if (event === 'bad') {
      setBad(bad + 1);
    }
    else if (event === 'neutral') {
      setNeutral(neutral + 1);
    }
  };
  
  
  const countTotalFeedback = () => {
    const totalFeedback = good + bad + neutral;
    return totalFeedback;
  }


  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  const options = ['good', 'neutral', 'bad'];
  
  return (
    <Container>
          
      <FeedbackOptions
        options={options}
        onLeaveFeedback={onLeaveFeedback}
      />
      
      {countTotalFeedback() > 0 ? (
        
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback()}
          positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
        />
        
      ) : (
        <Notification message="There is no feedback." />
      )}
 
    </Container>
  );
};

  


