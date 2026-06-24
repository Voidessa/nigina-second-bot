/* --- NIGINA INFLUENCE LANDING LOGIC --- */

// Paste your Google Apps Script Web App URL here:
const SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwMiMpB82LGAVQ1tRGyTPRzghNRY91g8FVYPsZkVRXTqSbfn7MBmH93sqKmkRlwqnNq/exec";

// Translation Dictionary
const translations = {
  ru: {
    "page-title": "NIGINA INFLUENCE | Получить бонусный урок",
    "hero.badge": "БЕСПЛАТНЫЙ БОНУСНЫЙ УРОК",
    "hero.title": "Как сделать так, чтобы твой контент смотрели миллионы",
    "hero.subtitle": "Эксклюзивный урок от Нигины по созданию актуального контента, который привлекает лояльных клиентов и поднимает охваты в 2026 году.",
    
    "plaque.title": "Что внутри этого урока?",
    "plaque.item1": "Уникальные стратегии развития личного бренда",
    "plaque.item2": "Инструменты создания Reels, которые залетают на миллионы",
    "plaque.item3": "Практические задания для мгновенного внедрения",
    "plaque.item4": "Доставка материала напрямую в ваш Telegram",
    
    "form.q1_label": "Имя и фамилия",
    "form.q2_label": "Ваш телефон (желательно 2 номера)",
    "form.q3_label": "Ваш Instagram username (например, @nigina)",
    "form.q4_label": "Сколько вам лет, чем вы занимались до этого и какие проекты вели?",
    "form.q5_label": "Почему вы хотите получить именно этот бонусный урок от Нигины, что хотите узнать и к какому результату прийти?",
    "form.q6_label": "Проходили ли вы курсы ранее и какие именно?",
    "form.q7_label": "Какой ваш средний ежемесячный доход (за последние 6 месяцев, укажите честно)?",
    "form.income_opt1": "Еще не зарабатываю сама",
    "form.income_opt7": "10,000$ + в месяц",
    "form.q8_label": "Насколько вы готовы обучаться дальше в Академии?",
    "form.readiness_opt1": "Я готова учиться и внести предоплату",
    "form.readiness_opt2": "Хочу учиться, но нужны подробности",
    "form.readiness_opt3": "Пока не готова, хочу узнать информацию",
    
    "form.submit_btn": "ПОЛУЧИТЬ ДОСТУП В TELEGRAM",
    "form.sending": "ОТПРАВКА...",
    
    "form.success_title": "УРА! ДОСТУП ОТКРЫТ",
    "form.success_desc": "{name}, твой урок готов к просмотру! Нажми на кнопку ниже, чтобы перейти в Telegram.",
    "form.bot_btn": "СМОТРЕТЬ УРОК В TELEGRAM",
    
    "footer.rights": "Все права защищены.",
    "footer.mission": "Создаем будущее блогинга.",
    
    "errors.required": "Это поле обязательно для заполнения",
    "errors.phone": "Некорректный номер телефона",
    "errors.instagram": "Введите корректный ник с @ (например, @username)",
    "errors.radio": "Пожалуйста, выберите один из вариантов",
    
    "loader.states": [
      "Подбор эстетики...",
      "Настройка актуальности...",
      "Загрузка вдохновения...",
      "Добро пожаловать."
    ]
  },
  uz: {
    "page-title": "NIGINA INFLUENCE | Bonus darsni olish",
    "hero.badge": "BEPUL BONUS DARS",
    "hero.title": "Kontentingizni millionlar tomosha qilishi uchun nima qilish kerak?",
    "hero.subtitle": "Niginadan sodiq mijozlarni jalb qiladigan va 2026-yilda qamrovlarni oshiradigan aktual kontent yaratish bo'yicha eksklyuziv dars.",
    
    "plaque.title": "Ushbu dars ichida nimalar bor?",
    "plaque.item1": "Shaxsiy brendni rivojlantirishning noyob strategiyalari",
    "plaque.item2": "Millionlab ko'rishlarni yig'adigan Reels yaratish vositalari",
    "plaque.item3": "Tezda natija beruvchi amaliy vazifalar",
    "plaque.item4": "Materialni to'g'ridan-to'g'ri Telegram-ga yetkazib berish",
    
    "form.q1_label": "Ism va familiya",
    "form.q2_label": "Telefon raqamingiz, imkoni bo'lsalar 2 ta",
    "form.q3_label": "Insagram username'ingiz (Misol uchun: @nigina)",
    "form.q4_label": "Yoshingiz nechida, shu paytgacha nima bilan shug'ullangansiz, qanday loyihalar yuritgansiz?",
    "form.q5_label": "Nima uchun aynan Nigina Muminovaning bonus darsini olmoqchisiz, undan nima o'rganmoqchisiz va qanday natijaga chiqmoqchisiz?",
    "form.q6_label": "Avval kurslarda o'qiganmisiz va ular qaysilar?",
    "form.q7_label": "O'rtacha oylik daromadingiz qancha (ohirgi 6 oylikdan kelib chiqib yozing, faqat rostini)?",
    "form.income_opt1": "Hali o'zim pul topmayman",
    "form.income_opt7": "10,000$ + oyiga",
    "form.q8_label": "Mentorlikda qanchalik o'qishga tayyorsiz?",
    "form.readiness_opt1": "Man o'qishga va boshlang'ich to'lovni kiritishga tayyorman",
    "form.readiness_opt2": "O'qimoqchiman, lekin batafsil ma'lumot kerak",
    "form.readiness_opt3": "Hozircha tayyor emasman deb o'ylayman, ma'lumot olmoqchiman",
    
    "form.submit_btn": "TELEGRAM ORQALI KIRISH",
    "form.sending": "YUBORILMOQDA...",
    
    "form.success_title": "URA! RUXSAT BERILDI",
    "form.success_desc": "{name}, darsingiz tayyor! Telegramga o'tish uchun quyidagi tugmani bosing.",
    "form.bot_btn": "DARSNI TELEGRAMDA KO'RISH",
    
    "footer.rights": "Barcha huquqlar himoyalangan.",
    "footer.mission": "Blogerlik kelajagini yaratamiz.",
    
    "errors.required": "Bu maydon to'ldirilishi shart",
    "errors.phone": "Telefon raqami noto'g'ri kiritildi",
    "errors.instagram": "Instagram foydalanuvchi nomini @ bilan kiriting (masalan, @username)",
    "errors.radio": "Iltimos, variantlardan birini tanlang",
    
    "loader.states": [
      "Estetikani tanlash...",
      "Aktuallikni sozlash...",
      "Ilhom yuklanmoqda...",
      "Xush kelibsiz."
    ]
  }
};

