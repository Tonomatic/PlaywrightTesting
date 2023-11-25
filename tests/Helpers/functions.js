function calculateKeywordScore(positiveKeywords, negativeKeywords, inputArray) {
    let score = 0;

    // Function to check if the input contains any of the keywords
    const containsKeyword = (input, keywords) => {
        return keywords.some(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'i'); // Using word boundary to match whole word
            return regex.test(input);
        });
    };

    // Iterate over the input array
    inputArray.forEach(input => {
        // Check for positive keywords
        if (containsKeyword(input, positiveKeywords)) {
            score++;
        }

        // Check for negative keywords
        if (containsKeyword(input, negativeKeywords)) {
            score--;
        }
    });

    return score;
}

module.exports = calculateKeywordScore;
