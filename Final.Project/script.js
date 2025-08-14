const nameInput = document.querySelector("#name-input");
const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const showButton = document.querySelector("#show-button");
const result = document.querySelector("#result");
const body = document.body;

const burjNames = [
  "الحمل", "الثور", "الجوزاء", "السرطان", "الأسد", "العذراء",
  "الميزان", "العقرب", "القوس", "الجدي", "الدلو", "الحوت"
];
const burjSymbols = [
  "♈", "♉", "♊", "♋", "♌", "♍",
  "♎", "♏", "♐", "♑", "♒", "♓"
];
const burjColors = [
  "#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF",
  "#BDB2FF", "#FFC6FF", "#FFFFFC", "#D0F4DE", "#FFCBC1", "#B5EAD7"
];
const burjsigns= [
  "شجاع,صريح,متحمس",
  "صبور,عملي,عنيد",
  "ذكي,فضولي,اجتماعي",
  "عاطفي,مخلص,خجول",
  "قائد,واثق,كريم",
  "منظم,ناقد,عملي",
  "متوازن,اجتماعي,دبلوماسي",
  "غامض,عاطفي,قوي",
  "مغامر,صريح,مرح",
  "عملي,طموح,جدي",
  "مبدع,مستقل,إنساني",
  "رومانسي,رحيم,حالم"
];

function getburjIndex(day, month) {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 0;
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 1;
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 2;
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 3;
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 4;
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 5;
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 6;
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 7;
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 8;
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 9;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 10;
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 11;
  return -1;
}

showButton.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);

  if (
    name.length < 3 ||
    isNaN(day) ||
    isNaN(month) ||
    day < 1 ||
    month < 1 ||
    month > 12
  ) {
    result.textContent = "تاريخ الميلاد غير صحيح.";
    body.style.backgroundColor = "#f8d7da";
    return;
  }

  let maxDays;
  if (month === 2) {
    maxDays = 29;
  } else if ([4, 6, 9, 11].includes(month)) {
    maxDays = 30;
  } else {
    maxDays = 31;
  }

  if (day > maxDays) {
    result.textContent = "تاريخ الميلاد غير صحيح.";
    body.style.backgroundColor = "#f8d7da";
    return;
  }

  const burjIndex = getburjIndex(day, month);

  if (burjIndex !== -1) {
    body.style.backgroundColor = burjColors[burjIndex];
    result.innerHTML = `
      : برجك هو<br>
      ${burjNames[burjIndex]} ${burjSymbols[burjIndex]}<br>
      : صفات برجك<br>
      ${burjsigns[burjIndex]}
    `;
  } else {
    result.textContent = "تاريخ الميلاد غير صحيح.";
    body.style.backgroundColor = "#f8d7da";
  }
});
