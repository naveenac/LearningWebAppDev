var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
        
        if ($(".comment-inputtwo input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-inputtwo input").val());
            $new_comment.hide();
            $(".commentstwo").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-inputtwo input").val("");
        }
        
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    
    });
   
    $(".comment-inputtwo button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-inputtwo input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    
    });

        
};

    

$(document).ready(main);
