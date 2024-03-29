function variabel() {
    const nama = "arif"
    let hobby = "otomotif"
    var pendidikan = "S1"
    var variabelDiv = document.querySelector('.variabel');
    variabelDiv.innerHTML = `
    <p>Nama: ${nama}, ini adalah sebuah const</p>
    <p>Hobby: ${hobby}, ini adalah sebuah let</p>
    <p>Pendidikan: ${pendidikan}, ini adalah sebuah var</p>
`;
}

function tipeData(){
    var angka = 10;
    var teks = "Halo";
    var benar = true;
    var arr = [1, 2, 3];
    var obj = { nama: "John", umur: 30 };
    
    console.log(`ini angka ${angka}, ini teks ${teks}, ini bolean ${benar}, 
                 ini array ${arr}, ini object ${obj}`);
}

function btnDate(){
    document.getElementById('demo').innerHTML = Date();
}

function pesan(){
    alert('ini sebuah alert')
}
 
function cnv(){
    // string conversion
    let isAdmin = true
    let age = 39
    console.log(typeof isAdmin, `ini console numtype`)
    let conIsAdmin = String(isAdmin)
    console.log(typeof conIsAdmin, `ini console numtype`)
    let conAge = String(age)
    console.log(typeof conAge, `ini console numtype`)

    //number conversion
    let first = "10"
    let second = "2"
    let third = "200a"

    let conFirst = Number(first);
    let conSecond = Number(second);
    let conThird = Number(third);
    console.log(conFirst)
    console.log(conSecond)
    console.log(conThird) // Nan Karena terdapat gabungan angka dan huruf

}

function hitung() {
    // Mendapatkan nilai dari input
    var operand1 = parseFloat(document.getElementById('operand1').value);
    var operand2 = parseFloat(document.getElementById('operand2').value);
    var operator = document.getElementById('operator').value;
    
    // Variabel untuk menyimpan hasil perhitungan
    var hasil;

    // Melakukan operasi aritmatika sesuai dengan operator yang dipilih
    switch (operator) {
        case 'tambah':
            hasil = operand1 + operand2;
            break;
        case 'kurang':
            hasil = operand1 - operand2;
            break;
        case 'kali':
            hasil = operand1 * operand2;
            break;
        case 'bagi':
            hasil = operand1 / operand2;
            break;
        default:
            hasil = 'Operasi tidak valid';
    }

    // Menampilkan hasil perhitungan
    document.getElementById('hasil').innerText = 'Hasil: ' + hasil;
}