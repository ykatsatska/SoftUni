function concatenateData(input){
   let name = input[0];
   let totalhours = input[1]*3;
   let numberOfProjects = input[1];
   

   console.log(`The architect ${name} will need ${totalhours} hours to complete ${numberOfProjects} project/s.`)
}

concatenateData(["Sanya", 9])