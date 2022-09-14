function esimerkkiTaulukko() {
    var autot = [];
    var caarat = ["Tesla", "VW 13", "Hyundai ionic"];
    autot.push("Jeep");
    document.write("Caara[1] - " + caarat[1] + "/ autot[0] - " +autot[0] + "<br>");
    document.write("Caarat = " + caarat + "<br>");
    document.write("Autot = " + autot + "<br>");
    var siirrettava = caarat.pop();
    document.write("Siirrettävä = " + siirrettava);
    document.write("<br>Caarat taulukko = " + caarat);
    autot.unshift(siirrettava);
    document.write("<br>Autot taulukko = " + autot);
    // autot.push () = caarat.unshift doesn't work
    document.write("<br>Caarat taulukko = " + caarat + "<br>Autot taulukko = " + autot);
}