// Application State
let currentLang = localStorage.getItem("lang") || "ru";
let currentTheme = localStorage.getItem("theme") || "dark";

// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle");
const langBtn = document.getElementById("lang-btn");
const langDropdown = document.getElementById("lang-dropdown");
const langSwitchContainer = document.querySelector(".lang-switch-container");
const langTextSpan = langBtn.querySelector(".lang-text");
const preloader = document.getElementById("preloader");
const preloaderText = document.getElementById("preloader-text");

// Form elements
const form = document.getElementById("bonus-lead-form");
const nameInput = document.getElementById("input-name");
const phoneInput = document.getElementById("input-phone");
const instagramInput = document.getElementById("input-instagram");
const profileInput = document.getElementById("input-profile");
const motivationInput = document.getElementById("input-motivation");
const coursesInput = document.getElementById("input-courses");
const submitBtn = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");
const btnLoader = document.getElementById("btn-loader");

const formStateInput = document.getElementById("form-state-input");
const formStateSuccess = document.getElementById("form-state-success");
const successDescription = document.getElementById("success-description");

/* --- CORE FUNCTIONS --- */

// Apply active theme
function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}

// Update translations across the page
function applyTranslations(lang) {
  // Update document title
  document.getElementById("page-title").textContent = translations[lang]["page-title"];
  
  // Update lang switch text
  langTextSpan.textContent = lang.toUpperCase();

  // Find all elements with data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  if (lang === "uz") {
    nameInput.placeholder = "Ismingiz";
    phoneInput.placeholder = "+998 (90) 123-45-67";
    instagramInput.placeholder = "@username";
    profileInput.placeholder = "Yozing...";
    motivationInput.placeholder = "Yozing...";
    coursesInput.placeholder = "Yozing...";
  } else {
    nameInput.placeholder = "Имя и фамилия";
    phoneInput.placeholder = "+998 (90) 123-45-67";
    instagramInput.placeholder = "@username";
    profileInput.placeholder = "Введите текст...";
    motivationInput.placeholder = "Введите текст...";
    coursesInput.placeholder = "Введите текст...";
  }
}

