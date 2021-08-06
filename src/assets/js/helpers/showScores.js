import createElement from './createElement.js';

export default (data, scoreList) => {
  console.log(data);
  const { result } = data;
  const scores = result.map(({ user, score }) => [user, score]);
  scores.sort((a, b) => b[1] - a[1]);
  scoreList.textContent = '';

  scores.forEach((score) => {
    const listItem = createElement('li', {}, `${score[0]} : ${score[1]}`);
    scoreList.append(listItem);
  });

  if (scores.length > 10) {
    scoreList.classList.add('scroll');
  }
};
