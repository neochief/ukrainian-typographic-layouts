function merge(source, part, is_typo_level) {
    var source_copy = {};
    var i;
    for (i in source) {
        source_copy[i] = source[i].slice(0);
    }
    for (i in part) {
        if (is_typo_level) {
            if (part[i].length > 0) {
                source_copy[i][2] = part[i][0];
            }
            if (part[i].length > 1) {
                source_copy[i][3] = part[i][1];
            }
        }
        else {
            source_copy[i] = part[i].slice(0);
        }
    }
    return source_copy;
}

var layouts = {};
layouts["system_en"] = {
    "tilde": ["`", "~"],
    "1": ["1", "!"],
    "2": ["2", "@"],
    "3": ["3", "#"],
    "4": ["4", "$"],
    "5": ["5", "%"],
    "6": ["6", "^"],
    "7": ["7", "&"],
    "8": ["8", "*"],
    "9": ["9", "("],
    "0": ["0", ")"],
    "minus": ["-", "_"],
    "equals": ["=", "+"],
    "q": ["q", "Q"],
    "w": ["w", "W"],
    "e": ["e", "E"],
    "r": ["r", "R"],
    "t": ["t", "T"],
    "y": ["y", "Y"],
    "u": ["u", "U"],
    "i": ["i", "I"],
    "o": ["o", "O"],
    "p": ["p", "P"],
    "sqbracketleft": ["[", "{"],
    "sqbracketright": ["]", "}"],
    "a": ["a", "A"],
    "s": ["s", "S"],
    "d": ["d", "D"],
    "f": ["f", "F"],
    "g": ["g", "G"],
    "h": ["h", "H"],
    "j": ["j", "J"],
    "k": ["k", "K"],
    "l": ["l", "L"],
    "semicolon": [";", ":"],
    "quote": ["'", "\""],
    "backslash": ["\\", "|"],
    "backslashleft": ["\\", "|"],
    "z": ["z", "Z"],
    "x": ["x", "X"],
    "c": ["c", "C"],
    "v": ["v", "V"],
    "b": ["b", "B"],
    "n": ["n", "N"],
    "m": ["m", "M"],
    "comma": [",", "<"],
    "period": [".", ">"],
    "slash": ["/", "?"]
};

layouts["system_ru"] = {
    "tilde": ["ё", "Ё"],
    "1": ["1", "!"],
    "2": ["2", "\""],
    "3": ["3", "№"],
    "4": ["4", ";"],
    "5": ["5", "%"],
    "6": ["6", ":"],
    "7": ["7", "?"],
    "8": ["8", "*"],
    "9": ["9", "("],
    "0": ["0", ")"],
    "minus": ["-", "_"],
    "equals": ["=", "+"],
    "q": ["й", "Й"],
    "w": ["ц", "Ц"],
    "e": ["у", "У"],
    "r": ["к", "К"],
    "t": ["е", "Е"],
    "y": ["н", "Н"],
    "u": ["г", "Г"],
    "i": ["ш", "Ш"],
    "o": ["щ", "Щ"],
    "p": ["з", "З"],
    "sqbracketleft": ["х", "Х"],
    "sqbracketright": ["ъ", "Ъ"],
    "a": ["ф", "Ф"],
    "s": ["ы", "Ы"],
    "d": ["в", "В"],
    "f": ["а", "А"],
    "g": ["п", "П"],
    "h": ["р", "Р"],
    "j": ["о", "О"],
    "k": ["л", "Л"],
    "l": ["д", "Д"],
    "semicolon": ["ж", "Ж"],
    "quote": ["э", "Э"],
    "backslash": ["/", "\\"],
    "backslashleft": ["/", "\\"],
    "z": ["я", "Я"],
    "x": ["ч", "Ч"],
    "c": ["с", "С"],
    "v": ["м", "М"],
    "b": ["и", "И"],
    "n": ["т", "Т"],
    "m": ["ь", "Ь"],
    "comma": ["б", "Б"],
    "period": ["ю", "Ю"],
    "slash": [".", ","]
};

