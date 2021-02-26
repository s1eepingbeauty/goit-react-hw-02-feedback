//import { useState } from 'react';
import FeedbackStatistics from './FeedbackStatistics.js'
import FeedbackButtons from "./FeedbackButtons.js";

const FeedbackPage = () => (
    <div>
        <h1>Please leave feedback</h1>
        <FeedbackButtons />
        <h2>Statistics</h2>
        <FeedbackStatistics />
    </div>
);

export default FeedbackPage;