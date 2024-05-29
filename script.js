function generateQR() {
    var formData = new FormData(document.getElementById("contactForm"));
    var name = formData.get("name");
    var email = formData.get("email");
    var phone = formData.get("phone");

    var vCardData = `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nEMAIL:${email}\nTEL:${phone}\nEND:VCARD`;

    var qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: vCardData,
        width: 200,
        height: 200
    });
}