// Preloader State Animation
function runPreloader() {
  const states = translations[currentLang]["loader.states"];
  let stateIndex = 0;

  const interval = setInterval(() => {
    stateIndex++;
    if (stateIndex < states.length) {
      preloaderText.textContent = states[stateIndex];
    } else {
      clearInterval(interval);
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  }, 400);
}

// Phone Number Formatter
function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const size = phoneNumber.length;
  
  if (phoneNumber.startsWith("998") || size > 9) {
    let formatted = "+";
    if (size > 0) formatted += phoneNumber.slice(0, 3);
    if (size > 3) formatted += " (" + phoneNumber.slice(3, 5);
    if (size > 5) formatted += ") " + phoneNumber.slice(5, 8);
    if (size > 8) formatted += "-" + phoneNumber.slice(8, 10);
    if (size > 10) formatted += "-" + phoneNumber.slice(10, 12);
    // Allow extra characters/digits (for additional numbers, like "imkoni bo'lsa 2 ta")
    if (size > 12) formatted += " / " + phoneNumber.slice(12, 22);
    return formatted;
  }
  
  return value;
}

phoneInput.addEventListener("input", (e) => {
  const cursorPosition = e.target.selectionStart;
  const originalLength = e.target.value.length;
  
  const formattedVal = formatPhoneNumber(e.target.value);
  e.target.value = formattedVal;
  
  const newLength = formattedVal.length;
  const diff = newLength - originalLength;
  if (diff !== 0) {
    e.target.setSelectionRange(cursorPosition + diff, cursorPosition + diff);
  }
});

instagramInput.addEventListener("blur", (e) => {
  let val = e.target.value.trim();
  if (val && !val.startsWith("@")) {
    e.target.value = "@" + val;
  }
});

/* --- VALIDATION --- */

function showError(inputEl, errorKey) {
  const group = inputEl.closest(".form-group");
  const errorEl = group.querySelector(".error-msg");
  group.classList.add("invalid");
  errorEl.textContent = translations[currentLang][errorKey];
}

function clearError(inputEl) {
  const group = inputEl.closest(".form-group");
  group.classList.remove("invalid");
}

