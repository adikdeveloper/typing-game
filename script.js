// So'zlar bazasi
const wordsByLanguage = {
    uzbek: {
        easy: ["ona", "ota", "biz", "siz", "men", "sen", "qiz", "bol", "suv", "non", "kun", "tun", "ish", "bosh", "qol", "qor", "yoz", "kuz", "qish", "til", "bel", "qum", "tuz", "osh", "yog", "sut", "bol", "toy", "bor", "kel", "ket", "och", "yop", "oq", "ol", "qil", "ber", "top", "tur", "yur", "yot", "ich", "qoy", "bek", "xon", "qul", "bog", "tog", "uy", "oy", "yil", "gul", "yer", "osh", "bel", "mol", "pul", "til", "ter", "kir", "nur", "gap", "soz", "koz", "quv", "tep", "qon", "lab", "tish", "koz", "bosh", "yon", "bur", "tug", "yuv", "tez", "jim", "nam", "zur", "qop", "yoz", "sev", "qol", "yut", "bel", "tob", "tut", "qoz", "pok", "tor", "kes", "qum", "yeb", "boq", "qay", "qot", "soz", "yov", "toj", "tom", "uch", "qut", "yol"],
        medium: ["kitob", "qalam", "maktab", "daftar", "ruchka", "stol", "sinf", "doska", "oyna", "quloq", "burun", "boshi", "qalbi", "yurak", "oyoq", "qoshiq", "pichoq", "vilka", "idish", "katta", "kishi", "bola", "qizil", "yashil", "sariq", "oqish", "ko'kish", "qizcha", "yigit", "ayol", "erkak", "aqlli", "bilim", "oltin", "kumush", "temir", "yogoch", "toshli", "qumli", "suvli", "yerli", "osmon", "bulut", "yomgir", "quyosh", "tikish", "kesish", "yozish", "borish", "kelish", "ketish", "ko'cha", "shahar", "qatiq", "guruch", "loviya", "sabzi", "piyoz", "karam", "bodring", "pomidor", "uzum", "olma", "nok", "shaftoli", "olcha", "gilos", "anor", "behi", "qovun", "tarvuz", "baliq", "tovuq", "qo'zi", "buzoq", "sigir", "mushuk", "kuchuk", "qushcha", "chumoli", "kapalak", "asalari", "qisqa", "uzun", "baland", "past", "yengil", "ogir", "issiq", "sovuq", "shirn", "nordon", "achchiq", "sho'r", "yaxshi", "yomon", "chiqish", "kirish", "turish", "yugur", "sakra", "raqam", "harf"],
        hard: ["kompyuter", "telefon", "dasturchi", "muhandis", "internet", "bilimdon", "xodimlar", "talabalr", "darslik", "kundalik", "transport", "masofali", "faoliyat", "xizmatchi", "mutaxasis", "texnolog", "professor", "direktor", "yoshgina", "kattalar", "qizaloq", "bolakay", "yoshlar", "o'quvchi", "beminnat", "baxtli", "qiziqish", "harakat", "kelishgan", "bormoq", "ketmoqda", "o'qimoq", "yozmoqda", "tinglash", "eslamoq", "unutmoq", "tushunish", "bajarmoq", "ishlamoq", "yugurmoq", "pishirmoq", "tozalash", "yuvmoqda", "qiziqarli", "mashina", "samolyot", "velosiped", "avtomobil", "tezlikda", "shaharlik", "qishloqlik", "maktabli", "dehqonlar", "bog'bonlar", "paxtakor", "shifokor", "yozuvchi", "sportchi", "qalamlar", "ruchkalar", "daftarlar", "stullar", "stollar", "xonalar", "binolar", "uylar", "derazalar", "eshiklar", "gilamlar", "kiyimlar", "poyabzal", "sumkalar", "telefonlar", "kitoblar", "rasmlar", "gullar", "daraxtlar", "mevalar", "sabzavot", "polizlar", "ekinlar", "xabarlar", "yangilik", "topshiriq", "vazifalar", "ishlar", "narsalar", "ovqatlar", "taomlar", "ichimlik", "shirinlik", "zararli", "foydali", "qimmatli", "arzonroq", "tezroq", "sekinroq", "yaxshiroq", "yomonroq", "qiziqroq", "kamroq"]
    },
    english: {
        easy: ["at", "in", "on", "up", "by", "do", "go", "be", "is", "am", "of", "to", "me", "he", "we", "us", "my", "hi", "no", "so", "or", "an", "as", "if", "all", "any", "car", "cat", "dog", "run", "see", "eat", "fly", "big", "red", "old", "new", "hot", "sad", "sky", "sun", "fun", "box", "pen", "cup", "boy", "dad", "mom", "hat", "map"],
        medium: ["time", "work", "life", "home", "book", "word", "hand", "door", "food", "tree", "bird", "fish", "game", "play", "talk", "walk", "jump", "help", "love", "like", "need", "want", "make", "take", "give", "find", "look", "good", "best", "blue", "cold", "dark", "easy", "fast", "hard", "kind", "long", "loud", "nice", "soft", "tall", "warm", "weak", "wise", "baby", "girl", "rain", "star", "wall", "wind", "water", "world", "money", "class", "paper", "happy", "smile", "laugh", "think", "sleep", "speak", "study", "write", "dance", "child", "house", "table", "chair", "phone", "light", "night", "sunny", "cloud", "green", "black", "white", "brown", "sweet", "young", "small", "large", "clean", "dirty", "quick", "smart", "brave", "quiet", "sharp", "plant", "apple", "beach", "hotel", "mouse", "shape", "space", "store", "train", "watch", "woman", "world"],
        hard: ["computer", "student", "teacher", "school", "friend", "family", "mother", "father", "sister", "brother", "people", "animal", "flower", "garden", "kitchen", "window", "morning", "evening", "winter", "summer", "spring", "autumn", "weather", "sunshine", "rainbow", "mountain", "perfect", "healthy", "natural", "beautiful", "friendly", "helpful", "careful", "peaceful", "wonderful", "different", "important", "interesting", "difficult", "possible", "amazing", "exciting", "fantastic", "favorite", "special", "strange", "chicken", "elephant", "dolphin", "penguin", "butterfly", "learning", "reading", "writing", "playing", "working", "walking", "running", "dancing", "singing", "talking", "helping", "making", "taking", "giving", "finding", "looking", "thinking", "feeling", "living", "loving", "trying", "knowing", "wanting", "needing", "building", "creating", "growing", "moving", "staying", "sleeping", "smiling", "laughing", "crying", "waiting", "watching", "listening", "speaking", "teaching", "learning", "studying", "working", "playing", "enjoying", "believing", "becoming", "beginning", "continuing", "finishing", "starting", "stopping", "changing", "improving", "developing", "increasing", "decreasing", "remembering", "forgetting", "understanding", "explaining", "describing", "organizing", "managing", "traveling", "exploring", "discovering", "analyzing", "designing", "planning", "preparing", "practicing", "performing", "celebrating", "succeeding", "achieving", "winning", "losing", "fighting", "protecting", "supporting", "encouraging"]
    },
    russian: {
        easy: ["дом", "сад", "кот", "пес", "год", "час", "дай", "пей", "сон", "мир", "лес", "сыр", "чай", "суп", "мед", "сок", "рис", "пол", "сын", "мяч", "нос", "рот", "зуб", "ухо", "глаз", "сам", "два", "три", "там", "тут", "как", "где", "кто", "что", "мой", "твой", "наш", "вам", "нам", "вот", "да", "нет", "раз", "все", "сто", "акт", "бег", "вид", "ряд", "фон"],
        medium: ["книга", "ручка", "школа", "класс", "время", "место", "жизнь", "слово", "песня", "семья", "мысль", "центр", "парта", "доска", "радио", "метро", "театр", "кухня", "спорт", "пакет", "ветер", "огонь", "земля", "птица", "рыбка", "собака", "кошка", "добро", "тепло", "тихий", "умный", "новый", "старый", "белый", "синий", "серый", "пятый", "шесть", "сорок", "город", "улица", "почта", "парок", "озеро", "поезд", "метро", "радио", "песок", "трава", "весна", "вода", "небо", "земля", "река", "море", "гора", "снег", "дождь", "день", "ночь", "утро", "весна", "лето", "зима", "друг", "брат", "мама", "папа", "дети", "стол", "стул", "окно", "дверь", "хлеб", "мясо", "рыба", "сила", "база", "путь", "язык", "свет", "звук", "цвет", "круг", "лист", "знак", "план", "игра", "дело", "тема", "сеть", "банк", "этаж", "след", "факт", "фото", "бюро", "вещь", "враг", "двор"],
        hard: ["телефон", "компьютер", "интернет", "квартира", "машина", "автобус", "самолет", "магазин", "аптека", "больница", "ресторан", "площадь", "станция", "деревня", "природа", "погода", "солнце", "облако", "человек", "девушка", "мужчина", "женщина", "ребенок", "студент", "учитель", "врач", "инженер", "работа", "зарплата", "деньги", "одежда", "обувь", "красивый", "сильный", "быстрый", "веселый", "грустный", "светлый", "темный", "сложный", "простой", "важный", "разный", "первый", "второй", "третий", "четыре", "восемь", "десять", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто", "работать", "учиться", "читать", "писать", "говорить", "слушать", "думать", "видеть", "слышать", "помнить", "забыть", "любить", "хотеть", "мочь", "знать", "делать", "играть", "гулять", "бегать", "спать", "есть", "пить", "готовить", "убирать", "стирать", "чистить", "помогать", "искать", "найти", "открыть", "закрыть", "начать", "закончить", "спросить", "ответить", "понять", "решить", "праздник", "подарок", "история", "культура", "музыка", "фильм", "театр", "концерт", "выставка", "музей", "библиотека", "ресторан", "магазин", "рынок", "площадь", "станция", "остановка", "дорога", "улица", "проспект", "бульвар", "переход", "светофор", "телевизор", "телефон", "компьютер", "планшет", "интернет", "программа"]
    }
};

// HTML elementlarni olish
const languageSelect = document.getElementById('language');
const difficultySelect = document.getElementById('difficulty');
const timeSelect = document.getElementById('time');
const wordDisplay = document.getElementById('wordDisplay');
const input = document.getElementById('input');
const startButton = document.getElementById('startButton');
const statsButton = document.getElementById('statsButton');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const results = document.getElementById('results');
const statistics = document.getElementById('statistics');

// O'yin parametrlari
let currentWord = "";
let score = 0;
let mistakes = 0;
let timeLeft;
let timer;
let isGameActive = false;
let gameHistory = [];

// O'yinni boshlash
function startGame() {
    isGameActive = true;
    score = 0;
    mistakes = 0;
    timeLeft = parseInt(timeSelect.value);
    
    // Interfeyisni yangilash
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    input.value = "";
    input.disabled = false;
    startButton.disabled = true;
    results.style.display = 'none';
    statistics.style.display = 'none';
    
    // Yangi so'z olish
    getNewWord();
    input.focus();
    
    // Timer boshlash
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft === 0) {
            endGame();
        }
    }, 1000);
}

