$(function(){
    $('div[id^="KEY_"]').each(function(){
        var device = $('input#currentDevice').val();
        $(this).on('click', function(){
            postKey('/devices/'+device+'/SEND_ONCE/' + $(this).attr('id'));
        });
    });

})
function postKey(route){
  $.post(route, function(data){
    console.log(data); 
  });
}
