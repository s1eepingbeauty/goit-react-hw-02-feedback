import PropTypes from 'prop-types';
import styles from './styles.module.css';

const FeedbackButtons = ({ feedback, onLeaveFeedback }) => {
  return (
    <button className={styles.feedbackBtn} key={feedback} type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => FeedbackButtons({ feedback: option, onLeaveFeedback }));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
