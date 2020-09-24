const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;
const generatePage = require('./src/page-template.js');

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error (err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

//const printProfileData = (profileDataArr) => {
    //for (let i = 0; i < profileDataArr.lenth; i++){
       // console.log(profileDataArr[i])
    //}  


//profileDataArr.forEach(profileItem => console.log(profileItem));

//};

//printProfileData(profileDataArgs);
