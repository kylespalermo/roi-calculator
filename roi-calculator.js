// "#fivetran-contract-period"
// "#est-onboarding-time"
// "#average-salary"
// "#equivalent-hourly-rate"
// "#hours-worked-per-week"
// "#weeks-worked-per-year"

const defaultFivetranContractPeriod = 12;
const defaultEstOnboardingTime = 4;
const defaultSalary = 70000;
const defaultHoursWorkedPerWeek = 40;
const defaultWeeksWorkedPerYear = 48;

const fivetranContractPeriod = document.getElementById("fivetran-contract-period")
const estOnboardingTime = document.getElementById("est-onboarding-time")
const averageSalary = document.getElementById("average-salary")
const equivalentHourlyRate = document.getElementById("equivalent-hourly-rate")
const hoursWorkedPerWeek = document.getElementById("hours-worked-per-week")
const weeksWorkedPerYear = document.getElementById("weeks-worked-per-year")



fivetranContractPeriod.defaultValue = defaultFivetranContractPeriod;
estOnboardingTime.defaultValue = defaultEstOnboardingTime;
averageSalary.defaultValue = defaultSalary;
hoursWorkedPerWeek.defaultValue = defaultHoursWorkedPerWeek;
weeksWorkedPerYear.defaultValue = defaultWeeksWorkedPerYear;

equivalentHourlyRate.innerText = "$" + (averageSalary.value / (weeksWorkedPerYear.value * hoursWorkedPerWeek.value));




