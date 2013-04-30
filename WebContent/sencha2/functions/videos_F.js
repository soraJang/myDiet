function videos_F(videoNum) {

	var video1 = new Ext.Panel({
		fullscreen : true,
		items : [ {
			xtype : 'video',
			url : "../media/videoSample.mp4"
		} ]
	});

	var video2 = new Ext.Panel({
		fullscreen : true,
		items : [ {
			xtype : 'video',
			url : "../media/videoSample.mp4"
		} ]
	});

	var video3 = new Ext.Panel({
		fullscreen : true,
		items : [ {
			xtype : 'video',
			url : "../media/videoSample.mp4"
		} ]
	});

	switch (videoNum) {
	case 1:
		return video1;
	case 2:
		return video2;
	case 3:
		return video3;
	}

}