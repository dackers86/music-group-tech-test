angular.module('presetController', [])

	// inject the preset service factory into our controlle
	.controller('mainController', ['$scope','$http','presets', function($scope, $http, presets) {
		$scope.formData = {};
		$scope.loading = true;

		presets.get()
			.success(function(data) {
				$scope.presets = data;
				$scope.loading = false;
			});

		$scope.createpreset = function() {

			if ($scope.formData.name != undefined) {
				$scope.loading = true;

				presets.create($scope.formData)

					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {};
						$scope.presets = data;
					});
			}
		};

		$scope.deletepreset = function(id) {
			$scope.loading = true;

			presets.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.presets = data;
				});
		};

		$scope.display_postive_negative_number = function(val){
			return (val < 0) ? val : "+" + val;
		};


	}]);
