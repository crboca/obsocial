(function() {
  $(function() {
    $("#btn-start").click(function() {
      $("iframe[src*='google.com/maps']").scrollprevent({
        printLog: true
      }).start();
      return $("#btn-stop").click(function() {
        return $("iframe[src*='google.com/maps']").scrollprevent().stop();
      });
    });
    return $("#btn-start").trigger("click");
  });

}).call(this);