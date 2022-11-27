let input = document.getElementById("id-input");
var iframe = document.getElementById("quizlet-iframe");
input.addEventListener("input", (event) => {
    iframe.setAttribute("src", `https://quizlet.com/${event.target.value}/learn/embed`);
});
