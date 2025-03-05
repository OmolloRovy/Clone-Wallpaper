const fs = require ('fs');
const fsPromises = require('fs').promises;
fs.readFile
  
const fs =require('fs');
const fsPromises = require('fs').promises;
const path =require('path');

fs.readFile(path.join(__dirname, 'files','fikes.txt'),'utf8'(data, err)=>{
if (err) throw err;
  console.log(data);
});
await fsPromises.unlink('starter.txt');
fs.writeFile(path.join(__dirname, 'files', 'starter.txt','n ice to meet youo' (err)=>{
if(err) throw err;
  console.log('write complete')

  fs.appendFile(path.join(__dirname, 'files', 'append.txt', '\n\n testing text'),(err)=>{
if (err) throw err;
  console.log('append complete');   
                
  fs.rename(path.join(__dirname,'files', 'append.txt', 'newrename.txt', )(err)=>{
    if(err) throw err;
    consloe.log('rename complete');
  });
  });
}); 

// exiting uncaught errors
  process.on(
    'uncaught ecxeption' err=>{
      console.log(`there was an uncaught error: $err`);
    process.exit(1);
    }
  )
// Await Async >>>>
const fileOps = asycn()=>{
    try{
      const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), utf8);
      console.log(data);
await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
  await fsPromises.writeFile(path.join(__dirname,'files','promisesWrite.txt'),data);
  await fsPromises.appendFile(path.join(__dirname,'files','promisesWrite.txt','\n\n the big init'));
  await fsPromises.rename(path.join(__dirname,'files','promisesWrite.txt','renamePromsises.txt'));
  const NewData= await fspromises.readFile(path.join(__dirname,'promiseses','newdata.txt'), utf8);
      console.log(NewData);                    
    }catch{
      console.log(err)
    }
}
fileOps();
