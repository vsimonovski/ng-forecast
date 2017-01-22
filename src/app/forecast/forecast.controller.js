export default class ForecastController {
    constructor($stateParams, appService, $scope) {
        'ngInject';
        this.appService = appService;
        this.days = $stateParams.id || 1;
        this.place = $stateParams.q;
        this.filters = {
            'today': true,
            '3 days': false,
            '7 days': false
        }

        // Get current returns current temperature, 
        // still not used in app.
        /*
        appService.getCurrent(this.place).then((d) => {
            this.current = d;
        });
        */
    }

    setActive(filter) {
        let filters = this.filters;
        let appService = this.appService;
        appService.setActiveFilter(filters, filter);
        appService.manageView(filter, this.place).then((d) => {
            this.data = d;
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