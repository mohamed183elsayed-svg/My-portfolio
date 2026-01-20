function showContact() {
    // يمسك العنصر المخفي
    var contactDiv = document.getElementById("contact-info");
    var btn = document.querySelector(".btn");

    // لو مخفي يظهره، ولو ظاهر يخفيه
    if (contactDiv.style.display === "none") {
        contactDiv.style.display = "block";
        btn.innerText = "إخفاء التفاصيل 🔼";
        btn.style.background = "linear-gradient(to right, #ff416c, #ff4b2b)"; // يحمر الزرار
    } else {
        contactDiv.style.display = "none";
        btn.innerText = "تواصل معي";
        btn.style.background = "linear-gradient(to right, #00f260, #0575e6)"; // يرجع الزرار لأصله
    }
}