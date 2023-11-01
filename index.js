// event mouse
document.getElementById('btn').addEventListener("mouseenter", function () {
    alert("gak suka gelay")
}) 


// event keyboard
document.getElementById('key').addEventListener("keypress", function (event) {
    document.getElementById('key_2').innerText = "udah buat lu ajah"
})


// event change = terjadi ketika sesuatu berubah
document.getElementById('warna').addEventListener("change", function () {
    document.getElementById('key_2').style.color = document.getElementById('kuning').value
})