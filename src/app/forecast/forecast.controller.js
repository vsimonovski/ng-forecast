export default class ForecastController {
    constructor($stateParams, cityService, $scope) {
        'ngInject';
        this.cityService = cityService;
        this.days = $stateParams.id || 1;
        this.place = $stateParams.q;
        this.filters = {
            'today': true,
            '3 days': false,
            '7 days': false
        }

        cityService.getDaily(this.days, this.place).then((d) => {
            this.data = d;
        })

        // Get current returns current temperature, 
        // still not used in app.
        /*
        cityService.getCurrent(this.place).then((d) => {
            this.current = d;
        });
        */
    }

    setActive(filter) {
        let filters = this.filters;
        Object
            .keys(filters)
            .forEach((key) => {
                filters[key] = (key === filter) ? true : false;
            });
        this.cityService.manageView(filter, this.place).then((d) => {
            this.data = d;
            console.log(d);
        });
    }

    convertToCelsius(kelvin) {
        const TEMP = 273.15;
        return Math.floor(kelvin - TEMP);
    }

    convertToDate(dt) {
        return new Date(dt * 1000);
    }
}