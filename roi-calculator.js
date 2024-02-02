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

const companyName = document.getElementById("company-name")
const prospectiveCustomerEmail = document.getElementById("prospective-customer-email")
const fivetranContactEmail = document.getElementById("fivetran-contact-email")

let inputs = document.getElementsByTagName("input")
for (let input of inputs) {
    input.addEventListener("change", updateEquivalentHourlyRate)
}

averageSalary.step = 1000;

let JSONDiv = document.createElement("div")
document.body.appendChild(JSONDiv)

fivetranContractPeriod.defaultValue = defaultFivetranContractPeriod;
estOnboardingTime.defaultValue = defaultEstOnboardingTime;
averageSalary.defaultValue = defaultSalary;
hoursWorkedPerWeek.defaultValue = defaultHoursWorkedPerWeek;
weeksWorkedPerYear.defaultValue = defaultWeeksWorkedPerYear;

function updateEquivalentHourlyRate(){
    equivalentHourlyRate.innerText = "$" + Math.floor(averageSalary.value / (weeksWorkedPerYear.value * hoursWorkedPerWeek.value));
    let companyDetails = {
        "companyName": companyName.value,
        "prospectiveCustomerEmail": prospectiveCustomerEmail.value,
        "fivetranContactEmail": fivetranContactEmail.value,
        "averageSalary": averageSalary.value,
        "equivalentHourlyRate": equivalentHourlyRate.value
    }

    JSONDiv.innerText = JSON.stringify(companyDetails);
}

