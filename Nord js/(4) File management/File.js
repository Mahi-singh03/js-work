// TO CREATE THE FILE USING THE COMMAND LINE ARGUMENTS

// const x = process.argv
// const y = require('fs')

// y.writeFileSync(x[2],x[3]) // fie=rst argument is file name and second argument is content













// TO CREATE AND DELETE THE FILE USING THE COMMAND LINE ARGUMENTS

// const x = process.argv
// const y = require('fs')

// if(x[2] === 'create'){
//     y.writeFileSync(x[3],x[4])}
// else if(x[2] === 'delete'){
//     y.unlinkSync(x[3])
// }else{
//     console.log('Invalid command')
// }















// CREATING THE MULTIPLE FILES USING THE COMMAND LINE ARGUMENTS

// const fs = require('fs')
// const path = require('path')
// const args = process.argv
// const dirPath = path.join(__dirname, 'CREATED FILES')

// // Log the arguments to ensure they are being read correctly
// console.log('Arguments:', args)


// for (let i = 0; i < 5; i++) {
//     const filePath = `${dirPath}/${args[2]}${i}.txt`
//     fs.writeFileSync(filePath, args[3])
//     console.log(`File created: ${filePath}`)
// }


// command line COMMAND : node File mahi "this is my sample text 2"









// CURD OPERATION USING THE COMMAND LINE ARGUMENTS


const x = require('fs')
const y = require('path')
const z = process.argv
const dirpath = y.join(__dirname,'CURD')



// create a file

// x.writeFileSync(`${dirpath}/${z[2]}.txt`, z[3])

// command line COMMAND : node File mahi " this file is creat using creare command"



// read the file

// const m = x.readFileSync(`${dirpath}/${z[2]}.txt`,'utf-8')
// console.log(m)




//updeate the file

// x.appendFileSync(`${dirpath}/${z[2]}.txt`, z[3])    




//Delete the file

x.unlinkSync(`${dirpath}/${z[2]}.txt`)   
