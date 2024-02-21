export default function Counter(counter, sec) {
  let coun = counter;
  let interval = 2000;
  let section = sec;
  window.onscroll = function () {
    // top of the section
    let counTop = section.offsetTop;
    //heigt of the setion
    let counOuterHeight = section.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScroll = this.pageYOffset;
    if (windowScroll > counTop + counOuterHeight - windowHeight) {
      coun.forEach((e) => {
        let startValue = 0;
        let endValue = parseInt(e.dataset.val);
        let duration = Math.floor(interval / endValue);
        let counter2 = setInterval(function () {
          startValue += 1;
          e.textContent = startValue;
          if (e.dataset.role === "progressbar") {
            e.style.width = `${startValue}%`;
          }

          if (startValue === endValue) {
            clearInterval(counter2);
          }
        }, duration);
      });
    }
  };
}
