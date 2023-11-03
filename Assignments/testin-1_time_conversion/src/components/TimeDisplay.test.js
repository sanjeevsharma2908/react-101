import React from "react";
import { render } from '@testing-library/react';
import TimeDisplay from "./TimeDisplay";

test('Converts 0 milliseconds to "00:00:00"', ()=>{
    const {getByText} = render(<TimeDisplay ms = {0} />);
    expect(getByText('00:00:00')).toBeTheDocument();
});
test('Converts 1000 milliseconds to "00:00:01"', () => {
    const { getByText } = render(<TimeDisplay milliseconds={1000} />);
    expect(getByText('00:00:01')).toBeInTheDocument();
  });
  
  test('Converts 3661000 milliseconds to "01:01:01"', () => {
    const { getByText } = render(<TimeDisplay milliseconds={3661000} />);
    expect(getByText('01:01:01')).toBeInTheDocument();
  });
  
  test('Converts 3600000 milliseconds to "01:00:00"', () => {
    const { getByText } = render(<TimeDisplay milliseconds={3600000} />);
    expect(getByText('01:00:00')).toBeInTheDocument();
  });
  
  test('Converts 36000000 milliseconds to "10:00:00"', () => {
    const { getByText } = render(<TimeDisplay milliseconds={36000000} />);
    expect(getByText('10:00:00')).toBeInTheDocument();
  });
  
  test('Handles negative input', () => {
    const { getByText } = render(<TimeDisplay milliseconds={-1000} />);
    expect(getByText('Invalid input')).toBeInTheDocument();
  });