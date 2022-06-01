$(document).ready(function() {
  $("#javascript").click(function() {
    $("#javascript1").toggle();
  });

  $("#operator").click(function() {
    $("#operator1").toggle();
  });

  $("#variable").click(function() {
    $("#variable1").toggle();
  });
  
  $("#vnc").click(function() {
      $("#vnc1").toggle();
  });

  $("#function").click(function() {
    $("#function1").toggle();
  });

  $("#method").click(function() {
    $("#method1").toggle();
  });

  $("#argument").click(function() {
    $("#argument1").toggle();
  });

  $("#parameter").click(function() {
    $("#parameter1").toggle();
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $("body").toggle(".green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});

