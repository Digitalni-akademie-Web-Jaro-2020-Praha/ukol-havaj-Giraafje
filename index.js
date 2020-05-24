let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

if (osoba1.uspory + osoba2.uspory >= 100000) {
  console.log("Hurá na dovolenou!")
  if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
    console.log("Obě máte dostatek.")
  }
  else if (osoba1.uspory < 50000) {
    console.log(osoba1.jmeno, "ještě nemá dostatek, chybí", (50000 - osoba1.uspory), ".")
  }
  else if (osoba2.uspory < 50000) {
    console.log(osoba2.jmeno, "ještě nemá dostatek, chybí", (50000 - osoba2.uspory), ".")
  }
}
else {
  console.log("Celkem chybí", (100000 - (osoba1.uspory + osoba2.uspory)), ".")
  if (osoba1.uspory < 50000 && osoba2.uspory < 50000) {
    console.log(osoba1.jmeno, "musí ještě naspořit", (50000 - osoba1.uspory), ".")
    console.log(osoba2.jmeno, "musí ještě naspořit", (50000 - osoba2.uspory), ".")
  }
  else if (osoba1.uspory < 50000) {
    console.log(osoba1.jmeno, "musí ještě naspořit", (50000 - osoba1.uspory), ".")
  }
  else if (osoba2.uspory < 50000) {
    console.log(osoba2.jmeno, "musí ještě naspořit", (50000 - osoba2.uspory), ".")
  }
}
