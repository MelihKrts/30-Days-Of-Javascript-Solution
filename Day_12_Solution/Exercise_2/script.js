// Day 12 Exercise Solution

// Day 12 Exercise Level 2 Solution

// Exercise 2.1

function tenMostFrequentWords(paragraph) {

    const cleanedParagraph = paragraph.toLowerCase().replace(/[^\w\s']/g, '');
  
    const wordsArray = cleanedParagraph.split(/\s+/);
  
    const wordFrequencyMap = {};
  
    wordsArray.forEach((word) => {
      if (wordFrequencyMap[word]) {
        wordFrequencyMap[word]++;
      } else {
        wordFrequencyMap[word] = 1;
      }
    });
  
    const wordFrequencyArray = Object.entries(wordFrequencyMap).map(([word, count]) => ({ word, count }));
  
    wordFrequencyArray.sort((a, b) => b.count - a.count);
  
    return wordFrequencyArray.slice(0, 11); // most Ten words
    return wordFrequencyArray; // all words showing
  }
  
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  
  console.log(tenMostFrequentWords(paragraph));




  