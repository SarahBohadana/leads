import fs from 'fs/promises'

const path = './LEADS';
const usersList = [];
const usersid = {};

console.time('length');
// (async() =>{
//   const files = await fs.readdir(path)
//   for (let file of files){
//     const content = await fs.readFile(`${path}/${file}`,'utf8')
//     const lines = content.split('\r\n');
//     for (let line of lines){
//       let [fbID, userName, email] = line.split(',');
//       if (!(fbID in usersid)){
//         userName = userName.slice(1,-1);
//         const user = {
//           fbID,
//           userName,
//           email
//         }
//         usersList.push(user);
//         usersid[fbID] = 0;
//       }
//     }
//     await fs.writeFile('./users.json', JSON.stringify(usersList, null, 2));
//   }
//   console.info(`number of users: ${usersList.length}`)

// })();
     


  
// fs.readdir(path)
//   .then((proArr) => {
//     const penPro = proArr.map((file) => {
//       return fs.readFile(`${path}/${file}`)
//       .catch(err => console.log('error'))
//     })
//     Promise.all(penPro)
//     .then((contentArr) => {
//       const content = contentArr.join('\r\n');
//       const lines = content.split('\r\n')
//       for (let line of lines){
//         let [fbID, userName, email] = line.split(',');
//         if (!(fbID in usersid)){
//           userName = userName.slice(1,-1);
//           const user = {
//             fbID,
//             userName,
//             email
//           }
//             usersList.push(user);
//             usersid[fbID] = 0;
//         }
//       }
//       console.info(`number of users: ${usersList.length}`)
//       return fs.writeFile('./users.json', JSON.stringify(usersList, null, 2));
//     })

//   })
// async function leads(){
//   const files = await fs.readdir(path)
//   for (let file of files){
//     const content = await fs.readFile(`${path}/${file}`,'utf8');
//     const lines = content.split('\r\n');
//     for (let line of lines){
//       let n = line.split(',');
//       if (!(n[0] in usersid)){
//         let user = {
//           fbID : n[0], 
//           userName : n[1].slice(1,-1) ,
//           email : n[2]
//         }
//         usersList.push(user);
//         usersid[n[0]] = 0;
//       }
//     }
//   }

//     console.info(`number of users: ${usersList.length}`)
//     await fs.writeFile('./users.json',JSON.stringify(usersList, null, 2))
// }

// function leads(){
//   fs.readdir(path)
//   .then(arr =>{
//     const a = arr.map((file)=>{
//       return fs.readFile(path + '/' + file, 'utf8');
//     })
//     Promise.all(a)
//       .then(pendingPro => {
//         const content = pendingPro.join('\r\n');
//         const lines = content.split('\r\n');
//         for (let line of lines){
//           let n = line.split(',');
//           if (!(n[0] in usersid)){
//             let user = {
//               fbID : n[0], 
//               userName : n[1].slice(1,-1) ,
//               email : n[2]
//             }
//             usersList.push(user);
//             usersid[n[0]] = 0;
//           }
//         }
//         console.info(`number of users: ${usersList.length}`)
//         return fs.writeFile('./users.json',JSON.stringify(usersList, null, 2))
//       })

//   })
  
// }
leads();



function leads(){
  fs.readdir(path)
  .then(arr => {
    const arrP = arr.map((file)=>{
      return fs.readFile(path +'/'+ file);
    })
    Promise.all(arrP)
      .then(pending =>{
        const content = pending.join('\r\n');
        const lines = content.split('\r\n');
        for (let line of lines){
          const split = line.split(',');
          if(!(split[0] in usersid)){
            const user = {
              fbid : split[0],
              username : split[1].slice(1,-1),
              email : split[2]
            }
            usersList.push(user);
            usersid[split[0]] = 0;

          }
        }
        console.info('number of users: ' + usersList.length);
        return fs.writeFile('./users.json',JSON.stringify(usersList, null, 2));
      })
  })
}
console.timeEnd('length');