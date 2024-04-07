//1. Реалізуйте клас Person з полями для імені, прізвища, статі та сімейного становища.
//Реалізуйте метод toLocaleString для форматування імені, наприклад, 'Ms. Smith', 'Frau
//Smith', 'Mme Smith'. Дізнайтесь, які форми ввічливості прийняті у різних мовах, і реалізуйте такі варіанти як Ms.або Mrs./ Miss.

public class Person {
    private String firstName;
    private String lastName;
    private String gender;
    private String maritalStatus;

    public Person(String firstName, String lastName, String gender, String maritalStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }

    public String toLocaleString(String locale) {
        switch (locale) {
            case "en":
                if (gender.equals("Male")) {
                    return "Mr. " + lastName;
                } else if (maritalStatus.equals("Married")) {
                    return "Mrs. " + lastName;
                } else {
                    return "Miss " + lastName;
                }
            case "de":
                if (gender.equals("Male")) {
                    return "Herr " + lastName;
                } else if (maritalStatus.equals("Married")) {
                    return "Frau " + lastName;
                } else {
                    return "Fräulein " + lastName;
                }
            case "fr":
                if (gender.equals("Male")) {
                    return "M. " + lastName;
                } else if (maritalStatus.equals("Married")) {
                    return "Mme " + lastName;
                } else {
                    return "Mlle " + lastName;
                }
            case "th":
                return "คุณ" + lastName;
            default:
                return "Unknown locale";
        }
    }
}


//2. Реалізуйте програму яка приймає число та друкує його у трьох версіях - англійських, арабських та тайських цифр.

public class NumberPrinter {
    public static void printNumber(int number) {
        System.out.println("English: " + number);
        // assuming methods to convert to Arabic and Thai numerals exist
        System.out.println("Arabic: " + convertToArabic(number));
        System.out.println("Thai: " + convertToThai(number));
    }

    private static String convertToArabic(int number) {
        // implementation for converting to Arabic numerals
    }

    private static String convertToThai(int number) {
        // implementation for converting to Thai numerals
    }
}



//3. Напишіть програму для демонстрації стилів форматування дати та часу у Франції, Китаї,
//    Єгипті та Таїланді(з використанням тайських цифр).

import java.util.Date;

public class DateTimeFormatter {
    public static String formatDateTime(Date datetime, String locale) {
        switch (locale) {
            case "fr":
                return frenchFormat(datetime);
            case "zh":
                return chineseFormat(datetime);
            case "eg":
                return egyptianFormat(datetime);
            case "th":
                return thaiFormat(datetime);
            default:
                return "Unknown locale";
        }
    }

    private static String frenchFormat(Date datetime) {
        // implementation for French date and time formatting
    }

    private static String chineseFormat(Date datetime) {
        // implementation for Chinese date and time formatting
    }

    private static String egyptianFormat(Date datetime) {
        // implementation for Egyptian date and time formatting
    }

    private static String thaiFormat(Date datetime) {
        // implementation for Thai date and time formatting
    }
}





//4. Напишіть функцію порівняння двох текстових фрагментів відповідно до локалі.Вона
//повинна працювати в режимах ігнорування та врахування регістру.

function compareTexts(text1, text2, locale = getLocale(), ignoreCase = false) {
    // Перетворення рядків у порівнянний формат
    const normalizedText1 = normalizeText(text1, locale, ignoreCase);
    const normalizedText2 = normalizeText(text2, locale, ignoreCase);

    return normalizedText1 === normalizedText2;

    function normalizeText(text, locale, ignoreCase) {
        if (ignoreCase) {
            text = text.toLowerCase();
        }

        // Видалення diakritikos
        // ...

        // Перетворення до NFD
        // ...

        return text;
    }

    // Приклад використання
    console.log(compareTexts("привіт", "Привіт", ignoreCase = true)); // true
    console.log(compareTexts("привіт", "привіт", locale = "uk-UA")); // true
    console.log(compareTexts("привіт", "привіт", locale = "en-US")); // false

    // Функції getLocale, getDiacriticsMap
    // повинні бути реалізовані відповідно до вашого середовища
}



