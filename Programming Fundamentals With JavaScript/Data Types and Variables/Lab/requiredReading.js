function requiredReading(totalPages, pagesProHour, days) {
    let totalHoursNeeded = totalPages / pagesProHour;

    console.log(totalHoursNeeded / days);
}
requiredReading(212,
    20 ,
    2);