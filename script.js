const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote');
const shareQuoteButton = document.getElementById('share-quote');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    quoteText.textContent = `"${text}"`;
    quoteAuthor.textContent = `- ${author}`;
}

function shareQuote() {
    const quote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
    if (navigator.share) {
        navigator.share({
            title: 'Inspirational Quote',
            text: quote,
        })
        .catch(console.error);
    } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(quote)
            .then(() => alert('Quote copied to clipboard!'))
            .catch(console.error);
    }
}

// Display initial quote
displayQuote();

// Event listeners
newQuoteButton.addEventListener('click', displayQuote);
shareQuoteButton.addEventListener('click', shareQuote);
