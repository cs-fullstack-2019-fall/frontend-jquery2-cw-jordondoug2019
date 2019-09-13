/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
$(".hello").click(function ()
{
    console.log("click");
    $(".hello").css("background-color","yellow")
});
// !! You Successfully changed all elements as necessary
// console.log($("hello"));

/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
$("h1").mouseover(function ()
{
    $("h1").css("height","20px");
    $("h1").css("width","20px")
});
$("h1").mouseout(function ()
{
    $("h1").css("height","40px");
    $("h1").css("width","900px");
});
// !! you change the element back successfully after mouse out nicely done
// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */

$("p.hello").click(function ()
{
    console.log("click");
    $("p.hello").append(".")
});
// !! you successfully target the singular element rather than all elements with the hello class.