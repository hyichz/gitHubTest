var routes = [{

		//Index page aka home page
		path:'/',
		componentUrl:'./pages/home.html',
	}, {
		//Second page contacted case
		path:'/contacted_case/',
		componentUrl:'./pages/contacted_case.html',

		tabs: [
	{
		path: '/tab1/',
		id: 'tab1_new',
		componentUrl: './pages/tab1_new.html',
	}, {
		path: '/',
		id: 'tab2_inprogress',
		componentUrl: './pages/tab2_inprogress.html',
	}, {
		path: '/tab3/',
		id: 'tab3_due',
		componentUrl: './pages/tab3_due.html',
	}, {
		path: '/tab4/',
		id: 'tab4_expired',
		componentUrl: './pages/tab4_expired.html',
	}, {
		path:'/tab5/',
		id: 'tab5_solved',
		componentUrl: './pages/tab5_solved.html',
	}, ],

	}, {
		//Third page view case
		path:'/view_case_detail/',
		componentUrl:'./pages/view_case_detail.html',

		tabs : [
	{
		path:'/',
		id:'tabs1_case',
		componentUrl:'./pages/tabs1_case.html',
	},{
		path:'/tabs2/',
		id:'tabs2_location',
		componentUrl:'./pages/tabs2_location.html',
	}, {
		path:'/tabs3/',
		id:'tabs3_photo',
		componentUrl:'./pages/tabs3_photo.html',
	}, {
		path:'/tabs4/',
		id:'tabs4_update',
		componentUrl:'./pages/tabs4_update.html',
	} ]
	}, 
	{

		/*****/
		/*404*/
		/*****/
		/*Default route (404 page). MUST BE THE LAST*/
		path: '(.*)',
		options: {
			transition: 'f7-parallax',
		},
		async (routeTo, routeFrom, resolve, reject) {

			var new_routeTo = (routeTo.url).replace(routeFrom.url, '');
			console.log(new_routeTo);

			/* IF, the link contain words look like website url, open it in browser*/
			/* ELSE, display 404 */
			if (new_routeTo.includes('http') || new_routeTo.includes('.com') || new_routeTo.includes('.my')) {
				reject();
				appOpenWithBrowser(new_routeTo);
			} else {
				resolve({
					componentUrl: './pages/404.html',
				})
			}
		},
	}, ];