//exit login dialog
function exitclick()
{
  $(".logindiv").css("display","none");
}

//display login dialog
function loginclick()
{
  $(".logindiv").css("display","block");
}
$(".loginexit").click(exitclick);
$(".login").click(loginclick);
