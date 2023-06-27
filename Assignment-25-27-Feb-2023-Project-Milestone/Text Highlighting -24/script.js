let text = document.getElementsByTagName("p")[0];
let array = text.textContent.split(" ");
console.log(array);
for (let i = 0; i < array.length; i++) {
    let word = array[i];


    if (word.length > 8) {
        let span = document.createElement("span");
        span.textContent = word;
        span.classList.add("highlight");
        array[i] = span.outerHTML;

    }
}
text.innerHTML = array.join(' ');

console.log(text);