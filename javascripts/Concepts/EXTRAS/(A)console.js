// js provide diffferent type of console hve different purposes :

// 1) Normal console.log
    
    // This is the most basic logging method used to print general output to the console. It can take multiple arguments and will print them all.

    console.info("this is normal console.log")



// 2) console.info(): 

    // Similar to console.log(), but intended for informational messages.

    console.info("this is the information")




// 3) console.warn(): 

    // Used to log warning messages. It usually highlights the message with a yellow background.

    console.warn("this is the warning")


// 4) console.error():

    //  Used to log error messages. It usually highlights the message with  a red background (depending on the console).

    console.error("this is the error")

// 5) console.table(): 

    // Logs tabular data in a table format, which can be particularly useful for logging arrays and objects.

    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 }
    ];
    console.table(people);
    