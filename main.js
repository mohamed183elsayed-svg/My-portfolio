// استخدام (const) بدلاً من (var) عشان نعرف المتصفح إن دي دالة ثابتة
// استخدام السهم (=>) بدلاً من كلمة function التقليدية
const showContact = () => {
    
    // استخدام (const) للمتغيرات اللي مش هتتغير قيمتها
    const contactDiv = document.getElementById("contact-info");
    const btn = document.querySelector(".btn");

    // التحقق المختصر (Ternary Operator) - ده سطر واحد بيعمل شغل 5 سطور!
    const isHidden = contactDiv.style.display === "none";

    if (isHidden) {
        contactDiv.style.display = "block";
        btn.innerText = "إخفاء التفاصيل 🔼";
        btn.style.background = "linear-gradient(to right, #ff416c, #ff4b2b)";
    } else {
        contactDiv.style.display = "none";
        btn.innerText = "تواصل معي";
        btn.style.background = "linear-gradient(to right, #00f260, #0575e6)";
    }
};