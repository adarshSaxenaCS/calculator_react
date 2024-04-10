
    
    // Iterate over the array of words and count occurrences
    var words="abcabcda";
    var wordCounts={};
    for(var i=0;i<words.length;i++)
    {
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
        console.log(wordCounts[words[i]]);
   
    }
    console.log(wordCounts);

    
    
