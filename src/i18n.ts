import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: {
        title: 'Login',
        name: 'Enter Your Name',
        button: 'Login',
        language: 'Language',
      },
      dashboard: {
        title: 'Weather Dashboard',
        weather: 'rasht',
        selectLabel:"Search Your Location",
        temperature: 'Temperature',
        average: "Average Monthly Temperature",
        weeks: "2 weeks Forecast",
        feelsLike: 'Feels Like',
        highLow: 'High: {{high}}°C Low: {{low}}°C',
        settings: 'Settings',
        logout: 'Exit',
      },
      cites: {
        rasht: "Rasht",
        tehran: "Tehran",
        esfahan: "Esfahan",
        shiraz: "Shiraz",
        berlin: "Berlin",
        london: "London",
        liverpool: "Liverpool",
        paris: "Paris",
        "san Francisco": "San Francisco",
       " new York": "New York",
        "los Angeles":  "Los Angeles",
      },
      month: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec",

      },
      settings: {
        fa: "FA",
        en: "EN",
        theme: 'Mode',
        lightMode: 'Light',
        darkMode: 'Dark',
        language: 'Language',
        apply: 'Apply',
      },
    },
  },
  fa: {
    translation: {
      login: {
        title: 'ورود',
        name: 'نام خود را وارد کنید',
        button: 'ورود',
        language: 'زبان',
      },
      dashboard: {
        title: 'داشبورد آب و هوا',
        weather: 'رشت',
        selectLabel:"مکان مورد نظر را جستجو کنید",
        temperature: 'دما',
        average: "میانگین دمای ماهانه",
        weeks: "پیش بینی 2 هفته",
        feelsLike: 'حس می‌شود مانند',
        highLow: 'بیشینه: {{high}}°C کمینه: {{low}}°C',
        settings: 'تنظیمات',
        logout: 'خروج',
      },
      cites: {
        rasht: "رشت",
        tehran: "تهران",
        esfahan: "اصفهان",
        shiraz: "شیراز",
        berlin: "برلین",
        london: "لندن",
        liverpool: "لیورپول",
        paris: "پاریس",
        "san Francisco": "سن فرانسیسکو",
        " new York": "نیویورک",
         "los Angeles":  "لس آنجلس",
      },
      month: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec",

      },
      settings: {
        fa: "فارسی",
        en: "انگلیسی",
        theme: 'تم',
        lightMode: ' روشن',
        darkMode: ' تاریک',
        language: 'زبان',
       
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;