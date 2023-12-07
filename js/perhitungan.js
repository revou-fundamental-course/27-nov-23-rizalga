function Luas() {
  var alas = parseFloat(document.getElementsByName('alas')[0].value);
  var tinggi = parseFloat(document.getElementsByName('tinggi')[0].value);

  if (isNaN(alas) || isNaN(tinggi)) {
    document.getElementById('result').innerText = 'Masukkan nilai yang valid untuk panjang alas dan tinggi.';
  } else {
    var luas = 0.5 * alas * tinggi;

    // Build the result string with the formula and calculated result
    var resultString = 'Hasil : '+'\n';
    resultString += 'L = 1/2 x ' + alas + ' x ' + tinggi + '\n';
    resultString += 'L = 1/2 x ' + alas * tinggi + '\n';
    resultString += 'L = ' + luas;

    // Update the result div with the formatted string
    document.getElementById('result').innerText = resultString;
  }
}

function resetInput() {
  document.getElementsByName('alas')[0].value = '';
  document.getElementsByName('tinggi')[0].value = '';
  document.getElementById('result').innerText = '';
}


function Keliling() {
  var sisia = parseFloat(document.getElementsByName('sisia')[0].value);
  var sisib = parseFloat(document.getElementsByName('sisib')[0].value);
  var sisic = parseFloat(document.getElementsByName('sisic')[0].value);

  if (isNaN(sisia) || isNaN(sisib) || isNaN(sisic)) {
    document.getElementById('result').innerText = 'Masukkan nilai yang valid untuk panjang alas dan tinggi.';
  } else {
    var keliling = sisia + sisib + sisic;

    // Build the result string with the formula and calculated result
    var resultString = 'Hasil : '+'\n';
    resultString += 'K = ' + sisia + ' + ' + sisib + ' + ' + sisic + '\n';
    resultString += 'K = ' + keliling;

    // Update the result div with the formatted string
    document.getElementById('result').innerText = resultString;
  }
}

function resetkeliling() {
  document.getElementsByName('sisia')[0].value = '';
  document.getElementsByName('sisib')[0].value = '';
  document.getElementsByName('sisic')[0].value = '';
  document.getElementById('result').innerText = '';
}