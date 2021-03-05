async function apiCall() {
    const response = await fetch('https://decapi.me/twitch/subcount/<streamer>');
    const json = await response.json();
    $('#goal-current').text(json);
  }
  
  document.addEventListener('goalLoad', function(obj) {
      apiCall().then(() => $('#goal-total').text(obj.detail.amount.target))
  });
  
  document.addEventListener('goalEvent', function(obj) {
    $('#goal-total').text(obj.detail.amount.target);
    $('#goal-current').text(obj.detail.amount.current);
  });