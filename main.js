// 1. دالة لجلب بياناتك من GitHub تلقائياً (Async Function)
const getGitHubStats = async () => {
    try {
        // بنطلب البيانات من موقع جيت هب
        const response = await fetch("https://api.github.com/users/mohamed183elsayed-svg");
        const data = await response.json();

        // 2. تحديث الصورة والاسم في الموقع
        // لاحظ استخدام (``) عشان ندمج المتغيرات
        if (data.name) {
            document.querySelector("h1").innerText = `أهلاً، أنا ${data.name} 👋`;
        }
        
        // وضع صورتك الحقيقية بدل الأيقونة
        const imgDiv = document.querySelector(".profile-img");
        imgDiv.innerHTML = `<img src="${data.avatar_url}" alt="My Avatar" style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid #00f260;">`;

        console.log("تم جلب البيانات بنجاح! 🚀");

    } catch (error) {
        console.log("حدث خطأ:", error);
    }
};

// 3. دالة إظهار وإخفاء التواصل (اللي عملناها قبل كدة)
const showContact = () => {
    const contactDiv = document.getElementById("contact-info");
    const btn = document.querySelector(".btn");

    if (contactDiv.style.display === "none") {
        contactDiv.style.display = "block";
        btn.innerText = "إخفاء التفاصيل 🔼";
        btn.style.background = "linear-gradient(to right, #ff416c, #ff4b2b)";
    } else {
        contactDiv.style.display = "none";
        btn.innerText = "تواصل معي";
        btn.style.background = "linear-gradient(to right, #00f260, #0575e6)";
    }
};

// تشغيل دالة جلب البيانات أول ما الموقع يفتح
getGitHubStats();