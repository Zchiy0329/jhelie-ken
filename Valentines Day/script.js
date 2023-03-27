const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

alert('Hi Crush <3');
yesBtn.addEventListener('click', () => {
  question.innerHTML = 'I Love You <3';
  document.body.style.backgroundImage = "url('Thumbnails/cat-inlove.jpg')";
  document.getElementById("q1").style.color = "red";
});

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});

