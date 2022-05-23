(function (window, document) {
  // 모듈화(더럽혀지지 않도록)
  'use strict';
  // 철저히 자바스크립트 언어 사용하겠다

  const $toggles = document.querySelectorAll('.toggle');
  const $toggleBtn = document.getElementById('toggle-btn');

  $toggleBtn.addEventListener('click', function () {
    toggleElements();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024 ) {
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle('on');
    });
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove('on');
    });
  }
})(window, document)