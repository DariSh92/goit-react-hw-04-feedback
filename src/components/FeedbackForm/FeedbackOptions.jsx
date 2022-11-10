import { PropTypes } from 'prop-types';
import { FeedbackButtonList, FeedbackButton } from 'components/FeedbackForm/FeedbackOptions.styled';
import { Section } from 'components/Section/Section';




export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Section title='Please, leave Feedback'>
            <FeedbackButtonList>
                {options.map(( option, index ) =>  (
                        <li key={index}>
                            <FeedbackButton type='button' onClick={() => onLeaveFeedback(option)}>
                                {option}
                        </FeedbackButton>
                        </li>
                    
                )
                )}
                
            </FeedbackButtonList>
        </Section>
    );
};




// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
//   options: PropTypes.object.isRequired,
// };

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};