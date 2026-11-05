const currentLang = navigator.language.substring(0, 2);
console.log(currentLang);
if (currentLang !== "en" || currentLang !== "ru") {
  location.href = "en";
}
