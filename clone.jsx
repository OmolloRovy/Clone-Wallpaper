const fs =require('fs');
const fsPromises = require('fs').promises;
const path =require('path');
fs.readFile(path.join(__dirname, 'files','fikes.txt'),'utf8'(data, err)=>{
if (err) throw err;
  console.log(log);
});
fs.writeFile(path.join(__dirname, 'files', 'starter.txt','n ice to meet youo' (err)=>{
if(err) throw err;
  console.log('write complete')

  fs.appendFile(path.join(__dirname, 'files', 'append.txt', 'testing text'),(err)=>{
if (err) throw err;
  console.log('append complete');

                
  });
}); 
