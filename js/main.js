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
  $scope.appledevices = [ {text: 'Iphone 5s', img: 'img/apple/iphone5s.jpg'},
						  {text: 'Iphone 5', img: 'img/apple/iphone5.jpg'},
						  {text: 'Iphone 4s', img: 'img/apple/iphone4s.jpg'},
						  {text: 'Iphone 4', img: 'img/apple/iphone4.jpg'},
						  {text: 'Iphone 3G', img: 'img/apple/iphone3g.jpg'},
						  {text: 'iPad 3', img: 'img/apple/ipad3.jpg'},
						  {text: 'iPad 2', img: 'img/apple/ipad2.jpg'},
						  {text: 'iPad', img: 'img/apple/ipad.jpg'},
						  {text: 'iPad Air', img: 'img/apple/ipad-air.jpg'}];
  $scope.appledeviceoption = $scope.appledevices[0];

  $scope.appledevicessize = ['64GB', '32GB', '16GB'];

  $scope.samsungdevices = [{text:'Note3', img: 'img/device1.jpg'},
						   {text:'Note2', img: 'img/samsung/note2.jpg'},
						   {text:'Note', img: 'img/device3.jpg'},
						   {text:'GalaxyS4', img: 'img/device1.jpg'},
						   {text:'GalaxyS3', img: 'img/device1.jpg'},
						   {text:'GalaxyS2', img: 'img/device1.jpg'},
						   {text:'GalaxyS', img: 'img/device1.jpg'}];
  $scope.smsngdevice = $scope.samsungdevices[2];

  $scope.nokiadevices =[{text: 'Lumia 1520', img: 'img/lumia1520.jpg'},
					   {text: 'Lumia 1320', img: 'img/lumia1320.jpg'},
					   {text: 'Lumia 2520', img: 'img/lumaimot2520.jpg'},
					   {text: 'Lumia 1020', img: 'img/lumia1020.jpg'},
					   {text: 'Lumia 720', img: 'img/lumia720.jpg'},
					   {text: 'Lumia 925', img: 'img/lumia925.jpg'},
					   {text: 'Lumia 928', img: 'img/lumia928.jpg'},
					   {text: 'Lumia 625', img: 'img/lumia625.jpg'},
					   {text: 'Lumia 505', img: 'img/lumia505.jpg'}];
  $scope.nkiadeevices = $scope.nokiadevices[0];

  $scope.blackberrydevices = [{text: 'Q10', img: 'img/Q10.jpg'},
							  {text: 'Z10', img: 'img/Z10.jpg'},
							  {text: 'Q5', img: 'img/Q5.jpg'},
							  {text: 'Bold 9900', img: 'img/Bold-9900.jpg'},
							  {text: 'Bold 9780', img: 'img/Bold-9780.jpg'},
							  {text: 'Bold 9700', img: 'img/Bold-9700.jpg'},
							  {text: 'Bold 9860', img: 'img/Bold-9860.jpg'},
							  {text: 'Torch 9810', img: 'img/Torch-9810.jpg'},
							  {text: 'Curve 9320', img: 'img/Curve-9320.jpg'},
							  {text: 'Torch 9800', img: 'img/Torch-9800.jpg'},
							  {text: 'Curve 9220', img: 'img/Curve-9220.jpg'},
							  {text: 'Curve 9380', img: 'img/Curve-9380.jpg'},
							  {text: 'Curve 9360', img: 'img/Curve-9360.jpg'},
							  {text: 'Curve 9300', img: 'img/Curve-9300.jpg'},
							  {text: 'Curve 8520', img: 'img/Curve-8520.jpg'}];
  $scope.bbdevices = $scope.blackberrydevices[0];

	$scope.GetImage = function(){
		var imagepath = $('.devicedropdown option:selected').data('image');
		var devicename = $('.devicedropdown option:selected').val();
		var container = $('#device');
		var deviceimage = $('#device img');
		container.slideDown().addClass('show-device');
		deviceimage.attr('src', imagepath);
		$('#phone-name').text(devicename);
		console.log(devicename);

		console.log($scope.appledeviceoption);
	};

	$scope.setDefault = function(){
		$('select.devicedropdown option:first-child').text('Select device');
		console.log('test');
	}
}
