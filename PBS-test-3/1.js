// Given a time 12-hour AM/PM format, convert it to military (24-hour) clock
// Note: - 12:00:00AM on 12-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock

// Example
// . s = '12:01PM'
// Return '12:01:00'

// . s = '12:01:00AM'
// Return '01:00:00'.

// Input Format
// A single s that represents a time in 12-hour clock format (i.e.: hh:mm:ssPM).

// Contraits
// . All input times are valid

// Sample Input
// 07:05:45PM

// Sample Output
// 19:05:45

function convertToMilitaryTime(time12hr) {
    const isAM = time12hr.includes('AM');
    const timeParts = time12hr.split(/:|AM|PM/);

    let hour = parseInt(timeParts[0]);
    const minute = timeParts[1];
    const second = timeParts[2];

    if (!isAM && hour !== 12) {
        hour += 12;
    } else if (isAM && hour === 12) {
        hour = 0;
    }

    const militaryTime = `${hour.toString().padStart(2, '0')}:${minute}:${second}`;
    return militaryTime;
}

// Example usage
const time12hr = '07:05:45PM';
const militaryTime = convertToMilitaryTime(time12hr);
console.log(militaryTime);