function validateForm() {
  let isValid = true;

  // Q1: Name
  if (!nameInput.value.trim()) {
    showError(nameInput, "errors.required");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Q2: Phone
  const rawPhone = phoneInput.value.replace(/[^\d]/g, "");
  if (!phoneInput.value.trim()) {
    showError(phoneInput, "errors.required");
    isValid = false;
  } else if (rawPhone.length < 9) {
    showError(phoneInput, "errors.phone");
    isValid = false;
  } else {
    clearError(phoneInput);
  }

  // Q3: Instagram
  const insta = instagramInput.value.trim();
  if (!insta) {
    showError(instagramInput, "errors.required");
    isValid = false;
  } else if (insta === "@" || insta.length < 2) {
    showError(instagramInput, "errors.instagram");
    isValid = false;
  } else {
    clearError(instagramInput);
  }

  // Q4: Profile
  if (!profileInput.value.trim()) {
    showError(profileInput, "errors.required");
    isValid = false;
  } else {
    clearError(profileInput);
  }

  // Q5: Motivation
  if (!motivationInput.value.trim()) {
    showError(motivationInput, "errors.required");
    isValid = false;
  } else {
    clearError(motivationInput);
  }

  // Q6: Previous Courses
  if (!coursesInput.value.trim()) {
    showError(coursesInput, "errors.required");
    isValid = false;
  } else {
    clearError(coursesInput);
  }

  // Q7: Income Radio Selection
  const incomeChecked = form.querySelector('input[name="income"]:checked');
  const incomeRadioGroup = form.querySelector('input[name="income"]');
  if (!incomeChecked) {
    showError(incomeRadioGroup, "errors.radio");
    isValid = false;
  } else {
    clearError(incomeRadioGroup);
  }

  // Q8: Readiness Radio Selection
  const readinessChecked = form.querySelector('input[name="readiness"]:checked');
  const readinessRadioGroup = form.querySelector('input[name="readiness"]');
  if (!readinessChecked) {
    showError(readinessRadioGroup, "errors.radio");
    isValid = false;
  } else {
    clearError(readinessRadioGroup);
  }

  return isValid;
}

// Clear errors instantly on typing/interaction
[nameInput, phoneInput, instagramInput, profileInput, motivationInput, coursesInput].forEach(input => {
  input.addEventListener("input", () => clearError(input));
});

form.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener("change", () => clearError(radio));
});

/* --- EVENT LISTENERS --- */

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
});

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langSwitchContainer.classList.toggle("active");
});

document.addEventListener("click", () => {
  langSwitchContainer.classList.remove("active");
});

document.querySelectorAll(".lang-opt").forEach((opt) => {
  opt.addEventListener("click", (e) => {
    const selectedLang = e.target.getAttribute("data-lang");
    if (selectedLang !== currentLang) {
      currentLang = selectedLang;
      localStorage.setItem("lang", currentLang);
      applyTranslations(currentLang);
    }
    langSwitchContainer.classList.remove("active");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) {
    // Scroll to the first invalid field
    const firstInvalid = form.querySelector(".form-group.invalid");
    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    return;
  }

  submitBtn.disabled = true;
  btnText.textContent = translations[currentLang]["form.sending"];
  btnLoader.classList.remove("hidden");

  const formData = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    instagram: instagramInput.value.trim(),
    profile: profileInput.value.trim(),
    motivation: motivationInput.value.trim(),
    courses: coursesInput.value.trim(),
    income: form.querySelector('input[name="income"]:checked').value,
    readiness: form.querySelector('input[name="readiness"]:checked').value
  };

  // If the Web App URL is configured, push it to Google Sheets
  if (SHEET_SCRIPT_URL && SHEET_SCRIPT_URL !== "YOUR_DEPLOYED_WEB_APP_URL") {
    fetch(SHEET_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify(formData)
    }).catch(err => console.error("Error submitting to Google Sheets:", err));
  }

  setTimeout(() => {
    formStateInput.classList.add("hidden");
    formStateSuccess.classList.remove("hidden");

    const userName = nameInput.value.trim().split(" ")[0]; // Get first name
    const successTemplate = translations[currentLang]["form.success_desc"];
    successDescription.textContent = successTemplate.replace("{name}", userName);

    triggerConfetti();

    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
  }, 1500);
});

function triggerConfetti() {
  if (typeof confetti === "function") {
    const end = Date.now() + 1.5 * 1000;
    const colors = ["#E5BABA", "#FFFFFF", "#d4a3a3"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}

/* --- INIT --- */
applyTheme(currentTheme);
applyTranslations(currentLang);
runPreloader();
