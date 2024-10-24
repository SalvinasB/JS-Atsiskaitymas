function numeris(skaicius) {
  switch (true) {
    case skaicius > 0:
      console.log("skaicius yra teigiamas.");
      break;
    case skaicius < 0:
      console.log("skaicius yra neigiamas.");
      break;
    default:
      console.log("skaicius yra nulis.");
  }
}

let skaicius = 3;
numeris(skaicius);
