function store() {
    let string = document.getElementById("string").value;

    let vowel = /[aeiou]/gi;

    // Counter Function 
    function count() {
        let result = string.match(vowel);
        let numOfVowels = result.length;
        document.getElementById("display").style.display = "block";
        document.getElementById("display").innerHTML = `Found vowels : ${result}`;
        document.getElementById("vowels").style.display = "block";
        document.getElementById("vowels").innerHTML = `Number of vowels : ${numOfVowels}`;
    }
    let btn = document.getElementsByTagName("button");
    btn[0].addEventListener("click", count);
}