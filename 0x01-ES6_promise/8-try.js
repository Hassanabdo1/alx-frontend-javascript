export default function divideFunction(numerator, denominator) {
    /* eslint-disable */
    if (denominator !== 0) {
      return (numerator / denominator);
    }
    throw new Error('cannot divide by 0');
  }