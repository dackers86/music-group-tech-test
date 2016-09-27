angular.module('presetService', [])
	.factory('presets', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/presets');
			},
			create : function(presetData) {
				return $http.post('/api/presets', presetData);
			},
			delete : function(id) {
				return $http.delete('/api/presets/' + id);
			}
		}
	}]);
