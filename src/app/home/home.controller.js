export default class HomeController {
    constructor(cityService, $scope) {
        this.city = cityService.city;
        $scope.$watch('city', () => {
            cityService.city = this.city;
        })
        // Initialize bootstrap-material javascript
        $.material.init();
    }

    sendData(q) {
        console.log(q);
    }
}