(function() {
	'use strict';

	angular
		.module('barebone.map')
		.factory('mapService', mapService);

	mapService.$inject = [];

	/* @ngInject */
	function mapService() {
		var data = {
			origin: {
					latitude : 51.2007318, 
					longitude : 0.3932167
					},
			zoomLevel: 15,
			annotations : [{
					picture : 'http://lorempixel.com/100/76/',
					title : 'Chilled in a Feild 2016',
					subtitle : 'Molestie et wisi.',
					body : 'Lobortis elit lobortis illum accumsan nibh',
					latitude : 51.2007318,
					longitude : 0.3932167
			}]
		};
		return data;
	}
})();