// Yangi so'z olish
function getNewWord() {
    const language = languageSelect.value;
    const difficulty = difficultySelect.value;
    const words = wordsByLanguage[language][difficulty];
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
}

// O'yinni tugatish
function endGame() {
    isGameActive = false;
    clearInterval(timer);
    input.disabled = true;
    startButton.disabled = false;
    
    // Natijalarni saqlash
    const wpm = calculateWPM();
    const accuracy = calculateAccuracy();
    
    const gameResult = {
        date: new Date(),
        wpm,
        accuracy,
        score,
        mistakes,
        language: languageSelect.value,
        difficulty: difficultySelect.value,
        time: parseInt(timeSelect.value)
    };
    
    gameHistory.push(gameResult);
    showResults(gameResult);
    updateStatistics();
}

// WPM hisoblash
function calculateWPM() {
    const minutes = parseInt(timeSelect.value) / 60;
    return Math.round(score / minutes);
}

// Aniqlik hisoblash
function calculateAccuracy() {
    const totalAttempts = score + mistakes;
    return totalAttempts === 0 ? 0 : Math.round((score / totalAttempts) * 100);
}

// Natijalarni ko'rsatish
function showResults(result) {
    results.style.display = 'block';
    document.getElementById('wpm').textContent = `${result.wpm} WPM`;
    document.getElementById('correctWords').textContent = result.score;
    document.getElementById('mistakes').textContent = result.mistakes;
    document.getElementById('accuracy').textContent = `${result.accuracy}%`;
}

