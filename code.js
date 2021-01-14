$("#submit").click(() => {
    let input = $("#message").val();
    console.log(input);
    if (input === undefined || input === ""){
        $("#messagecopy").text("");
        $("#error").show();
        setTimeout(function(){$("#error").hide()}, 2000);
    }
    else{
        $("#message").val('');
        $("#messagecopy").text(input);
    }
});