$(document).foundationTopBar();



// function SubmitFormCtlr($scope){
// 	$scope.test = 4;

// 	$scope.makes = ['Apple', 'Samsung', 'Blackberry', 'Nokia', 'Google', 'LG'];
// }

function SubmitDevices($scope) {
  $scope.makes = ['Apple', 'Samsung', 'Nokia', 'Blackberry'];
  $scope.selection = $scope.makes[0];

  $scope.appledevices = ['Iphone5s', 'Iphone5', 'Iphone4s', 'Iphone4', 'Iphone3G', 'ipad', 'iPad 2', 'iPad 3', 'iPad air'];
  $scope.appledeviceoption = $scope.appledevices[0];
  
  $scope.appledevicessize = ['64GB', '32GB', '16GB'];
  $scope.samsungdevices = ['Note3', 'Note2', 'Note', 'Galaxy S3', 'Galaxy S2', 'Galaxy S'];
  $scope.nokiadevices = ['Lumia 1520', 'Lumia 1320', 'Lumia 2520', 'Lumia 1020', 'Lumia 720', 'Lumia 925', 'Lumia 928', 'Lumia 625', 'Lumia 505'];
  $scope.blackberrydevices = ['Q10', 'Z10', 'Q5', 'Bold 9900 ', 'Bold 9790', 'Bold 9780', 'Bold 9700', 'Bold 9860', 'Torch 9810', 'Curve 9320',  'Torch 9800',  'Curve 9220',  'Curve 9380',  'Curve 9360',  'Curve 9300',  'Curve 8520'];

}