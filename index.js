var strings = ["Loading...", "Almost there...", "Not working? Try a different browser.", "Not working? Try a different device.", "Not working? Try a different browser.", "Just a little longer...", "SCRIMBLO is just around the corner..."];
var span = document.getElementById("string");

function changeMessage() { // recursively call to change the message, will be interrupted when the page loads (changes)
    setTimeout(function() {
        option = Math.floor(Math.random() * strings.length);
        span.textContent = strings[option];
        changeMessage();
    }, 5000)
}
changeMessage();
const ONE_DAY_MS = 1000 * 60 * 60 * 24;
let today = new Date();
let day_one = new Date(2024, 2, 21);

function copyPuzzle() {
    var puzzle_number = -(Math.round((day_one.getTime() - today.getTime()) / ONE_DAY_MS)).toFixed(0);
    var line1 = ["🟥", "🟥", "⬇️", "🟨", "⬆️", "🟨", "🟥", "⬅️", "🟥", "➡️", "🟨", "🟥", "🟥", "⬇️", "🟨", "⬆️", "🟨", "🟥", "⬅️", "🟥", "➡️", "🟨"];
    var line2 = ["🟥", "⬇️", "🟨", "🟩", "🟨", "⬆️", "⬅️", "🟨", "🟨", "🟨", "🟥", "🟨", "🟨", "🟨", "🟨", "🟨", "⬆️", "⬅️", "🟨", "🟩", "🟨", "➡️"]
    var line3 = ["🟨", "🟨", "🟨", "⬇️", "🟨", "🟩", "🟨", "🟩", "⬅️", "🟩", "⬆️", "🟩", "🟨", "🟩", "🟩", "🟩", "🟥", "🟨", "🟩", "🟩", "🟨", "🟩"]
    var line4 = "🟩🟩🟩🟩";
    var option1 = Math.floor(Math.random() * line1.length);
    var option2 = Math.floor(Math.random() * line2.length);
    var option3 = Math.floor(Math.random() * line3.length);
    var option4 = Math.floor(Math.random() * line3.length);
    var option1b = Math.floor(Math.random() * line1.length);
    var option2b = Math.floor(Math.random() * line2.length);
    var option3b = Math.floor(Math.random() * line3.length);
    var option4b = Math.floor(Math.random() * line3.length);
    var option1c = Math.floor(Math.random() * line1.length);
    var option2c = Math.floor(Math.random() * line2.length);
    var option3c = Math.floor(Math.random() * line3.length);
    var option4c = Math.floor(Math.random() * line3.length);
    var puzzle = `Scrimblo\nPuzzle #${puzzle_number}\n${line1[option1]}${line1[option2]}${line1[option3]}${line1[option4]}\n${line2[option1b]}${line2[option2b]}${line2[option3b]}${line2[option4b]}\n${line3[option1c]}${line3[option2c]}${line3[option3c]}${line3[option4c]}\n${line4}\n`
    navigator.clipboard.writeText(puzzle);
}
var title_div = document.getElementById("header");
title_div.addEventListener('click', copyPuzzle);