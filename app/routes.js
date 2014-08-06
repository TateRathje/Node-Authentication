module.exports = function(app, passport) {

		// HOME PAGE (with login links) =============
		app.get('/', function(req, res) {
			res.render('index.ejs');
		});

		// LOGIN ====================================
		// ==========================================
		// show the login form
		app.get('./login', function(req, res) {
			res.render('login.ejs', { message: req.flash('loginMessage') });	
		});

		// process the login form
		// app.post('./login', do all our passport stuff here);

		// SIGNUP ====================================
		// ===========================================
		// show the signup form
		app.get('/signup', function(req, res) {
			res.render('signup.ejs', { message: req.flash('signupMessage') });
		});

		// process the signup form
		// app.post('./signup', do all our passport stuff here);

		// PROFILE SECTION ============================
		// ============================================
		app.get('/profile', isLoggedIn, function(req, res) {
			res.render('profile.ejs', {
				user : req.user
			});
		});

		// LOGOUT =====================================
		// ============================================
		
}