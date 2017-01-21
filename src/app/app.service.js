export default class HomeService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
        this.APPID = '52a5953e2a7bdc44bf863adcd65226c7';
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