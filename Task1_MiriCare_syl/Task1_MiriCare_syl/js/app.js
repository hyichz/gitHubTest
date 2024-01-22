/******/
/*Dom7*/
/******/
var $ = Dom7;

var $$ = Dom7;

// DOM events for remark popup
$$('.popup-remarks').on('popup:open', function (e) {
  console.log('remarks popup open');
});
$$('.popup-remarks').on('popup:opened', function (e) {
  console.log('Remarks popup opened');
});



/*******/
/*Theme*/
/*******/
var theme = 'auto';
// var theme = 'ios';
// var theme = 'md';



/**********/
/*Init App*/
/**********/
var app = new Framework7({
	id: 'io.framework7.testapp',
	root: '#app',
	theme: theme,
	routes: routes,
	popup: {
		closeOnEscape: true,
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	},
	navbar: {
		mdCenterTitle: true,
		iosCenterTitle: true,
	},
	view: {
		stackPages: true, // page cache by default store for 2 pages history only, true enable all
	},
	dialog: {
		title: 'Sample',
		buttonOk: 'Ok',
		preloaderTitle: 'Loading ya..',
	},
	data: function() {
		return {
			user: {
				firstName: 'John',
				lastName: 'Doe',
			},
		};
	},
	methods: {
		helloWorld: function() {
			app.dialog.alert('Hello World!');
		},
		appJsPageFunction: function() {
			var currentComponent = app.views.main.router.currentPageEl.f7Component;
			currentComponent.homePageFunction();
		},
	},
	on: {
		/************/
		/*Page Event*/
		/************/
		pageMounted: function(event, page) {
			var current_page = app.views.main.router.currentRoute.path;
			var previous_page = app.views.main.router.previousRoute.path;
			var history = app.views.main.router.history;

			console.log(
				// `page previous : ` + previous_page + `\n` +
				`page current  : ` + current_page + `\n` +
				``);

			/*IF you want to use this navigate, need to make sure your page in route.js have async*/
			if (current_page == "/") {
				// app.views.main.router.navigate('/submitted_cases/');
			}
		},
		pageInit: function(event, page) {},
		pageReinit: function(event, page) {},
		pageBeforeIn: function(event, page) {},
		pageAfterIn: function(event, page) {},
		pageBeforeOut: function(event, page) {},
		pageAfterOut: function(event, page) {},
		pageBeforeUnmount: function(event, page) {},
		pageBeforeRemove: function(event, page) {},

		/***********/
		/*Tab Event*/
		/***********/
		tabInit: function(newTabEl, tabRoute) {
			var current_tab = app.views.main.router.currentRoute.path;
			var previous_tab = app.views.main.router.previousRoute.path;
			var history = app.views.main.router.history;

			console.log(
				// `tab  previous : ` + previous_tab + `\n` +
				`tab current  : ` + current_tab + `\n` +
				``);
		},
		tabMounted: function(newTabEl, tabRoute) {},
		tabBeforeRemove: function(oldTabEl, newTabEl, tabRoute) {},
	},
});



/***************/
/*Set Home page*/
/***************/
/*OR set in index.html using data-url="/" */
/*var mainView = app.views.create('.view-main', {
	url: '/',
});*/