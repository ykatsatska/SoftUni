function hospital(input){
    let index = 0;
    let days = Number(input[index]);
    index++;

    let treatedPatients = 0;
    let untreatedPatients = 0;
    let doctors = 7;

    for (let i = 1; i <= days; i++){
        let currentPatients = Number(input[index]);
        index++;

        if (i % 3 === 0 && treatedPatients < untreatedPatients){
            doctors++;
        }
        if (currentPatients > doctors){
            treatedPatients += doctors;
            untreatedPatients += currentPatients - doctors;
        } else {
            treatedPatients += currentPatients;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
    
}
hospital([4,
    7,
    27,
    9,
    1 ])