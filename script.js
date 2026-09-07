document.addEventListener('DOMContentLoaded', function () {

  var tabs = document.querySelectorAll('.tab');
  var tabPanels = {
    home: document.getElementById('tab-home'),
    score: document.getElementById('tab-score'),
    account: document.getElementById('tab-account'),
  };

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      Object.keys(tabPanels).forEach(function (key) {
        tabPanels[key].classList.add('hidden');
      });
      tabPanels[tab.dataset.tab].classList.remove('hidden');
    });
  });

  var paymentCardBtn = document.getElementById('payment-card-btn');
  if (paymentCardBtn) {
    paymentCardBtn.addEventListener('click', function () {
      var body = paymentCardBtn.querySelector('.clarity-card-body');
      body.textContent = 'Autopay is on. You can change your card or pause autopay in Account.';
    });
  }

  var goToCancel = document.getElementById('go-to-cancel');
  if (goToCancel) {
    goToCancel.addEventListener('click', function () {
      var tabHome = document.querySelector('.tab[data-tab="home"]');
      if (tabHome) tabHome.click();
      var cancelPhone = document.querySelectorAll('.phone-block')[1];
      if (cancelPhone) {
        cancelPhone.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cancelPhone.style.transition = 'outline 0.2s ease';
        cancelPhone.style.outline = '2px solid #17C964';
        cancelPhone.style.outlineOffset = '6px';
        setTimeout(function () { cancelPhone.style.outline = 'none'; }, 900);
      }
    });
  }

  var step1 = document.getElementById('cancel-step-1');
  var step2 = document.getElementById('cancel-step-2');
  var step3 = document.getElementById('cancel-step-3');

  function showStep(step) {
    [step1, step2, step3].forEach(function (s) { s.classList.add('hidden'); });
    step.classList.remove('hidden');
  }

  var continueCancelBtn = document.getElementById('continue-cancel-btn');
  if (continueCancelBtn) continueCancelBtn.addEventListener('click', function () { showStep(step2); });

  var keepAccountBtn = document.getElementById('keep-account-btn');
  if (keepAccountBtn) {
    keepAccountBtn.addEventListener('click', function () {
      keepAccountBtn.textContent = 'Good call, staying active';
      setTimeout(function () { keepAccountBtn.textContent = 'Keep my account'; }, 1600);
    });
  }

  var backToStep1Btn = document.getElementById('back-to-step1-btn');
  if (backToStep1Btn) backToStep1Btn.addEventListener('click', function () { showStep(step1); });

  var confirmCancelBtn = document.getElementById('confirm-cancel-btn');
  if (confirmCancelBtn) confirmCancelBtn.addEventListener('click', function () { showStep(step3); });

  var restartBtn = document.getElementById('restart-btn');
  if (restartBtn) restartBtn.addEventListener('click', function () { showStep(step1); });

  var goalBefore = document.getElementById('goal-before');
  var goalAfter = document.getElementById('goal-after');

  function fireConfetti() {
    var wrap = document.getElementById('confetti-wrap');
    if (!wrap) return;
    wrap.innerHTML = '';
    var colors = ['#17C964', '#0E8F47', '#E5484D', '#131615'];
    for (var i = 0; i < 24; i++) {
      var piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = (Math.random() * 0.3) + 's';
      wrap.appendChild(piece);
    }
  }

  var setGoalBtn = document.getElementById('set-goal-btn');
  if (setGoalBtn) {
    setGoalBtn.addEventListener('click', function () {
      goalBefore.classList.add('hidden');
      goalAfter.classList.remove('hidden');
      fireConfetti();
    });
  }

  var goalResetBtn = document.getElementById('goal-reset-btn');
  if (goalResetBtn) {
    goalResetBtn.addEventListener('click', function () {
      goalAfter.classList.add('hidden');
      goalBefore.classList.remove('hidden');
    });
  }

  var badgeToast = document.getElementById('badge-toast');
  var badgeToastText = document.getElementById('badge-toast-text');
  var badgeMessages = {
    0: 'First payment, earned on day one.',
    1: 'Three months of on-time payments in a row.',
    2: 'Your score climbed 25 points since you started.',
    3: 'Locked. Keep your streak going 5 more months to unlock.',
  };

  function showBadgeToast(text) {
    if (!badgeToast) return;
    badgeToastText.textContent = text;
    badgeToast.classList.remove('hidden');
    clearTimeout(showBadgeToast._t);
    showBadgeToast._t = setTimeout(function () {
      badgeToast.classList.add('hidden');
    }, 2200);
  }

  document.querySelectorAll('.badge').forEach(function (badge) {
    badge.addEventListener('click', function () {
      showBadgeToast(badgeMessages[badge.dataset.badge] || '');
    });
  });

  var streakCardBtn = document.getElementById('streak-card-btn');
  if (streakCardBtn) {
    streakCardBtn.addEventListener('click', function () {
      showBadgeToast('4 more on-time months to unlock the 12-month badge.');
    });
  }

});
