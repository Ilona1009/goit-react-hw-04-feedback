import PropTypes from 'prop-types';
import {
  StatisticsListStyled,
  DataFeedback,
  AnalyticsListStyled,
  DataAnalytics,
} from './StatisticsStyled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticsListStyled>
        <DataFeedback>Good feedback : {good}</DataFeedback>
        <DataFeedback>Neutral feedback : {neutral}</DataFeedback>
        <DataFeedback>Bad feedback : {bad}</DataFeedback>
      </StatisticsListStyled>

      <AnalyticsListStyled>
        <DataAnalytics>Total feedback : {total}</DataAnalytics>
        <DataAnalytics>Positive feedback: {positivePercentage} %</DataAnalytics>
      </AnalyticsListStyled>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
