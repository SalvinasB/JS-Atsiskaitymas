function konvertuojam() {
  let eurai = parseFloat(prompt("iveskite euru suma:"));
  let konversija = parseFloat(prompt("iveskite konversijos kursa(pvz 1.5):"));

  let doleriai = eurai * konversija;

  alert(`${eurai} EUR yra lygus ${doleriai.toFixed(2)} USD.`);
}

konvertuojam();
