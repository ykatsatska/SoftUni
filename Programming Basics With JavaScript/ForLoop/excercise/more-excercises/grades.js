function grades(input){
    let index = 0;
    let students = Number(input[index]);
    index++;

    let failCounter = 0;
    let counter3 = 0;
    let counter4 = 0;
    let excellentCounter = 0;
    let totalGrades = 0;


    for (let i = 0; i < students; i++){
        
        let grade = Number(input[index]);
        index++;
        totalGrades += grade;

        if (grade < 3){
            failCounter++;
        } else if (grade >= 3 && grade < 4){
            counter3++;
        } else if (grade >=4 && grade < 5){
            counter4++;
        } else {
            excellentCounter++;
        }
    }
    let average = totalGrades / students;
    let excellentPr = excellentCounter / students * 100;
    let procent3 = counter3 / students * 100;
    let procent4 = counter4 / students * 100;
    let failPr = failCounter / students * 100;

    console.log(`Top students: ${excellentPr.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${procent4.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${procent3.toFixed(2)}%`);
    console.log(`Fail: ${failPr.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}
grades([10,
    3.00,   
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5
    ])