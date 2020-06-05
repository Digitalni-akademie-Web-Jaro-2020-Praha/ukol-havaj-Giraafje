let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

let osoba3 = {
  jmeno: 'Lenka',
  uspory: 20000
};
let osoba4 = {
  jmeno: 'Petra',
  uspory: 40000
};

const canWeGo = (prvniOsoba, druhaOsoba) => {
  if (prvniOsoba.uspory + druhaOsoba.uspory >= 100000) {
    console.log("Hurá na dovolenou!")
    if (prvniOsoba.uspory >= 50000 && druhaOsoba.uspory >= 50000) {
      console.log("Obě máte dostatek.")
    }
    else if (prvniOsoba.uspory < 50000) {
      console.log(prvniOsoba.jmeno, "ještě nemá dostatek, chybí", (50000 - prvniOsoba.uspory), ".")
    }
    else if (druhaOsoba.uspory < 50000) {
      console.log(druhaOsoba.jmeno, "ještě nemá dostatek, chybí", (50000 - druhaOsoba.uspory), ".")
    }
  }
  else {
    console.log("Celkem chybí", (100000 - (prvniOsoba.uspory + druhaOsoba.uspory)), ".")
    if (prvniOsoba.uspory < 50000 && druhaOsoba.uspory < 50000) {
      console.log(prvniOsoba.jmeno, "musí ještě naspořit", (50000 - prvniOsoba.uspory), ".")
      console.log(druhaOsoba.jmeno, "musí ještě naspořit", (50000 - druhaOsoba.uspory), ".")
    }
    else if (prvniOsoba.uspory < 50000) {
      console.log(prvniOsoba.jmeno, "musí ještě naspořit", (50000 - prvniOsoba.uspory), ".")
    }
    else if (druhaOsoba.uspory < 50000) {
      console.log(druhaOsoba.jmeno, "musí ještě naspořit", (50000 - druhaOsoba.uspory), ".")
    }
  }
}

canWeGo(osoba1, osoba2)
canWeGo(osoba1, osoba3)
canWeGo(osoba2, osoba4)