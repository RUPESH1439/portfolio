export function calculateExperienceYears(startDate: string) {
    const start = new Date(startDate);
    const today = new Date();

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();
    let days = today.getDate() - start.getDate();

    // Adjust for negative months and days
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate the decimal part of the years
    const decimalMonths = months / 12;
    const decimalDays =
        days /
        new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() /
        12;

    const totalYears = years + decimalMonths + decimalDays;

    // Return the total years rounded to one decimal place
    return Math.round(totalYears * 10) / 10;
}
