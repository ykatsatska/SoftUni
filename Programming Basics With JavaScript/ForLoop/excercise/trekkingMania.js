function trekkingMania(input){
    let index = 0;
    let groups = Number(input[index]);
    index++;

    let musalaCl = 0;
    let montblanCl = 0;
    let kilimCl = 0;
    let k2Cl = 0;
    let everestCl = 0;

    let allClimbers = 0;

    for (let i = 0; i < groups; i++){
        let people = Number(input[index]);
        index ++;

        if (people <= 5){
            musalaCl += people;
        } else if (people > 5 && people <= 12){
            montblanCl += people;
        } else if (people > 12 && people <= 25){
            kilimCl += people;
        } else if (people > 25 && people <= 40){
            k2Cl += people;
        } else {
            everestCl += people;
        }
    }
    allClimbers = musalaCl + montblanCl + kilimCl + k2Cl + everestCl;

    console.log((musalaCl / allClimbers * 100).toFixed(2) + "%");
    console.log((montblanCl / allClimbers * 100).toFixed(2) + "%");
    console.log((kilimCl / allClimbers * 100).toFixed(2) + "%");
    console.log((k2Cl / allClimbers * 100).toFixed(2) + "%");
    console.log((everestCl / allClimbers * 100).toFixed(2) + "%");
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

