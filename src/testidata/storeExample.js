// These two should be in their own files under src/constanst/ and imported from there
const recurrenceTypes = Object.freeze({
    Once: Symbol("once"),
    Monthly: Symbol("monthly"),
    Bimonthly: Symbol("bimonthly"),
    Trimonthly: Symbol("trimonthly"),
    Custom: Symbol("custom"),
});

const months = Object.freeze({
    Jan: Symbol("january"),
    Feb: Symbol("february"),
    Mar: Symbol("march"),
    Apr: Symbol("april"),
    May: Symbol("may"), // i'm lazy only 5 months exist
});

const exampleStore = {
    budgets: {
        currentBudgetId: "uuid1", // Pretend this is an actual uuid
        allBudgets: {
            "uuid1": {
                name: "Minun budjetti >:)",
                incomes: [ // Incomes don't have categories, so a single array
                    {
                        name: "palkka",
                        amount: 2042.32,
                        recurrenceType: recurrenceTypes.Monthly,
                        date: "2023-12-31" // Follows ISO standard, yyyy-mm-dd
                    },
                    {
                        name: "asumistuki",
                        amount: 200.01,
                        recurrenceType: recurrenceTypes.Monthly,
                        date: "2023-12-31"
                    }
                ],
                expenses: {
                    asuminen: [ // Each expense category has its own list of expenses
                        {
                            name: "vuokra",
                            amount: 5000.00,
                            recurrenceType: recurrenceTypes.Monthly,
                            date: "2023-12-31"
                        },
                        {
                            name: "vesi",
                            amount: 999999999.99,
                            recurrenceType: recurrenceTypes.Bimonthly,
                            date: "2023-12-31"
                        }
                    ],
                    kulkeminen: [
                        {
                            name: "julkinen",
                            amount: 0,
                            recurrenceType: recurrenceTypes.Custom,
                            recurrenceMonths: [months.Jan, months.Feb, months.May],
                            date: "2023-12-31"
                        }
                    ],
                    lainat: [],
                    terveys: []
                }
            },
            "uuid2": {
                name: "skrrt",
                incomes: [],
                expenses: {
                    asuminen: [],
                    kulkeminen: [],
                    lainat: [],
                    terveys: []
                }
            }
        }
    }
};
