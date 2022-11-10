import PropTypes from 'prop-types';
import { StatisticList, StatisticItem } from 'components/Statistics/Statistics.styled';
import { Section } from 'components/Section/Section';

export const Statistics = ({ good, neutral, bad, totalFeedback, positiveFeedbackPercentage }) => {
    return (
        <Section title='Statistics'>
            <StatisticList>
                <StatisticItem> Good: {good}</StatisticItem>
                <StatisticItem> Neutral: {neutral}</StatisticItem>
                <StatisticItem> Bad: {bad}</StatisticItem>
                <StatisticItem> Total: {totalFeedback}</StatisticItem>
                <StatisticItem> Positive Feedback: {positiveFeedbackPercentage}%</StatisticItem>
            </StatisticList>
        </Section>
        
    );
};




Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};