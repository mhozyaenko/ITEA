document.addEventListener('DOMContentLoaded', () => {
  let night = new CustomEvent('night', {
    cancelable: true,
    isTrusted: true,
    });
  let stop = new CustomEvent('stop');
  let start = new CustomEvent('start');

  let trafficLight = document.querySelectorAll('.trafficLight');
  let nightModeBtn = document.getElementById('Do');

  function nightTraffic() {
    const nightMode = setInterval(()=> {
      this.classList.toggle('yellow');
    }, 1000);

    this.addEventListener('click', function () {
      clearInterval(nightMode);
      this.classList.remove('yellow');
      this.removeEventListener('night', nightTraffic)
    }, {once: true});
  }

  trafficLight.forEach(item => {
    item.addEventListener('night', nightTraffic);
    item.addEventListener('stop', function () {
      this.classList.add('red');
      this.classList.remove('green');
    });
    item.addEventListener('start', function () {
      this.classList.add('green');
      this.classList.remove('red');
    });
    item.addEventListener('click', function () {
     ((!this.matches('.green') && (!this.matches('.red'))) || (this.matches('.green') && (!this.matches('.red')))) ?
        this.dispatchEvent(stop) : this.dispatchEvent(start);
    })
  });

  trafficLight.forEach(item => {
    item.dispatchEvent(night);
  });

nightModeBtn.addEventListener('click', () => {
  trafficLight.forEach(item => {
    item.removeEventListener('night', nightTraffic);
    item.addEventListener('night', nightTraffic);
    item.dispatchEvent(night);
  });
})
});
