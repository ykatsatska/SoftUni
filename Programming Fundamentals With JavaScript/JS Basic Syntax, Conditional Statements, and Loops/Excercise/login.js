function login(input) {
    let index = 0;
    let username = input[index++];
    let password = '';
    let tryCounter = 0;

    for (let i = username.length - 1; i >= 0; i--){
        password += username[i];
    }
    
    let passwordTry = input[index];

    while (passwordTry !== password){
        tryCounter++;
        
        if (tryCounter === 4){
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log('Incorrect password. Try again.');
        }
        index++;
        passwordTry = input[index];
    }
    if (passwordTry === password){
        console.log(`User ${username} logged in.`);
    } 
}
login(['Acer','login','go','let me in','recA']);