// Statistikani yangilash
function updateStatistics() {
    if (gameHistory.length === 0) return;
    
    const totalWPM = gameHistory.reduce((sum, game) => sum + game.wpm, 0);
    const averageWPM = Math.round(totalWPM / gameHistory.length);
    const bestWPM = Math.max(...gameHistory.map(game => game.wpm));
    
    document.getElementById('totalGames').textContent = gameHistory.length;
    document.getElementById('averageWPM').textContent = `${averageWPM} WPM`;
    document.getElementById('bestWPM').textContent = `${bestWPM} WPM`;
}

// Event Listeners
startButton.addEventListener('click', startGame);

statsButton.addEventListener('click', () => {
    statistics.style.display = statistics.style.display === 'none' ? 'block' : 'none';
});

input.addEventListener('input', (e) => {
    if (!isGameActive) return;
    
    const value = e.target.value;
    if (value === currentWord) {
        score++;
        scoreDisplay.textContent = score;
        input.value = "";
        getNewWord();
    } else if (value.length > currentWord.length) {
        mistakes++;
        input.value = "";
    }
});

// Sozlamalarni o'zgartirish
[languageSelect, difficultySelect, timeSelect].forEach(select => {
    select.addEventListener('change', () => {
        if (!isGameActive) {
            wordDisplay.textContent = "O'yinni boshlash uchun tugmani bosing";
        }
    });
});