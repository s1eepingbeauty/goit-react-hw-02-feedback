import Notification from '../Notifiction/Notification';

const FeedbackStatistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedbacks: {positivePercentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification message="No Feedback given" />}
    </>
  );
};

export default FeedbackStatistics;
