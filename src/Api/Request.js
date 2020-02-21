
const getCompanies = async () => {
    const response = await fetch('https://recruitment.hal.skygate.io/companies');
    const body = await response.json();
    console.log(body)

    const tableToResponse = await body.map(async (element) => {
        const income = await getIncomesById(element.id);
        const arrayOfIncome = income.incomes.map(inc => +inc.value);
        return { ...element, total: sumOfArrayItems(arrayOfIncome), avg: sumOfArrayItems(arrayOfIncome)/arrayOfIncome.length }
    });
    return Promise.all(tableToResponse);
    // return tableToResponse;
};

const getIncomesById = async (id) => {
    const response = await fetch('https://recruitment.hal.skygate.io/incomes/' + id);
    const body = await response.json();
    return body;
};

const sumOfArrayItems = (array) => {
    let sum = 0;
    array.forEach( (element) => { sum = sum + element });
    return sum;
};

export default getCompanies;