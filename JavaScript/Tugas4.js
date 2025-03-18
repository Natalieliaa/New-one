function buatPilihan(button) {
    var nama = document.getElementById("nama").value.trim();
    var jumlah = parseInt(document.getElementById("jumlahPilihan").value);
    var container = document.getElementById("pilihanContainer");

    if (nama === "" || isNaN(jumlah) || jumlah < 1) {
        alert("Masukkan Nama dan jumlah pilihan yang valid.");
        return;
    }

    document.getElementById("nama").disabled = true;
    document.getElementById("jumlahPilihan").disabled = true;
    button.style.display = "none";

    container.innerHTML = "<h3>Masukkan Pilihan Anda:</h3>";
    for (let i = 1; i <= jumlah; i++) {
        container.innerHTML += `
            <label for="pilihan${i}">Pilihan ${i}:</label>
            <input type="text" id="pilihan${i}" placeholder="Pilihan ${i}" required>
        `;
    }
    container.innerHTML += `<button onclick="tampilkanPilihan(this)" style="margin-top: 20px;">OK</button>`;
}

function tampilkanPilihan(button) {
    var jumlah = parseInt(document.getElementById("jumlahPilihan").value);
    var pilihan = [];
    var dropdownOptions = `<option value="">-- Pilih --</option>`;

    for (var i = 1; i <= jumlah; i++) {
        var inputElement = document.getElementById(`pilihan${i}`);
        var nilai = inputElement.value.trim();
        
        if (nilai === "") {
            alert("Isi semua pilihan terlebih dahulu.");
            return;
        }

        inputElement.disabled = true;
        pilihan.push(nilai);
        dropdownOptions += `<option value="${nilai}">${nilai}</option>`;
    }

    button.style.display = "none";

    var container = document.getElementById("hasilContainer");
    container.innerHTML = `<h2 style="color: blue; margin-top: 20px;">Hello, ${document.getElementById("nama").value}!</h2>
                           <p>Pilih salah satu:</p>`;

    // Menampilkan dalam bentuk radio button
    for (var i = 0; i < pilihan.length; i++) {
        container.innerHTML += `
        <div class="radio-group">
            <label>${pilihan[i]}</label>
            <input type="radio" name="pilihan" value="${pilihan[i]}">
        </div>`;
    }

    // Menampilkan dalam bentuk dropdown
    container.innerHTML += `<p>Atau pilih dari dropdown:</p>
                            <select id="dropdownPilihan">${dropdownOptions}</select>`;

    container.innerHTML += `<button style="background-color: orange; margin-top: 20px;" onclick="tampilkanHasil()">Submit</button>`;
}

function tampilkanHasil() {
    var nama = document.getElementById("nama").value;
    var jumlah = parseInt(document.getElementById("jumlahPilihan").value);
    var pilihanTerpilih = document.querySelector('input[name="pilihan"]:checked');
    var dropdownPilihan = document.getElementById("dropdownPilihan").value;

    var hasil = pilihanTerpilih ? pilihanTerpilih.value : dropdownPilihan;
    
    if (!hasil) {
        alert("Pilih salah satu opsi.");
        return;
    }

    var pilihan = [];
    for (var i = 1; i <= jumlah; i++) {
        pilihan.push(document.getElementById(`pilihan${i}`).value);
    }

    var hasilContainer = document.getElementById("hasilContainer");
    hasilContainer.innerHTML = `<h2 style="color: green; margin-top: 20px;">Hallo, nama saya ${nama}.</h2>
                                <p>Saya mempunyai sejumlah ${jumlah} pilihan yaitu ${pilihan.join(", ")}.</p>
                                <p>Dan saya memilih <strong>${hasil}</strong>.</p>`;
}
