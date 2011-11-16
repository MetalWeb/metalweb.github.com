$(document).ready(function() {
		var map;

		map=new GMaps({
					div: '#mapaG',
					lat: -12.114801,
					lng: -77.042994
				});
		map.zoomIn18();
				
		map.addMarker({	lat: -12.114801,
						lng: -77.042994,
						title: 'M&P Desserts'}
		);

});	