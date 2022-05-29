function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let letters = "abcdefghijklmnopqrstuvwxyz";

    let currentPassword = "";
    let printLine = "";

    for (let a = 1; a <= n; a++){
        for (let b = 1; b <= n; b++){
            for (let j = 0; j < letters.length; j++){
                let c = letters.charAt(j);

                if (j >= l){
                    break;
                }
                
                for (let i = 0; i < letters.length; i++){
                    let d = letters.charAt(i);
                    if (i >= l){
                        break;
                    } 

                    for (let e = 1; e <= n; e++){
                        if (e > a && e > b){
                            currentPassword = "" + a + b + c + d + e;
                            printLine += currentPassword + " ";
                        }
                    }
                }
            }
        }
    }
    console.log(printLine);
}
passwordGenerator([
"2",
"4"
])