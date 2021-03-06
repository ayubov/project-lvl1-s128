import playGame from '..';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return true;
  }
  const iter = (number, divisor) => {
    if (divisor > num / 2) {
      return true;
    }
    return number % divisor === 0 ? false : iter(number, divisor + 1);
  };
  return iter(num, 2);
};

const task = 'Is number prime?';

export default () => {
  const gameData = () => {
    const number = getRandomNumber(100);
    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  return playGame(gameData, task);
};
