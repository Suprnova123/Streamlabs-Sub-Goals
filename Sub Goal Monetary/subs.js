async function apiCall(target) {
  const response = await fetch('https://decapi.me/twitch/subcount/purple_foundation');
  const json = await response.json();
  $('#value').text(parseInt(json, 10));
  return json;
}

function setWidth(current, goal) {
  var curr = (parseInt(current, 10) * 2.5);
  var target = parseInt(goal, 10);
  $('#value').text(curr + '/' + parseInt(target, 10))
  var width = ((curr / target) * 100);
  if (width >= 100){
    width = 100 + '%';
  }
  else {
    width = width + '%';
  }
  $('#progress').width(width);
}

document.addEventListener('goalLoad', function(obj) {
	apiCall(obj.detail.amount.target).then(value => setWidth($('#value').text(), obj.detail.amount.target))
});

document.addEventListener('goalEvent', function(obj) {
  $('#value').text(parseInt(obj.detail.amount.current, 10) * 2.5 + '/' + obj.detail.amount.target);
  setWidth(obj.detail.amount.current, obj.detail.amount.target);
});
  