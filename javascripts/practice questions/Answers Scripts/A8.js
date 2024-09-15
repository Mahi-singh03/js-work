function vowel_counts (str){
    vowels = 0;
    for(i of str){
        if (i==="a"|| i=== "e"|| i==="i"|| i=== "o"|| i=== "u"){
        vowels++;
        }
    }
    console.log(vowels)
};



vowel_counts ("mango");

// ulternately

function vowelCounts(str) {  
    let vowels = 0;  
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);  
    
    for (const char of str.toLowerCase()) {  
    if (vowelSet.has(char)) {  
       vowels++;  
      }  
    }  
    
    console.log(vowels);  
  }  
    
  vowelCounts("mango"); 
  