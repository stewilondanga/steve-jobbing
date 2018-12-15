/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

var num=0;
window.setInterval(function(){
  num++;
  var classes=['','out','ready'];
  $('#watch').removeClass();
  $('#watch').addClass(classes[num%3])
  $('#phone').removeClass();
  $('#phone').addClass(classes[(num+2)%3]);
  $('#laptop').removeClass();
  $('#laptop').addClass(classes[(num+1)%3]);
  $('.quote span').removeClass();
  $('.quote span:nth-child('+ (num%3+1) +')').addClass('highlight');
  console.log(num%3+1);
},900)