layouts["system_uk"] = merge(layouts["system_ru"], {
    "tilde": ["'", "Ё"],
    "s": ["і", "І"],
    "sqbracketright": ["ї", "Ї"],
    "quote": ["є", "Є"],
    "u": ["г", "Г", "ґ", "Ґ"]
});

layouts["typo_part"] = {
    "tilde": ["", "dead:`"],
    "1": ["¹", "¡"],
    "2": ["²", "½"],
    "3": ["³", "⅓"],
    "4": ["$", "¼"],
    "5": ["‰", ""],
    "6": ["↑", "dead:^"],
    "7": ["&", "¿"],
    "8": ["∞", "⅛"],
    "9": ["←", "〈"],
    "0": ["→", "〉"],
    "minus": ["—", "–"],
    "equals": ["≠", "±"],
    "q": ["", "dead:˘"],
    "w": ["ѵ", "Ѵ"],
    "e": ["€", ""],
    "r": ["®", "dead:°"],
    "t": ["™", ""],
    "y": ["ѣ", "Ѣ"],
    "i": ["і", "І"],
    "o": ["ѳ", "Ѳ"],
    "p": ["´", "˝"],
    "sqbracketleft": ["[", "{"],
    "sqbracketright": ["]", "}"],
    "a": ["≈", "⌘"],
    "s": ["§", ""],
    "d": ["°", "⌀"],
    "f": ["£", ""],
    "g": ["₴", ""],
    "h": ["₽", ""],
    "j": ["„", "‚"],
    "k": ["“", "‘"],
    "l": ["”", "’"],
    "semicolon": ["‘", "dead:¨"],
    "quote": ["’", ""],
    "backslash": ["]", "}"],
    "backslashleft": ["|", "¦"],
    "z": ["§", "dead:¸"],
    "x": ["×", "⋅"],
    "c": ["©", "¢"],
    "v": ["↓", "dead:ˇ"],
    "b": ["β", "α"],
    "n": ["", "dead:~"],
    "m": ["−", "•"],
    "comma": ["«", "<"],
    "period": ["»", ">"],
    "slash": ["÷", "dead:´"]
};

layouts["typo_part_uk"] = {
    "tilde": ["ё", "dead:`"]
};

layouts["typo_part_uk_ru"] = {
    "s": ["ы", "Ы"],
    "sqbracketright": ["ъ", "Ъ"],
    "quote": ["э", "Э"]
};

layouts["typo_part_ru_uk"] = {
    "tilde": ["'", "dead:`"],
    "s": ["і", "І"],
    "sqbracketright": ["ї", "Ї"],
    "quote": ["є", "Є"]
};

layouts["typo_en"] = merge(layouts["system_en"], layouts["typo_part"], true);
layouts["typo_uk"] = merge(merge(layouts["system_uk"], layouts["typo_part"], true), layouts["typo_part_uk"], true);
layouts["typo_uk_ru"] = merge(layouts["typo_uk"], layouts["typo_part_uk_ru"], true);
layouts["typo_ru"] = merge(layouts["system_ru"], layouts["typo_part"], true);
layouts["typo_ru_uk"] = merge(layouts["typo_ru"], layouts["typo_part_ru_uk"], true);

function activateLayout(name) {
    for (var key in layouts[name]) {
        var keys = layouts[name][key];
        var html = "";
        for (var i = 0; i < keys.length; i++) {
            var keytext = keys[i];
            if (/^dead/.test(keytext)) {
                keytext = "<div class=\"keytext dead\">" + keytext.replace(/^dead:/, '') + "</div>";
            }
            else {
                keytext = "<div class=\"keytext\">" + keytext + "</div>";
            }
            html += "<div class=\"keylabel keylevel" + (i + 1) +"\">" + keytext + "</div>";
        }
        $('.key-' + key + ' .keylabels').html(html);
    }
}