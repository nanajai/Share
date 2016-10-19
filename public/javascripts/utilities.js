
function filter(element) {
        var value = $(element).val();
        $("#wallposts > div").each(function() {
            if ($(this).text().search(value) > -1) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
}


function submitpost(){
  //perform validation
  $("#postform").submit();
}
