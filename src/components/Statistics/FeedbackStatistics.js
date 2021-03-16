import Notification from '../Notifiction/Notification';
import styles from './styles.module.css';

const FeedbackStatistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={styles.feedbackList}>
          <li className={styles.feedbackListItem}>Good: {good}</li>
          <li className={styles.feedbackListItem}>Neutral: {neutral}</li>
          <li className={styles.feedbackListItem}>Bad: {bad}</li>
          <li className={styles.feedbackListItem}>Total: {total}</li>
          <li className={styles.feedbackListItem}>Positive feedbacks: {positivePercentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification message="No Feedback given" />}
    </>
  );
};

export default FeedbackStatistics;
