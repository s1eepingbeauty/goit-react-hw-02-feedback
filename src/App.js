import { Component } from 'react';
import Section from './components/Sections/Section';
import FeedbackStatistics from './components/Statistics/FeedbackStatistics';
import FeedbackOptions from './components/Options/FeedbackOptions';
import { FEEDBACK_OPTIONS } from './data/options';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositivePercentsge = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositivePercentsge();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          <FeedbackStatistics
            feedbacks={this.state}
            total={total}
            percentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
