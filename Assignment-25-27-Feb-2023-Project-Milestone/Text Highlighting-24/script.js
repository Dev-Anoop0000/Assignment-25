window.onload = function() {
    const check = word => {
        if (word.length > 8) {
            return '<span class="hightlight">' + word + '</span>'
        } else {
            return word
        }
        console.log(word);
    }

    const sample = document.querySelector("p");
    sample.innerHTML = sample.innerText.trim().split(' ').map(check).join(' ');
}