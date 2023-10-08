$(document).ready(function () {
    $(".option").click(function () {
        // Disable all options
        $(".option").off("click");

        // Check if the clicked option is correct (e.g., Paris)
        if ($(this).text() === "Paris") {
            $(".feedback").text("Correct! Paris is the capital of France.");
            $(this).addClass("correct");
        } else {
            $(".feedback").text("Incorrect. The correct answer is Paris.");
            $(this).addClass("incorrect");
        }
    });
});
