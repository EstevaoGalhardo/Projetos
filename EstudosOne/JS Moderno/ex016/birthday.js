const dayjs = require("dayjs")

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day')

    console.log(`age: ${ageInYears}`)
    console.log(`Next birthday: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`days until completion ${ageInYears + 1} years: ${daysToNextBirthday}`)
}

birthday("1994-03-30")
