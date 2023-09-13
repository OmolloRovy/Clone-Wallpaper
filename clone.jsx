const fs =require('fs');
const fsPromises = require('fs').promises;
const path =require('path');
fs.readFile(path.join(__dirname, 'files','fikes.txt'),'utf8'(data, err)=>{
if (err) throw err;
  console.log(log);
});
await fsPromises.unlink('starter.txt');
fs.writeFile(path.join(__dirname, 'files', 'starter.txt','n ice to meet youo' (err)=>{
if(err) throw err;
  console.log('write complete')

  fs.appendFile(path.join(__dirname, 'files', 'append.txt', 'testing text'),(err)=>{
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
    pro
    }
  )
