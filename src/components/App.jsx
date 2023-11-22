import { useState } from 'react';
import OptionsList from './Feedback/Feedback';
import Section from './Section/Sections';
import Statistics from './Statistic/Statistic';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = feedbackName => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };

  const total = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const positivePercentage = () =>
    feedback.good === 0 ? 0 : Math.ceil((feedback.good / total()) * 100);

  const options = Object.keys(feedback);
  const { good, neutral, bad } = feedback;
  return (
    <>
      <Section title="Please leave feedback">
        <OptionsList options={options} leaveFeedback={leaveFeedback} />
      </Section>

      {total() === 0 ? (
        <Section>
          <Notification message="There is no feedback"></Notification>{' '}
        </Section>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total()}
          positivePercentage={positivePercentage()}
        ></Statistics>
      )}
    </>
  );
};
