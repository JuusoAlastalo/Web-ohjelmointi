//********************************
// JavaScriptin perusteet tehtävä1
// Tehnyt Juuso Alastalo
//********************************

//Tämä funktio testaa onko userInput palindromi
// Verrataan ekaa ja vikaa kirjainta toisiinsa ja jos samat siirrytään
// vertaamaan seuraavia. Jos kirjaimet eivät ole samat palautetaan false

function checkPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i];
    let y = str[j - i];
    if (x != y) {
      return false;
    }
  }

  return true;
}

// Tämä funktio tulostaa funktion check_palindromin
// tuloksen mukaisen vastauksen.

function isPalindrome(str) {
  let ans = checkPalindrome(str);

  if (ans == true) {
    console.log("Antamasi userInput on palindromi");
  } else {
    console.log("Antamasi userInput ei ole palindromi");
  }
}

// ***Varsinainen ohjelma alkaa tästä***

console.log(
  "`\n***Tämä ohjelma testaa onko userInput palindromi***\n",
  "***Syöttämällä sanaksi 0 ohjelma loppuu***"
);

while (true) {
  var input = require("readline-sync");
  var userInput = input.question("\nAnna userInput: ");

  if (userInput == 0) {
    console.log("Kiitos ohjelman käytöstä");
    break;
  } else {
    isPalindrome(userInput);
  }
}
