exports.findFlightsByCountry = function (req, res) {
    res.json([
        {
            destination: 'Belgium',
            price: "23",
            dateRange: '4',
            cities: getCities()
        },
        {
            destination: 'Italy',
            price: "25",
            dateRange: '3',
            cities: getCities()
        },
        {
            destination: 'Portugal',
            price: "25",
            dateRange: '3',
            cities: getCities()
        },
        {
            destination: 'Greece',
            price: "37",
            dateRange: '4',
            cities: getCities()
        },
        {
            destination: 'Croatia',
            price: "43",
            dateRange: '5',
            cities: getCities()
        },
        {
            destination: 'Malta',
            price: "48",
            dateRange: '4',
            cities: getCities()
        }
    ]);
};

exports.findFlightsByCity = function (req, res) {
    res.json([
            {
                date: '1',
                day: 'Mo',
                price: "23",
                dateRange: '4'
            },
            {
                date: '2',
                day: 'Tu',
                price: "83",
                dateRange: '4'
            }, {
                date: '3',
                day: 'We',
                price: "28",
                dateRange: '4'
            }, {
                date: '4',
                day: 'Th',
                price: "32",
                dateRange: '4'
            }, {
                date: '5',
                day: 'Fr',
                price: "201",
                dateRange: '4'
            }, {
                date: '6',
                day: 'Sa',
                price: "28",
                dateRange: '4'
            }, {
                date: '8',
                day: 'Su',
                price: "30",
                dateRange: '4'
            }, {
                date: '9',
                day: 'Mo',
                price: "49",
                dateRange: '4'
            }, {
                date: '10',
                day: 'Tu',
                price: "25",
                dateRange: '4'
            }, {
                date: '11',
                day: 'We',
                price: "91",
                dateRange: '4'
            }, {
                date: '12',
                day: 'Th',
                price: "32",
                dateRange: '4'
            }, {
                date: '13',
                day: 'Fr',
                price: "201",
                dateRange: '4'
            }, {
                date: '14',
                day: 'Sa',
                price: "28",
                dateRange: '4'
            }, {
                date: '15',
                day: 'Su',
                price: "30",
                dateRange: '4'
            }, {
                date: '16',
                day: 'Mo',
                price: "49",
                dateRange: '4'
            }, {
                date: '17',
                day: 'Tu',
                price: "25",
                dateRange: '4'
            }, {
                date: '18',
                day: 'We',
                price: "91",
                dateRange: '4'
            }, {
                date: '19',
                day: 'Tu',
                price: "83",
                dateRange: '4'
            }, {
                date: '20',
                day: 'We',
                price: "28",
                dateRange: '4'
            }, {
                date: '21',
                day: 'Th',
                price: "32",
                dateRange: '4'
            }, {
                date: '22',
                day: 'Fr',
                price: "201",
                dateRange: '4'
            }, {
                date: '23',
                day: 'Sa',
                price: "28",
                dateRange: '4'
            }, {
                date: '24',
                day: 'Su',
                price: "30",
                dateRange: '4'
            }, {
                date: '25',
                day: 'Mo',
                price: "49",
                dateRange: '4'
            }, {
                date: '26',
                day: 'Tu',
                price: "25",
                dateRange: '4'
            }, {
                date: '27',
                day: 'We',
                price: "91",
                dateRange: '4'
            }, {
                date: '28',
                day: 'Th',
                price: "32",
                dateRange: '4'
            }, {
                date: '29',
                day: 'Fr',
                price: "201",
                dateRange: '4'
            }, {
                date: '30',
                day: 'Sa',
                price: "28",
                dateRange: '4'
            }, {
                date: '31',
                day: 'Su',
                price: "30",
                dateRange: '4'
            }
        ]
    );
};

function getCities() {
    return [
        {
            destination: 'Milan',
            price: "25",
            dateRange: '3'
        },
        {
            destination: 'Rome',
            price: "48",
            dateRange: '4'
        }]
}