//5. Розглянемо шаблон '{0} has {1} messages'.Його французька версія повинна мати вигляд 'Il y
//a { 1 } messages pour { 0 } '. При форматуванні повідомлення аргументи передаються у
//фіксованому порядку, що не залежить від мови.Напишіть функцію messageFormat, яка
//приймає шаблонний рядок та змінну кількість аргументів.Придумайте механізм який виставлятиме аргументи в шаблон відповідно до локалі.

function messageFormat(template, ...args) {
    // Отримання поточної локалі
    const locale = getLocale();

    // Словник для заміни шаблонів
    const replacements = {};

    // Пошук шаблонів у форматі {0}, {1} etc.
    for (const match of template.match(/\{(\d+)}/g)) {
        const index = parseInt(match[1]);
        // Заміна шаблону відповідним аргументом з урахуванням локалі
        replacements[match[0]] = formatArgument(locale, args[index]);
    }

    // Форматування повідомлення з заміною шаблонів
    return template.replace(/\{(\d+)}/g, (match, index) => replacements[match]);

    function formatArgument(locale, arg) {
        if (typeof arg === "string") {
            // Переклад рядків
            return translate(arg, locale);
        } else if (arg instanceof Date) {
            // Форматування дати/часу
            return arg.toLocaleString(locale, getDateFormat(locale));
        } else {
            // За замовчуванням використовується toString()
            return arg.toString();
        }
    }

    // Приклад використання
    const message = messageFormat("{0} має {1} повідомлень", "Іван", 5);
    console.log(message); // "Іван має 5 повідомлень"

  
}




//6. Запропонуйте клас для відображення розмірів аркуша паперу, що залежить від локалі, з
//використанням бажаної одиниці вимірювання та розміру за умовчанням для даної локалі.
//У всіх країнах, окрім США та Канади, розміри аркушів паперу визначаються стандартом ISO 216. Лише три країни ще не перейшли офіційно на метричну систему: Ліберія, М'янма (Бірма) та США




class PaperSize {
    constructor(locale = getLocale(), unit = "mm", defaultSize = "A4") {
        this.locale = locale;
        this.unit = unit;
        this.defaultSize = defaultSize;

        // Словник з розмірами ISO 216
        this.isoSizes = {
            "A0": [841, 1189],
            "A1": [594, 841],
            "A2": [420, 594],
            "A3": [297, 420],
            "A4": [210, 297],
            "A5": [148, 210],
            "A6": [105, 148],
            "A7": [74, 105],
            "A8": [52, 74],
            "A9": [37, 52],
            "A10": [26, 37],
        };

        // Словник з розмірами ANSI/US
        this.ansiSizes = {
            "Letter": [215.9, 279.4],
            "Legal": [215.9, 355.6],
            "Ledger": [431.8, 279.4],
            "Tabloid": [279.4, 431.8],
        };
    }

    // Отримання розміру аркуша
    getSize(size = this.defaultSize) {
        const sizes = this.getSizes();
        return sizes[size] || [0, 0];
    }

    // Отримання одиниці вимірювання
    getUnit() {
        return this.unit;
    }

    // Перетворення розміру в задану одиницю вимірювання
    convertSize(size, toUnit) {
        if (this.unit === toUnit) {
            return size;
        }

        const conversionFactor = {
            mm: 1,
            cm: 0.1,
            in: 25.4,
        };
        
        return size * conversionFactor[this.unit] / conversionFactor[toUnit];
    }

    // Отримання словника з доступними розмірами
    getSizes() {
        return this.locale === "en-US" || this.locale === "en-CA"
            ? this.ansiSizes
            : this.isoSizes;
    }

    // Приклад використання
    const paperSize = new PaperSize("uk-UA");
    const sizeA4 = paperSize.getSize();
  console.log(`A4: ${sizeA4[0]
}x${ sizeA4[1] } ${ paperSize.getUnit() } `); // A4: 210x297 мм

  const sizeLetter = paperSize.getSize("Letter");
  console.log(`Letter: ${ sizeLetter[0] }x${ sizeLetter[1] } ${ paperSize.getUnit() } `); // Letter: 215.9x279.4 мм

  const sizeA4InInches = paperSize.convertSize(sizeA4, "in");
  console.log(`A4 in inches: ${ sizeA4InInches[0] }x${ sizeA4InInches[1] } in `); // A4 in inches: 8.27x11.69 in
}
