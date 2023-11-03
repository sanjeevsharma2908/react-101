import React from 'react';
import { timeToHHMMSS } from './timeUtils';

const TimeDisplay = ({ms}) => {
    const timeStr = timeToHHMMSS(ms);
  return (
    <div>{timeStr}</div>
  )
}

export default TimeDisplay