angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {brand: 'Lenovo', name:'IdeaPad 3 15', price: 1700, img:'Products/Laptop/Lenovo/Lenovo - IdeaPad 3 15 Laptop - Intel Core i3-1005G1 - 8GB Memory - 256GB SSD - Platinum Grey/6426707_rd.jpg', desc: 'Storage: SSD 256gb\nRam: 8gb\nGraphics: Intel UHD Graphics\nCPU: Intel 10th Generation Core i3\nBattery life: 7.5hrs', category: 'laptop'},
        {brand: 'Samsung', name:'somesung', price: 700, img:'xxxxxx', desc: 'Storage: SSD 256gb\nRam: 8gb\nGraphics: Intel UHD Graphics\nCPU: Intel 10th Generation Core i3\nBattery life: 7.5hrs', category: 'laptop'},
        {brand: 'Lenovo', name:'IdeaPad 3 15', price: 1700, img:'xxxxxx', desc: 'Storage: SSD 256gb\nRam: 8gb\nGraphics: Intel UHD Graphics\nCPU: Intel 10th Generation Core i3\nBattery life: 7.5hrs', category: 'laptop'},
    ];
});
 