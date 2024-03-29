function addToChart() {
    let ada = false;
    let id = document.getElementById('input-id-barang').value;
    let qty = document.getElementById('jumlah_keluar').value;
    let cartTable = document.getElementById('cart_table');

    // Cari apakah barang sudah ada di keranjang
    Array.from(cartTable.children).forEach(function(row) {
        if (row.getAttribute('id') === id) {
            ada = true;
            let jml = row.querySelector('.jml-dibeli').innerText;
            row.querySelector('.jml-dibeli').innerText = parseInt(jml) + parseInt(qty);
        }
    });

    // Jika barang belum ada di keranjang, tambahkan ke dalam keranjang
    if (!ada) {
        let no = cartTable.children.length + 1;
        let nama = document.getElementById('input-nm-barang').value;
        let bc = document.getElementById('input-bc-barang').value;
        let hj = document.getElementById('input-hj-barang').value;
        let ss = document.getElementById('data-stok').value;
        
        cartTable.innerHTML += `<tr id='${id}'>
                                    <td>${no}
                                        <input type="hidden" name="barang_id[]" value="${id}">
                                        <input type="hidden" name="jumlah_keluar[]" value="${qty}">
                                        <input type="hidden" name="sisa_stok[]" value="${ss - qty}">
                                    </td>
                                    <td>${bc}</td>
                                    <td>${nama}</td>
                                    <td class="total-cash">${hj}</td>
                                    <td class="jml-dibeli">${qty}</td>
                                    <td><button onclick="hapusStok('1')">Hapus</button></td>
                                </tr>`;
    }
    
    hitungTotal();
    document.getElementById('modal-item').style.display = 'none';
}
