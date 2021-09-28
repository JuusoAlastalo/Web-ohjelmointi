//****************************************************
//* JavaScriptin perusteet tehtävä 2 puhelinluettelo *
//* Tehnyt Juuso Alastalo                            *
//****************************************************
function person(name, num) {
  this.name = name;
  this.num = num;
}

function findContact(contactArray, name) {
  for (person in contactArray) {
    if (person.name == name) {
      return person.num;
    }
  }
  return 0;
}

const puhelinluettelo1 = [];

/*const me = new person("Juuso Alastalo", "0505430809");
puhelinluettelo1.push(me);
puhelinluettelo1.push({name: "Jere", num: "0405244822"});
puhelinluettelo1.push({name: "Joonas", num: "044225486"});
console.log("Nimi: ", puhelinluettelo1[0].name, "\nNumero: ", puhelinluettelo1[0].num);*/

console.log(
  "\n**********************************************************",
  "\n*** Tämä ohjelma lisää yhteystietoja puhelinluetteloon ***",
  "\n***    ja hakee tietoja sieltä numeron perusteella     ***",
  "\n**********************************************************"
);

while (true) {
  //*** VALIKKO ***
  console.log(
    "\n********* VALIKKO ***********",
    "\n1) Syötä uusi yhteistieto",
    "\n2) Hae puhelinnumero luettelosta",
    "\n3) Lopeta ohjelma"
  );

  var input = require("readline-sync");
  var choice = input.question("\nAnna valintasi: ");

  if (choice == 1) {
    //var input = require("readline-sync");
    var name1 = input.question("Anna yhteistiedon nimi: ");
    var num1 = input.question("Anna yhteistiedon numero: ");
    puhelinluettelo1.push({ name: name1, num: num1 });
    // puhelinluettelo1.push(newContact);

    console.log("Yhteistieto lisätty onnistuneesti");

  } else if (choice == 2) {
    var name = input.question("Anna yhteistiedon nimi: ");
    var num = findContact(puhelinluettelo1, name);

    if (num == 0) {
      console.log("Annetulle nimelle ei löytynyt numeroa");
    } else {
      console.log("Henkilön ", name, " numero on: ", num);
    }
  } else if (choice == 3) {
    console.log("Kiitos ohjelman käytöstä!");
    break;
  } else {
    console.log("Tuntematon valinta yritä uudelleen\n");
  }
}
