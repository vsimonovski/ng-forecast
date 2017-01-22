export default class AppService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.APPID = 'aec37e7571e93486dba2bbda5929c241';
    }

    getCurrent(place) {
        return this.$http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast/weather',
            params: {
                q: place,
                APPID: this.APPID,
                cnt: '4'
            }
        }).then((response) => {
            return response.data.list;
        })
    }

    getDaily(days, place) {
        return this.$http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
            params: {
                q: place,
                APPID: this.APPID,
                cnt: days
            }
        }).then((response) => {
            return response.data.list;
        }, (response) => {});
    }

    setActiveFilter(filters, filter) {
        Object
            .keys(filters)
            .forEach((key) => {
                filters[key] = (key === filter) ? true : false;
            });
    }

    manageView(filter, place) {
        switch (filter) {
            case 'today':
                return this.getDaily('1', place);
                break;
            case '3 days':
                return this.getDaily('3', place);
                break;
            case '7 days':
                return this.getDaily('7', place);
                break;

        }
    }
}