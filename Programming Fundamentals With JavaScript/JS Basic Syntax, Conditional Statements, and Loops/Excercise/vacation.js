function vacation(num, type, day) {
    let singlePersonPrice = 0;
    let groupPrice = 0;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                groupPrice = num * 8.45;
            } else if (day === 'Saturday') {
                groupPrice = num * 9.80;
            } else if (day === 'Sunday') {
                groupPrice = num * 10.46;
            }
            if (num >= 30) {
                groupPrice *= 0.85;
            }
            break;
        case 'Business':
            if (num >= 100) {
                num -= 10;
            }
            if (day === 'Friday') {
                groupPrice = num * 10.90;
            } else if (day === 'Saturday') {
                groupPrice = num * 15.6;
            } else if (day === 'Sunday') {
                groupPrice = num * 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                groupPrice = num * 15;
            } else if (day === 'Saturday') {
                groupPrice = num * 20;
            } else if (day === 'Sunday') {
                groupPrice = num * 22.5;
            }
            if (num >= 10 && num <= 20) {
                groupPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${groupPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");