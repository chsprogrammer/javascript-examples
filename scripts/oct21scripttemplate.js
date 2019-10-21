//create a main function
var main = function(){
    //create a variable for a function addCommentFromInputBox
    var addCommentFromInputBox = function(){
        //create a variable for new comments
        var $new_comment;

        //check to see if the input box ISN'T empty
        if ($("comment-input input").val() !== ""){
            //if it isn't, store the stuff in the input box as text inside a new paragraph
            $new_comment=$("<p>").text($(".comment-input input").val());
            //append the new comment to the comments section
            $(".comments").append($new_comment);
        }
    };
    //create an event handler: when comment input button is clicked then call the addCommentFunction
    $(".comment-input button").on("click", function (event){addCommentFromInputBox()
    });
};

//call the main function
$(document).ready(main);
