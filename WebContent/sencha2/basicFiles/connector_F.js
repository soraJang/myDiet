function connector_F(listID) {
	
	switch (listID) {
	case 'runningHelper':
		return runningHelper_F();
	case 'upWeightHelper':
		return upWeightHelper_F();
	case 'downWeightHelper':
		return downWeightHelper_F();
	case 'video1':
		return videos_F(1);
	case 'video2':
		return videos_F(2);
	case 'video3':
		return videos_F(3);
	case 'searchingExercise':
		document.location.href = (recommend_F('exercise'));
	case 'searchingFood':
		document.location.href = (recommend_F('food'));
	case 'photos':
		return photos_F();
//	case 'calendarCheck':
//		return calendarChecker_F();
	default:
		nestedList.setHtml("empty list");
		break;
	}
}