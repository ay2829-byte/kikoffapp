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

  var setGoalBtn = document.getElementById('set-goal-btn');
  if (setGoalBtn) {
    setGoalBtn.addEventListener('click', function () {
      goalBefore.classList.add('hidden');
      goalAfter.classList.remove('hidden');
    });
  }

  var goalResetBtn = document.getElementById('goal-reset-btn');
  if (goalResetBtn) {
    goalResetBtn.addEventListener('click', function () {
      goalAfter.classList.add('hidden');
      goalBefore.classList.remove('hidden');
    });
  }

});
