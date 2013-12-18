$(document).foundationTopBar();



// function SubmitFormCtlr($scope){
// 	$scope.test = 4;

// 	$scope.makes = ['Apple', 'Samsung', 'Blackberry', 'Nokia', 'Google', 'LG'];
// }

// Prevent Default

var app = angular.module('app', []);

app.directive('eatClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
        });
    }
})

function SubmitDevices($scope) {
  $scope.makes = ['Apple', 'Samsung', 'Nokia', 'Blackberry'];
  $scope.selection = $scope.makes[0];


  // $scope.appledevices = ['Iphone5s', 'Iphone5', 'Iphone4s', 'Iphone4', 'Iphone3G', 'ipad', 'iPad 2', 'iPad 3', 'iPad air'];
  $scope.appledevices = [ {text: 'Iphone 5s', img: 'img/apple/iphone5s.jpg', price : 330},
						  {text: 'Iphone 5', img: 'img/apple/iphone5.jpg', price : 330},
						  {text: 'Iphone 4s', img: 'img/apple/iphone4s.jpg', price : 330},
						  {text: 'Iphone 4', img: 'img/apple/iphone4.jpg', price : 330},
						  {text: 'Iphone 3G', img: 'img/apple/iphone3g.jpg', price : 330},
						  {text: 'iPad 3', img: 'img/apple/ipad3.jpg', price : 330},
						  {text: 'iPad 2', img: 'img/apple/ipad2.jpg', price : 330},
						  {text: 'iPad', img: 'img/apple/ipad.jpg', price : 330},
						  {text: 'iPad Air', img: 'img/apple/ipad-air.jpg', price : 330}];
  $scope.appledeviceoption = $scope.appledevices[0];

  $scope.appledevicessize = ['64GB', '32GB', '16GB'];

  $scope.samsungdevices = [{text:'Note3', img: 'img/device1.jpg', price : 330, price : 330},
						   {text:'Note2', img: 'img/samsung/note2.jpg', price : 330},
						   {text:'Note 1', img: 'img/device3.jpg', price : 330},
						   {text:'GalaxyS4', img: 'img/device1.jpg', price : 330},
						   {text:'GalaxyS3', img: 'img/device1.jpg', price : 330},
						   {text:'GalaxyS2', img: 'img/device1.jpg', price : 330},
						   {text:'GalaxyS', img: 'img/device1.jpg', price : 330}];
  $scope.smsngdevice = $scope.samsungdevices[2];

  $scope.nokiadevices =[{text: 'Lumia 1520', img: 'img/lumia1520.jpg', price : 330},
					   {text: 'Lumia 1320', img: 'img/lumia1320.jpg', price : 330},
					   {text: 'Lumia 2520', img: 'img/lumaimot2520.jpg', price : 330},
					   {text: 'Lumia 1020', img: 'img/lumia1020.jpg', price : 330},
					   {text: 'Lumia 720', img: 'img/lumia720.jpg', price : 330},
					   {text: 'Lumia 925', img: 'img/lumia925.jpg', price : 330},
					   {text: 'Lumia 928', img: 'img/lumia928.jpg', price : 330},
					   {text: 'Lumia 625', img: 'img/lumia625.jpg', price : 330},
					   {text: 'Lumia 505', img: 'img/lumia505.jpg', price : 330}];
  $scope.nkiadeevices = $scope.nokiadevices[0];

  $scope.blackberrydevices = [{text: 'Q10', img: 'img/Q10.jpg', price : 330},
							  {text: 'Z10', img: 'img/Z10.jpg', price : 330},
							  {text: 'Q5', img: 'img/Q5.jpg', price : 330},
							  {text: 'Bold 9900', img: 'img/Bold-9900.jpg', price : 330},
							  {text: 'Bold 9780', img: 'img/Bold-9780.jpg', price : 330},
							  {text: 'Bold 9700', img: 'img/Bold-9700.jpg', price : 330},
							  {text: 'Bold 9860', img: 'img/Bold-9860.jpg', price : 330},
							  {text: 'Torch 9810', img: 'img/Torch-9810.jpg', price : 330},
							  {text: 'Curve 9320', img: 'img/Curve-9320.jpg', price : 330},
							  {text: 'Torch 9800', img: 'img/Torch-9800.jpg', price : 330},
							  {text: 'Curve 9220', img: 'img/Curve-9220.jpg', price : 330},
							  {text: 'Curve 9380', img: 'img/Curve-9380.jpg', price : 330},
							  {text: 'Curve 9360', img: 'img/Curve-9360.jpg', price : 330},
							  {text: 'Curve 9300', img: 'img/Curve-9300.jpg', price : 330},
							  {text: 'Curve 8520', img: 'img/Curve-8520.jpg', price : 330}];

	$scope.problems = [{text: 'Not turning on?', description: 'Totam Rem Aperiam, Eaque Ipsa Quae', done: false, deduction: 20},
					   {text: 'Broken Screen?', description: 'Totam Rem Aperiam, Eaque Ipsa Quae',done: false, deduction: 20},
					   {text: 'Home Button Broken?', description: 'Totam Rem Aperiam, Eaque Ipsa Quae',done: false, deduction: 20},
					   {text: 'Lorem Ipsum Dolor?', description: 'Totam Rem Aperiam, Eaque Ipsa Quae',done: false, deduction: 20}];

  $scope.bbdevices = $scope.blackberrydevices[0];

	$scope.GetImage = function(){
		var imagepath = $('.devicedropdown option:selected').data('image');
		var deviceprice = $('.devicedropdown option:selected').data('price');
		var devicename = $('.devicedropdown option:selected').val();
		var container = $('#device');
		var deviceimage = $('#device img');
		container.slideDown().addClass('show-device');
		deviceimage.attr('src', imagepath);
		$('#phone-name').text(devicename);
		$('#phone-price').text(deviceprice);
		console.log(devicename);
		console.log($scope.appledeviceoption);
	};

	$scope.calculate = function(even){
		event.preventDefault();
		var deviceprice = $('.devicedropdown option:selected').data('price');

		angular.forEach($scope.problems, function(value, deduction){
			var total = deviceprice -= value.deduction;
			console.log(total);
		});
		$('#phone-price').text(deviceprice);
	};
}
