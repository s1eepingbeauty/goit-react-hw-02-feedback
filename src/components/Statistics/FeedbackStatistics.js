import Notification from '../Notifiction/Notification';

const FeedbackStatistics = ({ feedbacks, total, percentage }) => {
  return (
    <>
      {total > 0 && (
        <ul>
          <li>Good: {feedbacks.good}</li>
          <li>Neutral: {feedbacks.neutral}</li>
          <li>Bad: {feedbacks.bad}</li>
          <li>Total: {total}</li>
          <li>Percentage: {percentage}</li>
        </ul>
      )}
      {total === 0 && <Notification message="No Feedback given" />}
    </>
  );
};

export default FeedbackStatistics;
