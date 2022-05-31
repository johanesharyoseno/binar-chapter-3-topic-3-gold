function fullName () {
return this.namaDepan + " "+ this.namaBelakang
}
const Biodata = {
    namaDepan : "johanes" ,
    namaBelakang : "seno",
    jenisKelamin : "pria",
    tempatLahir : "jakarta",
    tanggalLahir : "27-12-1991",
    fullName : fullName
};
console.log (Biodata) //munculnya memang ada tanda petik dan koma nya karena console log biodata jadi property (key dan valuenya muncul semua)
console.log (Biodata.fullName()) //karena fullname nya berupa function
console.log (Biodata.namaDepan)
