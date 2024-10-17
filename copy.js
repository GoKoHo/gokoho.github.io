function highlightKeywords(text, keywords) {
    let words = text.split(' ');
    let coloredText = "";
    const colors = ['blue', 'red', 'orange', 'purple', 'cyan'];
    let colorIndex = 0;
    // Duyệt qua từng nhóm keywords
    for (const groupName in keywords) {
        const group = keywords[groupName];
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let wordLowercase = word.toLowerCase();
            // Kiểm tra xem từ có nằm trong nhóm này không
            if (group.includes(wordLowercase)) {
                coloredText += `<span class="keyword" style="color:${colors[colorIndex]}">${word}</span> `;
                colorIndex = (colorIndex + 1) % colors.length;
            } else {
                coloredText += word + " ";
            }
        }
    }
    return coloredText;
}