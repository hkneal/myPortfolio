(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-me/about-me.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n    width: 100%;\n    position: absolute;\n}\n\nimg {\n    display: block;\n    max-width: 60%;\n    margin: auto;\n}\n\nvideo {\n    background-color: black;\n    border-radius: 10px;\n}\n\np {\n    text-align: center;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: 1.5rem;\n    font-weight: 500;\n    color: black;\n    margin: 3.5%;\n    margin-top: 1%;\n    margin-bottom: 4%;\n}\n\nh1 {\n    font-size: 4.2375rem;\n    text-align: center;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-weight: 400;\n}\n\nh2 {\n    text-align: center;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: 1.5rem;\n    font-weight: 100;\n    color: white;\n}\n\nem {\n    color: blue;\n}\n\nbutton {\n    background-image: linear-gradient(to bottom, rgb(177, 185, 194), rgb(63, 64, 66));\n    color: white;\n    border-radius: 50px;\n    padding: .85%;\n    box-shadow: 5px 5px 10px black;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: 1.5rem;\n    font-weight: 400;\n    /* -webkit-transition: width 1s, height 1s, transform 1s;\n    transition: width 1s, height 1s, transform 1s; */\n}\n\nbutton:focus {\n    outline: 0;\n}\n\nbutton:hover {\n    background-image: linear-gradient(to bottom, rgb(190, 212, 234), rgb(32, 53, 95));\n    /* -webkit-transition: rotate(360deg);\n    transform: rotate(360deg); */\n}\n\na {\n    color: inherit;\n    color: white;\n    text-decoration: none;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\na:hover {\n    color: rgb(163, 159, 157);\n}\n\nfooter {\n    background-color: black;\n    height: 3.75em;\n    max-width: 100%;\n}\n\nul {\n    margin: 2%;\n    margin-top: 0px;\n    margin-left: 10%;\n    -webkit-column-count: 2;\n            column-count: 2;\n    list-style-type: none;\n}\n\nli {\n    color: white;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1rem;\n}\n\n.whoAmI {\n    display: block;\n    margin: auto;\n    margin-top: 1%;\n}\n\n.items {\n    color: white;\n    width: 60%;\n    margin: auto;\n    margin-top: 6.5%;\n    background-color: black;\n}\n\n.hobbies {\n    color: white;\n    background-image: linear-gradient(to bottom, rgb(183, 183, 183), rgb(33, 34, 43));\n    max-width: 61%;\n    display: block;\n    margin: auto;\n    margin-top: 2.5%;\n    z-index: 9999;\n    border-radius: 50px;\n    border: 2px solid rgb(253, 254, 255);\n    box-shadow: 5px 5px 10px black;\n    padding: 1%;\n}\n\n.hobbies video {\n    max-width: 40%;\n}\n\n.hobbies p {\n    margin: 0px;\n    text-align: center;\n    margin-top: .1875rem;\n    font-size: 1rem;\n    color: rgb(252, 249, 249);\n}\n\n.alexa {\n    width: 100%;\n    margin-top: 3%;\n    background-color: rgb(255, 255, 255);\n}\n\n.alexa a {\n    color: black;\n    font-size: 1.5rem;\n}\n\n.alexa a:hover {\n    color: white;\n}\n\n.projects {\n    margin-top: 5%;\n    background-color: gainsboro;\n    padding-top: 2%;\n    padding-bottom: 4%;\n}\n\n.projectsExpanded {\n    max-height: 95%;\n}\n\n.projectDetails {\n    margin-top: 3%;\n    background-image: linear-gradient(to bottom, rgb(183, 183, 183), rgb(33, 34, 43));\n    border-radius: 20px;\n    border: 2px solid gainsboro;\n    box-shadow: 5px 5px 10px black;\n    padding: 10px;\n}\n\n.projectDetails p {\n    color: white;\n    text-align: left;\n    margin-bottom: 10px;\n}\n\n.projectDiv {\n    display: inline-block;\n    vertical-align: top;\n    margin: 2%;\n    margin-left: 0px;\n    margin-top: 4.5%;\n    width: 50%;\n    text-align: left;\n}\n\n.videoContainer video {\n    max-width: 100%;\n}\n\n.videoContainer {\n    margin: 1%;\n    margin-top: 4%;\n    margin-left: 8%;\n    max-width: 34%;\n    margin-bottom: 0px;\n    display: inline-block;\n    color: white;\n}\n\n.videoDiv {\n    max-width: 100%;\n    position: relative;\n    transition: .3s;\n}\n\n.videoDiv :not(video) {\n    position: absolute;\n    top: 40%;\n    z-index: 1;\n    text-align: center;\n    width: 100%;\n    opacity: 0;\n    transition: .3s;\n}\n\n.videoDiv a {\n    position: absolute;\n    color: white;\n    text-decoration: none;\n    font-family: Copperplate / Copperplate Gothic Light, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 2rem;\n    margin-left: -50%;\n}\n\n.videoDiv:hover video {\n    -webkit-filter: blur(2px) brightness(60%);\n            filter: blur(2px) brightness(60%);\n}\n\n.videoDiv:hover :not(video) {\n    opacity: 1;\n}\n\n#newspaperPic {\n    max-width: 20%;\n    border: 1px solid lightgrey;\n    border-radius: 15px;\n}\n\n#hobbiesButton {\n    max-width: 58%;\n    display: block;\n    margin: auto;\n    margin-top: 2%;\n}\n\n#building {\n    max-width: 26%;\n    margin: 2.5%;\n}\n\n#parentingPic {\n    max-width: 23%;\n    margin: 2%;\n    margin-left: 2.3%;\n}\n\n#building,\n#parentingPic {\n    margin-top: 1%;\n    margin-bottom: 0px;\n    border-radius: 10px;\n    display: inline-block;\n}\n\n#alexaImg {\n    width: 10%;\n    position: inherit;\n    margin: 10px;\n    margin-top: 40px;\n    margin-left: 46%;\n    vertical-align: middle;\n    border: 1px solid lightgrey;\n    border-radius: 15px;\n    display: inline-block;\n}\n\n#alexaDescription {\n    margin-bottom: 1%;\n    color: black;\n}\n\n#alexaDescription a {\n    color: blue;\n    font-size: 1.3rem;\n    font-family: minerva-modern, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n}\n\n#carpentry {\n    display: inline-block;\n    margin: 1%;\n    margin-left: 9.5%;\n}\n\n#gaming,\n#parenting {\n    display: inline-block;\n    margin: 1%;\n    margin-top: 0px;\n    margin-left: 26%;\n}\n\n#gaming {\n    margin-left: 22.2%;\n    position: inherit;\n}\n\n#close {\n    display: inline-block;\n    margin-top: 1%;\n    margin-left: 25%;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: 1.2rem;\n    font-weight: 400;\n    color: white;\n}\n\n#close:hover,\n.closeDetails:hover {\n    color: rgb(129, 130, 129);\n}\n\n#otherInterests {\n    display: inline-block;\n    margin-left: 39%;\n}\n\n.projectDesc {\n    display: inline-block;\n    vertical-align: top;\n    margin: 2%;\n    text-align: left;\n}\n\n.projectButton {\n    display: inline-block;\n    margin-top: 1%;\n    padding: 1%;\n    padding-left: 2.5%;\n    padding-right: 2.5%;\n    font-size: 1.5rem;\n    margin-left: 32%;\n}\n\n.clickforDemo {\n    color: black;\n    text-decoration: none;\n    font-style: normal;\n    font-size: 1.5rem;\n}\n\n.clickforDemo:hover {\n    color: white;\n}\n\n.closeDetails {\n    display: inline-block;\n    margin-top: 1%;\n    margin-left: 85%;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: 1em;\n    font-weight: 400;\n    color: white;\n}\n\n.mobileView {\n    display: none;\n}\n\n/* @media only screen {\n    .closeDetails {\n        margin-left: 80%;\n    }\n} */\n\n@media only screen and (max-width: 812px) and (max-height: 812px) {\n    .mobileView {\n        display: initial;\n    }\n    .desktopView {\n        display: none;\n    }\n    .videoDiv:hover video {\n        -webkit-filter: blur(0px) brightness(100%);\n                filter: blur(0px) brightness(100%);\n    }\n    .videoDiv:hover :not(video) {\n        opacity: 0;\n    }\n    p,\n    li,\n    a {\n        /* font-family: matrix-ii, serif;\n        font-size: 1rem;\n        font-family: default-gothic, sans-serif;\n        font-family: tenby-four, sans-serif; */\n        font-family: josefin, sans-serif;\n        font-style: normal;\n        font-weight: 300;\n    }\n    button {\n        /* background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(8, 8, 8)), to(rgb(63, 64, 66)));\n        background-image: -webkit-linear-gradient(top, rgb(8, 8, 8), rgb(63, 64, 66));\n        background-image: -moz-linear-gradient(top, rgb(8, 8, 8), rgb(63, 64, 66));\n        background-image: linear-gradient(to bottom, rgb(8, 8, 8), rgb(63, 64, 66)); */\n        /* font-family: matrix-ii, serif;\n        font-size: 1rem;\n        font-family: default-gothic, sans-serif;\n        font-family: tenby-four, sans-serif; */\n        font-family: josefin, sans-serif;\n        font-style: normal;\n        font-weight: 300;\n        padding-top: 2%;\n    }\n    #bikeVideo {\n        background-image: url(\"/assets/images/Screen_Shot.png\");\n    }\n}\n\n@media only screen and (aspect-ratio: 1600/2560) {\n    .items {\n        margin-top: 9.5%;\n    }\n}\n\n@media only screen and (max-width: 1030px) {\n    img {\n        max-width: 75%;\n    }\n    .items {\n        margin-top: 9.5%;\n        width: 75%;\n    }\n    #otherInterests {\n        margin-left: 37%;\n    }\n    #close {\n        margin-left: 16%;\n    }\n    #carpentry {\n        margin-left: 7.5%;\n    }\n    #gaming,\n    #parenting {\n        margin-left: 18.2%;\n    }\n}\n\n@media only screen and (aspect-ratio: 1024/1366) {\n    img {\n        max-width: 75%;\n    }\n    .items {\n        margin-top: 9.5%;\n        width: 75%;\n    }\n    #otherInterests {\n        margin-left: 37%;\n    }\n    #close {\n        margin-left: 16%;\n    }\n    #carpentry {\n        margin-left: 7.5%;\n    }\n    #gaming,\n    #parenting {\n        margin-left: 18.2%;\n    }\n}\n\n@media only screen and (aspect-ratio: 1366/1024) {\n    .items {\n        margin-top: 7.5%;\n    }\n    #gaming,\n    #parenting {\n        margin-left: 23.2%;\n    }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {\n    #gaming {\n        margin-left: 17.2;\n    }\n}\n\n@media only screen and (max-width: 768px) {\n    img {\n        max-width: 80%;\n    }\n    h1 {\n        font-size: 2.7em;\n    }\n    .items {\n        margin-top: 10%;\n        width: 80%;\n    }\n    .hobbies {\n        max-width: 80%;\n    }\n}\n\n@media only screen and (aspect-ratio: 736/414) {\n    .closeDetails {\n        margin-left: 75%;\n    }\n    .videoContainer {\n        max-width: 43%;\n        margin-left: 3%;\n    }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: landscape) {\n    img {\n        max-width: 93%;\n    }\n    .items {\n        width: 93%;\n    }\n    .hobbies {\n        max-width: 71%;\n    }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) {}\n\n@media only screen and (max-width: 720px) {}\n\n@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: landscape) {\n    /* iphone 6, 7 */\n    h2 {\n        font-size: 1rem;\n    }\n    h1 {\n        font-size: 2.5rem;\n    }\n    p {\n        font-size: 1rem;\n    }\n    a {\n        font-size: 1rem;\n    }\n    li {\n        font-size: .7em;\n    }\n    .projectButton {\n        font-size: 1rem;\n    }\n    .closeDetails {\n        margin-left: 75%;\n    }\n    #otherInterests {\n        margin-left: 30%;\n        font-size: 1.5rem;\n    }\n    #gaming {\n        margin-left: 23.2%;\n    }\n    #parenting {\n        margin-left: 22.2%;\n    }\n    #close {\n        margin-left: 10%;\n    }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) {}\n\n@media only screen and (max-width: 480px) {\n    h2 {\n        font-size: 1rem;\n    }\n    h1 {\n        font-size: 1.4rem;\n    }\n    button {\n        font-size: .7rem;\n    }\n    p {\n        font-size: .7rem;\n    }\n    a {\n        font-size: .7rem;\n    }\n    li {\n        font-size: .7em;\n    }\n    .items {\n        margin-top: 12.5%;\n    }\n    .projectButton {\n        font-size: .7rem;\n    }\n    .closeDetails {\n        margin-left: 75%;\n        font-size: .7em;\n    }\n    .videoContainer {\n        max-width: 43%;\n        margin-left: 3%;\n    }\n    .alexa a {\n        font-size: .7em;\n    }\n    #alexaDescription a,\n    #alexaTry {\n        font-size: .7rem;\n    }\n    #otherInterests {\n        margin-left: 29%\n    }\n    #close {\n        font-size: .7rem;\n        margin-left: 10%;\n    }\n    #building {\n        margin: 2%;\n    }\n}\n\n@media only screen and (max-width: 378px) {\n    .hobbies {\n        max-width: 85%;\n        border-radius: 35px;\n    }\n    .videoContainer {\n        display: block;\n        margin: auto;\n        margin-top: 5%;\n        max-width: 68%;\n    }\n    p {\n        font-size: .9rem;\n    }\n    .alexa a {\n        font-size: .8rem;\n    }\n    .projectDiv {\n        display: block;\n        margin: auto;\n        margin-top: 2%;\n        width: 85%;\n    }\n    .projectButton {\n        display: block;\n        margin: auto;\n        margin-left: 0p;\n        /* 0p error on purpose */\n    }\n    #newspaperPic {\n        max-width: 31%;\n    }\n    #alexaImg {\n        width: 15%;\n    }\n}\n\n@media only screen and (max-width: 375px) {\n    .items {\n        margin-top: 15.5%;\n    }\n}\n\n@media only screen and (aspect-ratio: 320/568) {\n    #otherInterests {\n        margin-left: 25%;\n    }\n    #building {\n        margin: 1%;\n    }\n}\n\n@media only screen and (aspect-ratio: 568/320) {\n    #building {\n        margin: 1.5%;\n    }\n}"

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <!-- <img src=\"assets/images/IMG_0843.jpg\" alt=\"\"> -->\n    <div class=\"items\">\n        <!-- <h2>Welcome to my website!</h2>\n        <h2>I am</h2> -->\n        <h1>Welcome to my website!</h1>\n    </div>\n    <img src=\"assets/images/IMG_3222.jpg\" alt=\"\">\n    <div class=\"whoAmI\">\n        <h1>Who Am I?</h1>\n    </div>\n    <div class=\"generalDescription\">\n        <p>I'm a <em>Software Engineer</em> with a dedicated focus toward <em>Responsive Web Design & Web Development</em>. I have a comprehensive background and experience with the <em>Python & MEAN</em> full stacks, a proven ability to develop skills quickly,\n            and a desire to continue to learn. I'm also a dedicated volunteer with a passion, and a belief in, helping and understanding others.\n        </p>\n        <img id=\"newspaperPic\" src=\"assets/images/yc_hk Newspaper pic.jpg\" alt=\"\">\n        <button *ngIf=\"!showhobbies\" id=\"hobbiesButton\" style=\"cursor:pointer\" (click)=\"showHobbies()\">What do I do when I'm not coding?</button>\n        <div *ngIf=\"showhobbies\" class=\"hobbies\" (click)=\"showHobbies()\">\n            <h2 id=\"otherInterests\"> My other passions</h2>\n            <h3 style=\"cursor:pointer\" id=\"close\">Close X</h3>\n            <p>click to explore further</p>\n            <a style=\"cursor:pointer\"><img (click)=\"carpentry()\" id=\"building\" src=\"assets/images/IMG_0534.jpg\" alt=\"\"></a>\n            <!-- <a style=\"cursor:pointer\"><img (click)=\"gaming()\" id=\"gamingPic\" src=\"assets/images/IMG_0334.jpg\" alt=\"\"></a> -->\n            <!-- <a style=\"cursor:pointer\"><video loop autoplay> <source src=\"/assets/videos/Chess_Play.mp4\"></video></a> -->\n            <!-- <a style=\"cursor:pointer\"><video (click)=\"gaming()\" loop autoplay> <source src=\"/assets/videos/Chess_Play_color.mp4\"></video></a> -->\n            <a class=\"desktopView\" style=\"cursor:pointer\"><video (click)=\"gaming()\" loop autoplay> <source src=\"/assets/videos/Chess_gamplay_color_low.mp4\"></video></a>\n            <video class=\"mobileView\" controls> <source src=\"/assets/videos/Chess_gamplay_color_low.mp4\" type=\"video/mp4\"></video>\n            <a style=\"cursor:pointer\"><img (click)=\"parenting()\" id=\"parentingPic\" src=\"assets/images/IMG_1370.jpg\" alt=\"\"></a>\n            <a id=\"carpentry\" (click)=\"carpentry()\" style=\"cursor:pointer\">Carpentry</a>\n            <a id=\"gaming\" (click)=\"gaming()\" style=\"cursor:pointer\">Gaming</a>\n            <a id=\"parenting\" (click)=\"parenting()\" style=\"cursor:pointer\">Parenting</a>\n        </div>\n    </div>\n    <div [@slideAnimation]='state' class=\"alexa\">\n        <p id=\"alexaDescription\">Technology has always been a passion of mine. As part of the <a href=\"http://mashable.com/2015/05/21/oregon-trail-generation/#USjHIA4YEPq9\">\"Oregon Trail Generation\"</a>, I grew up playing the popular video game and I recall trying to code my\n            own version. The enjoyment of playing that game and the satisfaction of seeing my code actually do what I exepected it to do (e.g., coding my name in BASIC to scroll diagonally across the screen), led me into Software Development. I continue\n            to have that passion and I'm able to express it and find those, \"that's cool!\" moments, through web design and development.\n        </p>\n        <div class=\"projects\" [ngClass]=\"{'projectsExpanded': showbikeDetails || showbookDetails || showHawaii}\">\n            <h1 style=\"color:rgb(63, 64, 66)\">Recent Projects</h1>\n            <div class=\"desktopView\">\n              <div class=\"videoContainer\">\n                  <div class=\"videoDiv\">\n                      <video style=\"cursor:pointer\" class=\"videoDemo\" loop autoplay><a href=\"http://inputmynote.com\"></a> <source src=\"https://s3.amazonaws.com/hns3bucket/NotesApp.mp4\"></video>\n                      <h2 style=\"cursor:pointer\"><a href=\"http://inputmynote.com\">Click To Try Me!</a></h2>\n                  </div>\n                  <p class=\"videoClickP\" style=\"cursor:pointer\"><a class=\"clickforDemo\" href=\"http://inputmynote.com\">Click for a Demo!</a></p>\n              </div>\n              <div class=\"projectDiv\">\n                  <p class=\"projectDesc\">NotesApp - Note taking mobile application / RESTful API that lets users view and post notes. Secure login and registration with password validation and encryption.</p>\n                  <button style=\"cursor:pointer\" (click)=\"showBikeDetails()\" class=\"projectButton\">More Details</button>\n                  <div *ngIf=\"showbikeDetails\" class=\"projectDetails\" (click)=\"showBikeDetails()\">\n                      <h3 style=\"cursor:pointer\" class=\"closeDetails\">Close X</h3>\n                      <p sytle=\"color:white\">Amazon EC2, SES, & S3, SSL secured, with email validation, password encyrption, and search funcionalities. Built using:</p>\n                      <ul>\n                          <li>Django 2.1.1</li>\n                          <li>Django REST Framework 3.8.2</li>\n                          <li>Python 3.7</li>\n                          <li>MySQL 8.0.12</li>\n                      </ul>\n                  </div>\n              </div>\n                <div class=\"videoContainer\">\n                    <div class=\"videoDiv\">\n                        <video style=\"cursor:pointer\" class=\"videoDemo\" loop autoplay><a href=\"http://www.hnbookreviews.com\"></a> <source src=\"assets/videos/hnBookReview.mp4\"></video>\n                        <h2 style=\"cursor:pointer\"><a href=\"http://www.hnbookreviews.com\">Click To Try Me!</a></h2>\n                    </div>\n                    <p class=\"videoClickP\" style=\"cursor:pointer\"><a class=\"clickforDemo\" href=\"http://www.hnbookreviews.com\">Click for a Demo!</a></p>\n                </div>\n                <div class=\"projectDiv\">\n                    <p class=\"projectDesc\">HnBookReviews - The ideal web application site for reading and sharing book reviews of your favorite books. Secure login and registration with password validation and encryption.</p>\n                    <button style=\"cursor:pointer\" (click)=\"showBookDetails()\" class=\"projectButton\">More Details</button>\n                    <div *ngIf=\"showbookDetails\" class=\"projectDetails\" (click)=\"showBookDetails()\">\n                        <h3 style=\"cursor:pointer\" class=\"closeDetails\">Close X</h3>\n                        <p sytle=\"color:white\">Created with Django Python web framework and incorporates form and model validation, password encyrption, session and cookie manipulation, and DB many-to-many and foreign key releationships. Built using:</p>\n                        <ul>\n                            <li>Django 1.1.0</li>\n                            <li>Python 2.7.13</li>\n                            <li>MySQL 5.7.20</li>\n                            <li>Bcrypt 3.1.3</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"videoContainer\">\n                    <div class=\"videoDiv\">\n                        <video style=\"cursor:pointer\" class=\"videoDemo\" loop autoplay><a href=\"http://www.ujhawaii.com\"></a> <source src=\"assets/videos/ujHawaii.mp4\"></video>\n                        <h2 style=\"cursor:pointer\"><a href=\"http://www.ujhawaii.com\">Click To Try Me!</a></h2>\n                    </div>\n                    <p class=\"videoClickP\" style=\"cursor:pointer\"><a class=\"clickforDemo\" href=\"http://www.ujhawaii.com\">Click for a Demo!</a></p>\n                </div>\n                <div class=\"projectDiv\">\n                    <p class=\"projectDesc\">UJHawaii - Personal Vacation web site setup to share photos of our Hawaii vacation!</p>\n                    <button style=\"cursor:pointer\" (click)=\"showHawaii()\" class=\"projectButton\">More Details</button>\n                    <div *ngIf=\"showhawaii\" class=\"projectDetails\" (click)=\"showHawaii()\">\n                        <h3 style=\"cursor:pointer\" class=\"closeDetails\">Close X</h3>\n                        <p sytle=\"color:white\">This application incorporates image uploading to Amazon S3, Angular Carousel function, and photo size transitions. Built using:</p>\n                        <ul>\n                            <li>Angular 4.4.6</li>\n                            <li>Nodejs 5.4.0</li>\n                            <li>Express 4.13.4</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"videoContainer\">\n                    <div class=\"videoDiv\">\n                        <video style=\"cursor:pointer\" class=\"videoDemo\" loop autoplay><a href=\"http://www.urlittleurl.com\"></a> <source src=\"assets/videos/urlittleurl.mp4\"></video>\n                        <h2 style=\"cursor:pointer\"><a href=\"http://www.urlittleurl.com\">Click To Try Me!</a></h2>\n                    </div>\n                    <p class=\"videoClickP\" style=\"cursor:pointer\"><a class=\"clickforDemo\" href=\"http://www.urlittleurl.com\">Click for a Demo!</a></p>\n                </div>\n                <div class=\"projectDiv\">\n                    <p class=\"projectDesc\">UrLittleURL - URL shortener full web app with API support!</p>\n                    <button style=\"cursor:pointer\" (click)=\"showShortUrl()\" class=\"projectButton\">More Details</button>\n                    <div *ngIf=\"showshorturl\" class=\"projectDetails\" (click)=\"showShortUrl()\">\n                        <h3 style=\"cursor:pointer\" class=\"closeDetails\">Close X</h3>\n                        <p sytle=\"color:white\">Provides short URL mappings for your extra long URLs with active links, RESTful API handles HTML/JSON, Built using:</p>\n                        <ul>\n                            <li>Django 1.1.0</li>\n                            <li>Django REST Framework 3.8.1</li>\n                            <li>Python 2.7.13</li>\n                            <li>MySQL 5.7.20</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!-- *********************************** -->\n            <div class=\"mobileView\">\n                <div class=\"videoContainer\">\n                    <div class=\"videoDiv\">\n                        <video style=\"cursor:pointer\" class=\"videoDemo\" controls><source src=\"assets/videos/hnBookReview.mp4\" type=\"video/mp4\"></video>\n                        <!-- <h2 style=\"cursor:pointer\"><a href=\"http://www.hnbookreviews.com\">Click To Try Me!</a></h2> -->\n                    </div>\n                    <p class=\"videoClickP\" style=\"cursor:pointer\"><a class=\"clickforDemo\" href=\"http://www.hnbookreviews.com\">Click for a Demo!</a></p>\n                </div>\n                <div class=\"projectDiv\">\n                    <p class=\"projectDesc\">HnBookReviews - The ideal web application site for reading and sharing book reviews of your favorite books. Secure login and registration with password validation and encryption.</p>\n                    <button style=\"cursor:pointer\" (click)=\"showBookDetails()\" class=\"projectButton\">More Details</button>\n                    <div *ngIf=\"showbookDetails\" class=\"projectDetails\" (click)=\"showBookDetails()\">\n                        <h3 style=\"cursor:pointer\" class=\"closeDetails\">Close X</h3>\n                        <p sytle=\"color:white\">Created with Django Python web framework and incorporates form and model validation, password encyrption, session and cookie manipulation, and DB many-to-many and foreign key releationships. Built using:</p>\n                        <ul>\n                            <li>Django 1.1.0</li>\n                            <li>Python 2.7.13</li>\n                            <li>MySQL 5.7.20</li>\n                            <li>Bcrypt 3.1.3</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"videoContainer\">\n                    <div class=\"videoDiv\">\n                        <video style=\"cursor:pointer\" class=\"videoDemo\" loop autoplay><a href=\"http://www.ujhawaii.com\"></a> <source src=\"assets/videos/ujHawaii.mp4\"></video>\n                        <h2 style=\"cursor:pointer\"><a href=\"http://www.ujhawaii.com\">Click To Try Me!</a></h2>\n                    </div>\n                    <p class=\"videoClickP\" style=\"cursor:pointer\"><a class=\"clickforDemo\" href=\"http://www.ujhawaii.com\">Click for a Demo!</a></p>\n                </div>\n                <div class=\"projectDiv\">\n                    <p class=\"projectDesc\">UJHawaii - Personal Vacation web site setup to share photos of our Hawaii vacation!</p>\n                    <button style=\"cursor:pointer\" (click)=\"showHawaii()\" class=\"projectButton\">More Details</button>\n                    <div *ngIf=\"showhawaii\" class=\"projectDetails\" (click)=\"showHawaii()\">\n                        <h3 style=\"cursor:pointer\" class=\"closeDetails\">Close X</h3>\n                        <p sytle=\"color:white\">This application incorporates image uploading to Amazon S3, Angular Carousel function, and photo size transitions. Built using:</p>\n                        <ul>\n                            <li>Angular 4.4.6</li>\n                            <li>Nodejs 5.4.0</li>\n                            <li>Express 4.13.4</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"videoContainer\">\n                    <div class=\"videoDiv\">\n                        <video style=\"cursor:pointer\" class=\"videoDemo\" loop autoplay><a href=\"http://www.urlittleurl.com\"></a> <source src=\"assets/videos/urlittleurl.mp4\"></video>\n                        <h2 style=\"cursor:pointer\"><a href=\"http://www.urlittleurl.com\">Click To Try Me!</a></h2>\n                    </div>\n                    <p class=\"videoClickP\" style=\"cursor:pointer\"><a class=\"clickforDemo\" href=\"http://www.urlittleurl.com\">Click for a Demo!</a></p>\n                </div>\n                <div class=\"projectDiv\">\n                    <p class=\"projectDesc\">UrLittleURL - URL shortener full web app with API support!</p>\n                    <button style=\"cursor:pointer\" (click)=\"showShortUrl()\" class=\"projectButton\">More Details</button>\n                    <div *ngIf=\"showshorturl\" class=\"projectDetails\" (click)=\"showShortUrl()\">\n                        <h3 style=\"cursor:pointer\" class=\"closeDetails\">Close X</h3>\n                        <p sytle=\"color:white\">Provides short URL mappings for your extra long URLs with active links, RESTful API handles HTML/JSON, Built using:</p>\n                        <ul>\n                            <li>Django 1.1.0</li>\n                            <li>Django REST Framework 3.8.1</li>\n                            <li>Python 2.7.13</li>\n                            <li>MySQL 5.7.20</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"videoContainer\">\n                    <div class=\"videoDiv\">\n                        <video style=\"cursor:pointer\" class=\"videoDemo\" id=\"bikeVideo\" controls><source src=\"https://s3.amazonaws.com/hns3bucket/bicycleMarket.mp4\" type=\"video/mp4\"></video>\n                        <!-- <h2 style=\"cursor:pointer\"><a href=\"http://inputmynote.com\">Click To Try Me!</a></h2> -->\n                    </div>\n                    <p class=\"videoClickP\" style=\"cursor:pointer\"><a class=\"clickforDemo\" href=\"http://inputmynote.com\">Click for a Demo!</a></p>\n                </div>\n                <div class=\"projectDiv\">\n                    <p class=\"projectDesc\">Bicycle Marketplace - Bulletin board type web application that lets users view and post bicycle ads. Secure login and registration with password validation and encryption.</p>\n                    <button style=\"cursor:pointer\" (click)=\"showBikeDetails()\" class=\"projectButton\">More Details</button>\n                    <div *ngIf=\"showbikeDetails\" class=\"projectDetails\" (click)=\"showBikeDetails()\">\n                        <h3 style=\"cursor:pointer\" class=\"closeDetails\">Close X</h3>\n                        <p sytle=\"color:white\">This application incorporates image uploading to Amazon S3, form validation, password encyrption, session and cookie manipulation, and advanced search funcionalities. Built using:</p>\n                        <ul>\n                            <li>Angular 4.4.6</li>\n                            <li>Nodejs 5.4.0</li>\n                            <li>Mongoose 4.11.4</li>\n                            <li>Express 4.13.4</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!-- *********************************** -->\n            <a id=\"alexaTry\" href=\"https://www.amazon.com/hiramk-Heres-a-Fun-Fact/dp/B072MVZJ7G/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1508476774&sr=1-1&keywords=here%27s+a+fun+fact\"><img id=\"alexaImg\" src=\"assets/images/AlexaSkill.png\" alt=\"\"> Try My Alexa Skill!</a>\n        </div>\n    </div>\n    <footer [ngClass]=\"{'footerExpanded': showbikeDetails || showbookDetails || showhawaii }\" [@footerAnimation]='state'></footer>\n</main>\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutMeComponent = (function () {
    function AboutMeComponent(_router) {
        this._router = _router;
        this.state = 'small';
        this.showbikeDetails = false;
        this.showbookDetails = false;
        this.showhawaii = false;
        this.showhobbies = false;
        this.showshorturl = false;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        this._router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AboutMeComponent.prototype.animate = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    AboutMeComponent.prototype.carpentry = function () {
        this._router.navigate(['/carpentry']);
    };
    AboutMeComponent.prototype.gaming = function () {
        this._router.navigate(['/games']);
    };
    AboutMeComponent.prototype.parenting = function () {
        this._router.navigate(['/parenting']);
    };
    AboutMeComponent.prototype.showBikeDetails = function () {
        this.showbikeDetails = this.showbikeDetails ? false : true;
    };
    AboutMeComponent.prototype.showBookDetails = function () {
        this.showbookDetails = this.showbookDetails ? false : true;
    };
    AboutMeComponent.prototype.showHawaii = function () {
        this.showhawaii = this.showhawaii ? false : true;
    };
    AboutMeComponent.prototype.showHobbies = function () {
        this.showhobbies = this.showhobbies ? false : true;
    };
    AboutMeComponent.prototype.showShortUrl = function () {
        this.showshorturl = this.showshorturl ? false : true;
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/about-me/about-me.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myAnimationButton', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate3d(0, 71%, 0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate3d(0, 0, 0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('footerAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate3d(0, 15.875rem, 0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translate3d(0, 0, 0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in-out')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _carpentry_carpentry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carpentry/carpentry.component */ "./src/app/carpentry/carpentry.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _parenting_parenting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parenting/parenting.component */ "./src/app/parenting/parenting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"], data: { depth: 1 } },
    { path: 'resume', pathMatch: 'full', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"], data: { depth: 2 } },
    // { path: 'projects', pathMatch: 'full', component: ProjectsComponent, data: { depth: 3 } },
    { path: 'carpentry', component: _carpentry_carpentry_component__WEBPACK_IMPORTED_MODULE_4__["CarpentryComponent"], data: { depth: 4 } },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"], data: { depth: 5 } },
    { path: 'parenting', component: _parenting_parenting_component__WEBPACK_IMPORTED_MODULE_6__["ParentingComponent"], data: { depth: 6 } },
    { path: 'home', pathMatch: 'full', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n    background-color: white;\n}\n\n.background {\n    background-color: black;\n    height: 8%;\n    width: 100%;\n    position: absolute;\n}\n\nheader {\n    display: block;\n    background-color: rgba(0, 0, 0, 0.49);\n    max-width: 100%;\n    max-height: 8%;\n    position: fixed;\n    z-index: 9999;\n}\n\n.animateComponent {\n    position: relative;\n}\n\n.animateComponent>* {\n    display: block;\n}\n\n.contact {\n    background-color: rgb(129, 130, 129);\n    background-color: black;\n    width: 25%;\n    margin-left: 75%;\n    display: inline-block;\n}\n\n.contact p {\n    padding: 5%;\n    color: white;\n    /* font-family: minerva-modern, sans-serif; */\n    font-family: quasimoda-2, sans-serif;\n    font-style: normal;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-weight: 400;\n}\n\n.contact hr {\n    width: 80%;\n    margin: 6%;\n    margin-left: 10%;\n    border-color: rgb(63, 64, 66);\n}\n\n#contactClose:hover {\n    color: rgb(129, 130, 129);\n}\n\na {\n    margin: .625em;\n    color: inherit;\n    color: #B9B8B8;\n    color: white;\n    font-size: 1rem;\n    text-decoration: none;\n    /* font-family: 'Open Sans', regular italic, sans-serif; */\n    /* font-family: quasimoda-2, sans-serif; */\n    /* font-family: quasimoda, sans-serif; */\n    font-family: minerva-modern, sans-serif;\n    font-family: Copperplate / Copperplate Gothic Light, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    -webkit-font-smoothing: subpixel-antialiased;\n}\n\na:hover,\na:active {\n    color: white;\n    color: #B9B8B8;\n}\n\n.homeTag {\n    display: inline-block;\n    margin-left: 4%;\n    vertical-align: middle;\n}\n\n.homeTag a {\n    font-size: 2rem;\n    /* font-family: minerva-modern, sans-serif; */\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    /* font-family: p22-marcel-script-pro, sans-serif; */\n}\n\n.navA {\n    margin: 0px;\n    font-size: 1rem;\n    display: block;\n}\n\n.routeTag,\n#name,\nnav {\n    display: inline-block;\n}\n\nnav {\n    display: inline-block;\n    margin-left: 59%;\n    margin-top: 1.2%;\n}\n\n#linkedin {\n    max-width: 14.4%;\n    vertical-align: middle;\n    margin-left: 7%;\n    margin-right: 5px;\n}\n\n#github {\n    max-width: 15%;\n    vertical-align: middle;\n    margin: 10px;\n    margin-left: 7%;\n    margin-right: 5px;\n    /* margin-bottom: .3125rem; */\n}\n\n#email {\n    max-width: 15.2%;\n    margin: 10px;\n    margin-left: 7%;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\n@media only screen and (max-width: 1030px) {\n    nav {\n        margin-left: 32%;\n        vertical-align: bottom;\n        margin-bottom: .4375rem;\n    }\n    header {\n        max-height: 13%;\n    }\n    .homeTag {\n        margin-left: .625em;\n    }\n    .contact {\n        width: 65%;\n        margin-left: 35%;\n    }\n    .contact p {\n        padding: .625em;\n    }\n    #linkedin,\n    #github,\n    #email {\n        max-width: 7.4%;\n    }\n}\n\n@media only screen and (max-aspect-ratio: 1024/1366) {\n    .background {\n        height: 6%;\n    }\n    header {\n        max-height: 6%;\n    }\n    nav {\n        margin-left: 48%;\n    }\n    .homeTag {\n        margin-left: 4%;\n        margin-top: 1%;\n    }\n    .contact {\n        max-width: 40%;\n        margin-left: 60%;\n        margin-top: 2.3%;\n    }\n}\n\n@media only screen and (aspect-ratio: 2560/1600) {\n    a {\n        font-size: 2rem;\n    }\n    header {\n        width: 100%;\n    }\n}\n\n@media only screen and (aspect-ratio: 1600/2560) {\n    a {\n        font-size: 1.5rem;\n    }\n    .background {\n        height: 4%;\n    }\n    header {\n        max-height: 4%;\n        width: 100%;\n    }\n    nav {\n        margin-left: 57%;\n        margin-top: 2.2%\n    }\n    .homeTag {\n        margin-left: 4%;\n        margin-top: 1%;\n        font-size: 2rem;\n    }\n    .contact {\n        width: 40%;\n        margin-left: 60%;\n        margin-top: .9%;\n    }\n    .contact p {\n        font-size: 1.5rem;\n    }\n    .navA {\n        font-size: 1.5rem;\n    }\n}\n\n@media only screen and (aspect-ratio: 1366/1024) {\n    nav {\n        margin-top: 2.2%;\n    }\n}\n\n@media only screen and (aspect-ratio: 1024/768) {\n    header {\n        max-height: 8%\n    }\n    nav {\n        margin-top: 2.2%;\n        margin-left: 50%;\n    }\n    .background {\n        height: 8%\n    }\n    .contact {\n        max-width: 45%;\n        margin-left: 55%;\n    }\n}\n\n@media only screen and (aspect-ratio: 736/414) {\n    .background {\n        height: 13%;\n    }\n}\n\n@media only screen and (aspect-ratio: 768/1024) {\n    header {\n        max-height: 6%\n    }\n    nav {\n        margin-top: 2.2%;\n        margin-left: 32%;\n    }\n    .background {\n        height: 6%\n    }\n    .contact {\n        max-width: 45%;\n        margin-left: 55%;\n    }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: landscape) {\n    .background {\n        height: 13%;\n    }\n    .contact hr {\n        margin: 2%;\n    }\n}\n\n@media only screen and (max-width: 720px) {\n    nav {\n        margin-left: 49%;\n        vertical-align: bottom;\n        margin-bottom: .4375rem;\n    }\n}\n\n@media only screen and (max-width: 667px) {\n    nav {\n        margin-left: 34%;\n        margin-bottom: 2%;\n    }\n    .routeTag a {\n        font-size: .7rem;\n    }\n    .contact hr {\n        margin: 3%;\n    }\n    .background {\n        height: 13%;\n    }\n}\n\n@media only screen and (max-width: 667px) {\n    nav {\n        margin-left: 32%;\n    }\n}\n\n@media only screen and (max-width: 480px) {\n    header {\n        max-height: 6%;\n    }\n    .background {\n        height: 6%;\n    }\n    #linkedin {\n        max-width: 5%;\n        vertical-align: bottom;\n        margin-left: 4%;\n        margin-top: .5rem;\n    }\n    #github {\n        max-width: 5%;\n        vertical-align: bottom;\n        margin-left: .625em;\n        margin-bottom: .3125rem;\n    }\n    #email {\n        max-width: 5%;\n        margin-left: .625em;\n    }\n    nav {\n        margin-left: 10%;\n        vertical-align: bottom;\n        margin-bottom: .5375rem;\n    }\n    .routeTag a {\n        font-size: .7rem;\n    }\n    header {\n        padding-bottom: 0em;\n    }\n    .homeTag {\n        margin-left: 10px;\n    }\n    .homeTag a {\n        font-size: 1.5rem;\n    }\n    .contact {\n        max-width: 65%;\n        margin-left: 35%;\n    }\n}\n\n@media only screen and (aspect-ratio: 736/414) {\n    .contact hr {\n        margin: 3%;\n    }\n}\n\n@media only screen and (aspect-ratio: 414/736) {\n    .contact {\n        margin-top: 1%;\n    }\n    nav {\n        margin-left: 24%;\n    }\n    header {\n        max-height: 6.5%;\n    }\n    .background {\n        height: 6.5%;\n    }\n}\n\n@media only screen and (max-width: 375px) {\n    nav {\n        margin-left: 2%;\n        vertical-align: bottom;\n        margin-bottom: .4375rem;\n    }\n    .navA {\n        font-size: .9rem;\n    }\n    .contact {\n        max-width: 63%;\n        margin-left: 37%;\n        margin-top: 0px;\n    }\n    #linkedin,\n    #github,\n    #email {\n        max-width: 8%;\n    }\n}\n\n@media only screen and (aspect-ratio: 360/640) {\n    .homeTag a {\n        font-size: 1rem;\n    }\n    .contact {\n        max-width: 65%;\n        margin-left: 35%;\n    }\n}\n\n@media only screen and (aspect-ratio: 320/568) {\n    .homeTag a {\n        font-size: 1rem;\n    }\n    .contact p,\n    .contact a {\n        font-size: .5rem;\n    }\n}\n\n@media only screen and (aspect-ratio: 568/320) {\n    .homeTag a {\n        font-size: 1.5rem;\n    }\n    .contact p,\n    .contact a {\n        font-size: .5rem;\n    }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n<header>\n    <div class='homeTag'>\n        <a [routerLink]=\"['/']\">Hiram K. Neal</a>\n    </div>\n    <nav>\n        <div class='routeTag'>\n            <a [routerLink]=\"['/home']\">Home</a>\n        </div>\n        <div class='routeTag'>\n            <a [routerLink]=\"['/resume']\">Resume </a>\n        </div>\n        <!-- <div class='routeTag'>\n            <a (click)=\"projectScroll()\" style=\"cursor:pointer\">Projects</a>\n        </div> -->\n        <div class='routeTag'>\n            <a (click)=\"contactAnimate()\" style=\"cursor:pointer\">Contact Me</a>\n        </div>\n    </nav>\n    <div [@contactAnimation]='state' class='contact'>\n        <p>\n            Check out my code for this website and some of my other projects on GitHub and please feel free to connect with me on LinkedIn or via email!\n        </p>\n        <hr>\n        <a class=\"navA\" href=\"https://linkedin.com/in/hiram-neal\"><img id=\"linkedin\" src=\"assets/images/linkedin.png\" alt=\"http://linkedin.com/in/hiram-neal\">http://linkedin.com/in/hiram-neal</a>\n        <a class=\"navA\" href=\"https://github.com/hkneal\"><img id=\"github\" src=\"assets/images/github-10-512.gif\" alt=\"https://github.com/hkneal\">https://github.com/hkneal</a>\n        <a class=\"navA\" href=\"mailto:hiramk@comcast.net\"><img id=\"email\" src=\"assets/images/emailMe.png\">hiramk@comcast.net</a>\n        <hr>\n        <p id=\"contactClose\" (click)=\"contactAnimate()\" style=\"text-align:center; cursor:pointer\">Close X</p>\n    </div>\n</header>\n<main>\n    <!-- <img src=\"assets/images/IMG_3222.jpg\" alt=\"\">\n    <img id=\"smile\" src=\"assets/images/IMG_1221.jpg\" alt=\"\"> -->\n    <div id=\"component\" class=\"animateComponent\" [@routeAnimation]=\"getDepth(myOutlet)\">\n        <router-outlet #myOutlet=\"outlet\"></router-outlet>\n    </div>\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.state = 'out';
    }
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    AppComponent.prototype.contactAnimate = function () {
        this.state = (this.state === 'out' ? 'in' : 'out');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 3', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 4', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 5', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('1 => 6', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('2 => 1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('2 => 3', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('3 => 1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('3 => 2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('4 => 1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('4 => 2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('4 => 3', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('5 => 1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('5 => 2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('5 => 3', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('6 => 1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('6 => 2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('6 => 3', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '!' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', top: 0, left: 0, right: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.4s cubic-bezier(.35, 0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))])
                        ])
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('contactAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translate3d(0, 0, 0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translate3d(100%, 0, 0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in <=> out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in-out')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _carpentry_carpentry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carpentry/carpentry.component */ "./src/app/carpentry/carpentry.component.ts");
/* harmony import */ var _parenting_parenting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parenting/parenting.component */ "./src/app/parenting/parenting.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"],
                _carpentry_carpentry_component__WEBPACK_IMPORTED_MODULE_7__["CarpentryComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"],
                _parenting_parenting_component__WEBPACK_IMPORTED_MODULE_8__["ParentingComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carpentry/carpentry.component.css":
/*!***************************************************!*\
  !*** ./src/app/carpentry/carpentry.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n    background-color: black;\n    height: 3.75em;\n    width: 100%;\n    margin-top: 10.5%;\n}\n\n.treehouseMain {\n    width: 100%;\n    /* height: 100%; */\n    background-image: url(\"/assets/images/Fotosearch_k17405522.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: absolute;\n    margin-top: 4.1%;\n}\n\n.vertical-Line {\n    margin-left: 20px;\n    display: inline-block;\n    width: 0;\n    height: 1.7em;\n    border-right: 1px solid rgb(22, 22, 22);\n}\n\n#treehouseH1 {\n    margin-left: 12%;\n    /* font-size: 6.375rem; */\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    /* font-family: minerva-modern, sans-serif; */\n    font-style: normal;\n    font-weight: 400;\n    color: white;\n    display: inline-block;\n}\n\n#treehouseH1:hover,\n.menuItem:hover {\n    color: black;\n}\n\n.menuItem {\n    margin-left: 20px;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-weight: 400;\n    color: white;\n    display: inline-block;\n}\n\n.treehouse {\n    /* margin: 20px;\n    margin-left: 80px; */\n    width: 100%;\n    position: absolute;\n    background-image: linear-gradient(to bottom, rgb(194, 200, 208), rgb(15, 15, 15));\n}\n\n.pictureViewer {\n    position: absolute;\n    margin: 5%;\n    margin-top: 6%;\n    background-image: linear-gradient(to bottom, rgb(194, 200, 208), rgb(63, 64, 66));\n    border: 5px solid rgb(253, 254, 255);\n    box-shadow: 5px 5px 10px black;\n    border-radius: 50px;\n    padding: 2%;\n    padding-top: 1%;\n    padding-bottom: 1%;\n    text-align: center;\n}\n\n.pictureViewer p {\n    margin: 10px;\n    color: white;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    /* font-family: quasimoda, sans-serif; */\n    font-style: normal;\n    font-weight: 400;\n    font-size: 1.5rem;\n}\n\nimg {\n    margin: .75%;\n    max-width: 18%;\n    max-height: 200px;\n    display: inline-block;\n    /* border: 5px solid white; */\n    border-radius: 10px;\n    box-shadow: 5px 5px 20px black;\n}\n\n.hobbies {\n    color: white;\n    background-image: linear-gradient(to bottom, rgb(183, 183, 183), rgb(33, 34, 43));\n    /* position: absolute; */\n    max-width: 50%;\n    margin: auto;\n    margin-top: 11%;\n    z-index: 9999;\n    border-radius: 50px;\n    border: 2px solid rgb(253, 254, 255);\n    box-shadow: 5px 5px 10px black;\n    /* border: 2px solid rgb(177, 174, 174); */\n    padding: 1%;\n    /* text-align: center; */\n}\n\n.hobbies p {\n    margin: 0px;\n    text-align: center;\n    margin-top: .1875rem;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: .75rem;\n    font-weight: 400;\n    color: rgb(252, 249, 249);\n}\n\n#gaming,\n#parenting {\n    display: inline-block;\n    margin: 1%;\n    margin-top: 0px;\n    margin-left: 50px;\n}\n\n#home,\n#gamingPic,\n#parentingPic {\n    margin: 3%;\n    margin-left: 1%;\n    margin-bottom: 0px;\n    border-radius: 10px;\n}\n\n#home {\n    max-width: 29%;\n    display: inline-block;\n    margin-left: 4%;\n}\n\n#gamingPic {\n    max-width: 28%;\n    margin-left: 1%;\n}\n\n#parentingPic {\n    max-width: 24.7%;\n    margin-left: 1%;\n}\n\n#gaming {\n    margin-left: 27%;\n    position: inherit;\n}\n\n#parenting {\n    margin-left: 18%;\n}\n\n#homeTag {\n    margin-left: 15%;\n}\n\n#entertainmentP {\n    margin: 1%;\n    margin-bottom: 0;\n}\n\na {\n    color: inherit;\n    color: white;\n    text-decoration: none;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: 1rem;\n    font-weight: 400;\n}\n\na:hover {\n    color: rgb(163, 159, 157);\n}\n\n#otherInterests {\n    margin-left: 36%;\n    display: inline-block;\n}\n\n#whoAmI {\n    margin-top: 47%;\n}\n\nh2 {\n    text-align: center;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    /* font-family: quasimoda, sans-serif; */\n    font-style: normal;\n    font-size: 1.5rem;\n    font-weight: 100;\n    color: white;\n}\n\n#close {\n    display: inline-block;\n    margin-top: 1%;\n    margin-left: 25%;\n    font-family: quasimoda-2, sans-serif;\n    -webkit-font-smoothing: subpixel-antialiased;\n    font-style: normal;\n    font-size: 1rem;\n    font-weight: 400;\n}\n\n.treehouseMobile {\n    width: 100%;\n    position: absolute;\n    background-image: linear-gradient(to bottom, rgb(56, 56, 56), rgb(15, 15, 15));\n    display: none;\n}\n\n@media only screen and (max-width: 1366px) and (max-height: 1366px) {\n    .treehouseMobile {\n        display: inherit;\n    }\n    .treehouse {\n        display: none;\n    }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    h2 {\n        font-size: 2rem;\n    }\n    a {\n        font-size: 1.5rem;\n    }\n    footer {\n        margin-top: 15.5%;\n    }\n    .vertical-Line {\n        margin: 0%;\n    }\n    .treehouseMain {\n        margin-top: 6%;\n    }\n    .hobbies {\n        max-width: 80%;\n    }\n    .hobbies p {\n        font-size: 1rem;\n    }\n    .pictureViewer {\n        margin-top: 10%;\n    }\n    #treehouseH1 {\n        margin-left: 7%;\n    }\n    #gaming {\n        margin-left: 23%;\n    }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: landscape) {\n    .treehouseMobile h1 {\n        font-size: 1.3rem;\n    }\n    .treehouseMain {\n        margin-top: 6%;\n    }\n    #treehouseH1 {\n        margin-left: 6%;\n    }\n    .pictureViewer {\n        padding-bottom: 0%;\n        margin-top: 7%\n    }\n    .hobbies {\n        max-width: 88%;\n    }\n    footer {\n        margin-top: 7.5%;\n    }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) {\n    img {\n        max-width: 31%;\n    }\n    footer {\n        margin-top: 100%;\n    }\n    .treehouseMain {\n        margin-top: 13.1%;\n    }\n    .treehouseMobile {\n        font-size: .4rem;\n    }\n    .pictureViewer {\n        margin-top: 16%;\n    }\n    .vertical-Line {\n        margin-left: 0%;\n    }\n    .menuItem {\n        margin-left: 3%;\n    }\n    .hobbies {\n        margin-top: 37%;\n        max-width: 90%;\n    }\n    #homeTag {\n        margin-left: 12%;\n    }\n    #gaming {\n        margin-left: 18%;\n    }\n    #parenting {\n        margin-left: 11%;\n    }\n    #treehouseH1 {\n        margin-left: 1%;\n    }\n    #otherInterests {\n        margin-left: 20%;\n    }\n    #close {\n        margin-left: 3%;\n        font-size: .7rem;\n    }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {\n    footer {\n        margin-top: 46%;\n    }\n    h2 {\n        font-size: 2rem;\n    }\n    a {\n        font-size: 1.5rem;\n    }\n    .treehouseMain {\n        margin-top: 8%;\n    }\n    .treehouseMobile h1 {\n        font-size: 1.5rem;\n    }\n    .hobbies {\n        margin-top: 56%;\n    }\n    .hobbies p {\n        font-size: 1rem;\n    }\n    #treehouseH1 {\n        margin-left: 4%;\n    }\n    #otherInterests {\n        margin-left: 32%;\n    }\n    #close {\n        margin-left: 18%;\n        font-size: 1rem;\n    }\n    #gaming {\n        margin-left: 23%;\n    }\n    #parenting {\n        margin-left: 17%;\n    }\n}\n\n@media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: landscape) {\n    /* iPhone 6+, 7+, 8+ plus */\n    img {\n        max-width: 17%;\n    }\n    footer {\n        margin-top: 8.5%;\n    }\n    .treehouseMain {\n        margin-top: 7.4%;\n    }\n    .hobbies {\n        max-width: 87%;\n        margin-top: 5%;\n    }\n    .pictureViewer {\n        margin-top: 8%;\n    }\n    .treehouse h1 {\n        font-size: 1rem;\n    }\n    .vertical-Line {\n        height: .9em;\n    }\n    #treehouseH1 {\n        margin-left: 2%;\n    }\n    #close {\n        margin-left: 21%;\n    }\n}\n\n@media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) {\n    /* iPhone 6+, 7+, 8+ plus */\n    img {\n        max-width: 31%;\n    }\n    footer {\n        margin-top: 68.5%;\n    }\n    .treehouseMain {\n        margin-top: 10.7%;\n    }\n    .treehouse h1 {\n        font-size: .5rem;\n    }\n    .vertical-Line {\n        height: .7em;\n    }\n    .pictureViewer {\n        margin-top: 10%;\n        padding-top: 4%;\n    }\n    .pictureViewer p {\n        font-size: 1rem;\n    }\n    .hobbies {\n        margin-top: 36%;\n        max-width: 87%;\n    }\n    #treehouseH1 {\n        margin-left: 3%;\n    }\n    #otherInterests {\n        margin-left: 25%;\n    }\n    #close {\n        margin-left: 3%;\n        font-size: .7rem;\n    }\n    #homeTag,\n    #parenting {\n        margin-left: 13%;\n    }\n    #gaming {\n        margin-left: 18%;\n    }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) {\n    .treehouseMain {\n        margin-top: 10.7%;\n    }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: landscape) {\n    .vertical-Line {\n        margin-left: 1%;\n    }\n    .hobbies {\n        margin-top: 7%;\n    }\n    #close {\n        margin-left: 18%;\n    }\n}"

/***/ }),

/***/ "./src/app/carpentry/carpentry.component.html":
/*!****************************************************!*\
  !*** ./src/app/carpentry/carpentry.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"treehouseMain\">\n    <div class=\"treehouse\">\n        <h1 id=\"treehouseH1\" (mouseenter)=\"animateTreehouse()\">Treehouse</h1>\n        <span class=\"vertical-Line\"></span>\n        <h1 class=\"menuItem\" (mouseenter)=\"animateEntertainmentCenter()\">Entertainment Center</h1>\n        <span class=\"vertical-Line\"></span>\n        <h1 class=\"menuItem\" (mouseenter)=\"animateBeds()\">Custom Beds</h1>\n        <span class=\"vertical-Line\"></span>\n        <h1 class=\"menuItem\" (mouseenter)=\"animateMenu()\">Other Interests</h1>\n    </div>\n    <div class=\"treehouseMobile\">\n        <h1 id=\"treehouseH1\" (click)=\"animateTreehouse()\">Treehouse</h1>\n        <span class=\"vertical-Line\"></span>\n        <h1 class=\"menuItem\" (click)=\"animateEntertainmentCenter()\">Television Center</h1>\n        <span class=\"vertical-Line\"></span>\n        <h1 class=\"menuItem\" (click)=\"animateBeds()\">Custom Beds</h1>\n        <span class=\"vertical-Line\"></span>\n        <h1 class=\"menuItem\" (click)=\"animateMenu()\">Other Interests</h1>\n    </div>\n    <div [@treehouseAnimation]='state' class=\"pictureViewer\">\n        <img src=\"assets/images/Treehouse/DSCN0256.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/DSCN0257.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/DSCN0252.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/IMG_0011.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/DSCN0250.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/IMG_0047.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/IMG_0533.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/IMG_0551.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/IMG_0167.jpg\" alt=\"\">\n        <img src=\"assets/images/Treehouse/IMG_0669.jpg\" alt=\"\">\n        <p>Treehouse Project</p>\n    </div>\n    <div [@entertainmentAnimation]='state' class=\"pictureViewer\">\n        <img src=\"assets/images/entertainment_center/IMG_2332.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_2361.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_2385.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_2419.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_2433.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_2415.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_2437.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_2447.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_3384.jpg\" alt=\"\">\n        <img src=\"assets/images/entertainment_center/IMG_3385.jpg\" alt=\"\">\n        <p id=\"entertainmentP\">Entertainment Center Project</p>\n    </div>\n    <div [@bedsAnimation]='state' class=\"pictureViewer\">\n        <img src=\"assets/images/Custom_beds/DSCN1542.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/DSCN1546.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/IMG_0021.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/IMG_0015.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/DSCN1588.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/IMG_0868.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/IMG_0894.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/IMG_0984.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/IMG_0882.jpg\" alt=\"\">\n        <img src=\"assets/images/Custom_beds/IMG_0918.jpg\" alt=\"\">\n        <p>Reinventing my daughter's room, twice now...</p>\n    </div>\n    <div [@menuAnimation]='state' class=\"hobbies\" (click)=\"animateMenu()\">\n        <h2 id=\"otherInterests\"> My other passions</h2>\n        <h3 style=\"cursor:pointer\" id=\"close\">Close X</h3>\n        <p>click to explore further</p>\n        <a style=\"cursor:pointer\"><img (click)=\"home()\" id=\"home\" src=\"assets/images/IMG_3219.jpg\" alt=\"\"></a>\n        <a style=\"cursor:pointer\"><img (click)=\"gaming()\" id=\"gamingPic\" src=\"assets/images/IMG_0334.jpg\" alt=\"\"></a>\n        <a style=\"cursor:pointer\"><img (click)=\"parenting()\" id=\"parentingPic\" src=\"assets/images/IMG_1370.jpg\" alt=\"\"></a>\n        <a id=\"homeTag\" (click)=\"home()\" style=\"cursor:pointer\">Home</a>\n        <a id=\"gaming\" (click)=\"gaming()\" style=\"cursor:pointer\">Gaming</a>\n        <a id=\"parenting\" (click)=\"parenting()\" style=\"cursor:pointer\">Parenting</a>\n    </div>\n    <footer></footer>\n</div>"

/***/ }),

/***/ "./src/app/carpentry/carpentry.component.ts":
/*!**************************************************!*\
  !*** ./src/app/carpentry/carpentry.component.ts ***!
  \**************************************************/
/*! exports provided: CarpentryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpentryComponent", function() { return CarpentryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarpentryComponent = (function () {
    function CarpentryComponent(_router) {
        this._router = _router;
        this.state = 'treehouse';
    }
    CarpentryComponent.prototype.ngOnInit = function () {
        this._router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    CarpentryComponent.prototype.animateTreehouse = function () {
        this.state = (this.state === 'menu' ? 'treehouse' : this.state === 'beds' ? 'treehouse' : this.state === 'entertainment' ? 'treehouse' : 'treehouse');
    };
    CarpentryComponent.prototype.animateEntertainmentCenter = function () {
        this.state = (this.state === 'menu' ? 'entertainment' : this.state === 'beds' ? 'entertainment' : this.state === 'treehouse' ? 'entertainment' : 'entertainment');
    };
    CarpentryComponent.prototype.animateBeds = function () {
        this.state = (this.state === 'menu' ? 'beds' : this.state === 'treehouse' ? 'beds' : this.state === 'entertainment' ? 'beds' : 'beds');
    };
    CarpentryComponent.prototype.animateMenu = function () {
        this.state = (this.state === 'beds' ? 'menu' : this.state === 'treehouse' ? 'menu' : this.state === 'entertainment' ? 'menu' : 'treehouse');
    };
    CarpentryComponent.prototype.home = function () {
        this._router.navigate(['/']);
    };
    CarpentryComponent.prototype.gaming = function () {
        this._router.navigate(['/games']);
    };
    CarpentryComponent.prototype.parenting = function () {
        this._router.navigate(['/parenting']);
    };
    CarpentryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carpentry',
            template: __webpack_require__(/*! ./carpentry.component.html */ "./src/app/carpentry/carpentry.component.html"),
            styles: [__webpack_require__(/*! ./carpentry.component.css */ "./src/app/carpentry/carpentry.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('treehouseAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('menu', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                        // transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('treehouse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1
                        // transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('beds', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                        // transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('entertainment', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                        // transform: 'scale(0)',
                    })),
                    // state('hiddenOut', style({ opacity: 0 })),
                    // state('visable', style({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('treehouse <=> menu', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('treehouse <=> beds', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('treehouse <=> entertainment', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('entertainmentAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('menu', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                        // transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('treehouse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                        // transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('beds', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                        // transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('entertainment', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1
                        // transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('entertainment <=> menu', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('entertainment <=> beds', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('entertainment <=> treehouse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('bedsAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('menu', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('treehouse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('beds', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('entertainment', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('beds <=> menu', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('beds <=> entertainment', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('beds <=> treehouse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('menuAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('menu', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('treehouse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('beds', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('entertainment', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('menuOff', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('beds <=> menu', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('menu <=> entertainment', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('menu <=> treehouse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('menu <=> menuOff', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('800ms ease-in-out')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CarpentryComponent);
    return CarpentryComponent;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .gamesMain {\n        width: 100%;\n        /* height: 100%; */\n        margin-top: 4.1%;\n        position: absolute;\n        background-color: black;\n    }\n    \n    .videoDiv {\n        margin-top: 2%;\n        height: 36.9375rem;\n    }\n    \n    footer {\n        background-color: black;\n        height: 3.75em;\n        width: 100%;\n        /* margin-top: 47.1%; */\n        /* position: absolute; */\n        text-align: center;\n    }\n    \n    video {\n        background-color: black;\n        width: 100%;\n        height: 85%;\n        position: absolute;\n        z-index: 9997;\n    }\n    \n    .description {\n        background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(42, 48, 95));\n        border-radius: 15px;\n        margin: 2%;\n        margin-left: 56%;\n        margin-top: 18.7%;\n        padding: 2%;\n        opacity: .9;\n        width: 37%;\n        /* height: 26%; */\n        position: absolute;\n        z-index: 9998;\n    }\n    \n    .threeColumn {\n        -webkit-column-count: 3;\n                column-count: 3;\n    }\n    \n    p,\n    h1 {\n        color: white;\n        font-family: quasimoda-2, sans-serif;\n        -webkit-font-smoothing: subpixel-antialiased;\n        font-style: normal;\n        /* font-size: 1rem; */\n        font-weight: 400;\n    }\n    \n    ul {\n        margin: 5%;\n        list-style-type: none;\n    }\n    \n    li {\n        color: white;\n        font-family: quasimoda-2, sans-serif;\n        -webkit-font-smoothing: subpixel-antialiased;\n        font-style: normal;\n        /* font-size: 1rem; */\n        font-weight: 400;\n    }\n    \n    #footerButton {\n        padding: .2%;\n        padding-left: 1%;\n        padding-right: 1%;\n        color: white;\n        margin: .6%;\n        background-image: linear-gradient(to bottom, rgb(10, 11, 11), rgb(63, 64, 66));\n        font-family: quasimoda-2, sans-serif;\n        -webkit-font-smoothing: subpixel-antialiased;\n        font-style: normal;\n        font-size: 1.4rem;\n        font-weight: 400;\n        border-radius: 15px;\n    }\n    \n    #footerButton:hover {\n        background-image: linear-gradient(to bottom, rgb(177, 185, 194), rgb(63, 64, 66));\n    }\n    \n    #footerButton:active {\n        border: none;\n    }\n    \n    .hobbies {\n        color: white;\n        background-image: linear-gradient(to bottom, rgb(183, 183, 183), rgb(33, 34, 43));\n        /* position: absolute; */\n        max-width: 50%;\n        margin-left: 25%;\n        margin-top: 7rem;\n        z-index: 9999;\n        border-radius: 50px;\n        border: 2px solid rgb(253, 254, 255);\n        box-shadow: 5px 5px 10px black;\n        /* border: 2px solid rgb(177, 174, 174); */\n        padding: 1%;\n        position: absolute;\n    }\n    \n    .hobbies p {\n        margin: 0px;\n        text-align: center;\n        margin-top: .1875rem;\n        font-family: quasimoda-2, sans-serif;\n        -webkit-font-smoothing: subpixel-antialiased;\n        font-style: normal;\n        font-size: .75rem;\n        font-weight: 400;\n        color: rgb(252, 249, 249);\n    }\n    \n    #homePic {\n        margin: 2%;\n        margin-left: 3%;\n        margin-bottom: 0px;\n        border-radius: 10px;\n        position: inherit;\n        display: inline-block;\n        width: 29%;\n        max-height: 200px;\n        box-shadow: 5px 5px 20px black;\n    }\n    \n    #building {\n        max-width: 28%;\n        margin: 2%;\n        margin-top: 1%;\n        margin-left: 3%;\n        margin-bottom: 0px;\n        border-radius: 10px;\n        position: inherit;\n        box-shadow: 5px 5px 20px black;\n    }\n    \n    #home {\n        margin-left: 13%;\n    }\n    \n    #parenting {\n        display: inline-block;\n        margin: 10px;\n        margin-top: 0px;\n        margin-left: 22%\n    }\n    \n    #parentingPic {\n        max-width: 24.7%;\n        margin: 1%;\n        margin-top: 1%;\n        margin-left: 3%;\n        margin-bottom: 0px;\n        border-radius: 10px;\n        position: inherit;\n    }\n    \n    #carpentry {\n        margin-left: 27%\n    }\n    \n    a {\n        color: inherit;\n        color: white;\n        text-decoration: none;\n        font-family: quasimoda-2, sans-serif;\n        -webkit-font-smoothing: subpixel-antialiased;\n        font-style: normal;\n        font-size: 1rem;\n        font-weight: 400;\n    }\n    \n    a:hover {\n        color: rgb(163, 159, 157);\n    }\n    \n    #otherInterests {\n        display: inline-block;\n        margin-left: 37%;\n    }\n    \n    #close {\n        display: inline-block;\n        margin-top: 1%;\n        margin-left: 25%;\n        font-family: quasimoda-2, sans-serif;\n        -webkit-font-smoothing: subpixel-antialiased;\n        font-style: normal;\n        font-size: 1rem;\n        font-weight: 400;\n    }\n    \n    h2 {\n        text-align: center;\n        font-family: quasimoda-2, sans-serif;\n        -webkit-font-smoothing: subpixel-antialiased;\n        /* font-family: quasimoda, sans-serif; */\n        font-style: normal;\n        font-size: 1.5rem;\n        font-weight: 100;\n        color: white;\n    }\n    \n    button:focus {\n        outline: 0;\n    }\n    \n    .mobileView {\n        display: none;\n    }\n    \n    @media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) {\n        /* iphone x */\n        .videoDiv {\n            margin-top: 6%;\n            height: 44.9375rem;\n        }\n        .description {\n            width: 94%;\n            margin-left: 1%;\n            margin-top: 129.5%\n        }\n        .description h1 {\n            font-size: 1.5rem;\n        }\n        .hobbies {\n            max-width: 92%;\n            margin-left: 2%;\n        }\n        #otherInterests {\n            margin-left: 21%;\n        }\n        #close {\n            font-size: .7rem;\n            margin-left: 7%;\n        }\n        #home {\n            margin-left: 12%\n        }\n        #carpentry {\n            margin-left: 17%\n        }\n        #parenting {\n            margin-left: 10%;\n        }\n    }\n    \n    @media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: landscape) {\n        /* iphone x */\n        .description {\n            margin-left: 59%;\n            margin-top: 11.5%;\n        }\n        .hobbies {\n            max-width: 86%;\n            margin-left: 5%;\n            margin-top: 8rem;\n        }\n    }\n    \n    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {\n        video {\n            height: 65%;\n        }\n        footer {\n            margin-top: 22%;\n        }\n        .description {\n            margin-top: 79.5%;\n        }\n    }\n    \n    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {}\n    \n    @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) {\n        /* iPhone 6+, 7+, 8+ plus */\n        video {\n            height: 70%;\n        }\n        footer {\n            height: 2.8rem;\n        }\n        .description {\n            margin: auto;\n            margin-top: 111%;\n            margin-left: 0p;\n            width: 96%;\n        }\n        li {\n            font-size: .7rem;\n        }\n        p,\n        h1 {\n            font-size: 1rem;\n        }\n        .hobbies {\n            margin-left: 5%;\n            margin-top: 69%;\n            max-width: 87%;\n        }\n        #otherInterests {\n            margin-left: 25%;\n        }\n        #close {\n            margin-left: 4%;\n            font-size: .7rem;\n        }\n        #homePic {\n            margin: 1%;\n            margin-left: 4%;\n            width: 29%;\n        }\n        #building {\n            margin: 1%;\n            margin-top: 3%;\n            margin-left: 3%\n        }\n        #parentingPic {\n            margin: 1%;\n        }\n        #home {\n            margin-left: 13%;\n        }\n        #carpentry {\n            margin-left: 17%;\n        }\n        #parenting {\n            margin: 1%;\n            margin-left: 10%;\n        }\n    }\n    \n    @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: landscape) {\n        /* iPhone 6+, 7+, 8+ plus */\n        .videoDiv {\n            height: 31.9375rem;\n        }\n        .gamesMain {\n            margin-top: 7.4%;\n        }\n        video {\n            height: 76%;\n        }\n        footer {\n            height: 3.75em;\n        }\n        p,\n        h1 {\n            font-size: .9rem;\n        }\n        li {\n            font-size: .7rem;\n        }\n        ul {\n            margin: 3%;\n        }\n        .description {\n            margin-top: 20%;\n            margin-left: 73%;\n            width: 22%;\n        }\n        .hobbies {\n            margin-left: 5%;\n            margin-top: 16%;\n            max-width: 87%;\n        }\n        #otherInterests {\n            margin-left: 35%;\n        }\n    }\n    \n    @media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) {\n        /* iphone 6, 7 */\n        .hobbies {\n            margin-top: 15rem;\n        }\n    }\n    \n    @media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: landscape) {\n        .description {\n            margin-top: 18%;\n        }\n        #close {\n            margin-left: 18%;\n        }\n    }"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gamesMain\">\n    <div class=\"videoDiv\">\n        <!-- <video loop autoplay [@imageFadeAnimation]='state'> <source src=\"/assets/videos/Xbox Gameplay.mp4\"></video> -->\n        <video autoplay loop controls [@imageFadeAnimation]='state'> <source src=\"/assets/videos/All Gameplay .mp4\"></video>\n        <div class=\"description\" [@imageFadeAnimation]='state'>\n            <h1>I Love Games! Who Doesn't?</h1>\n            <p class=\"descriptionParagraph\">Although, I enjoy a good game of chess, here are some video games that I enjoy just as well: </p>\n            <ul>\n                <div class=\"threeColumn\">\n                    <li>Mass Effect</li>\n                    <li>God of War</li>\n                    <li>Kindom Hearts</li>\n                    <li>Gears of War</li>\n                    <li>Dante's Inferno</li>\n                    <li>Titanfall</li>\n                    <li>Call of Duty</li>\n                    <li>Batman Arkham City</li>\n                    <li>Diablo</li>\n                </div>\n            </ul>\n        </div>\n        <div [@menuAnimation]='state' class=\"hobbies\" (click)=\"animateMenu()\">\n            <h2 id=\"otherInterests\"> My other passions</h2>\n            <h3 style=\"cursor:pointer\" id=\"close\">Close X</h3>\n            <p>click to explore further</p>\n            <a style=\"cursor:pointer\"><img (click)=\"home()\" id=\"homePic\" src=\"assets/images/IMG_3219.jpg\" alt=\"\"></a>\n            <a style=\"cursor:pointer\"><img (click)=\"carpentry()\" id=\"building\" src=\"assets/images/IMG_0534.jpg\" alt=\"\"></a>\n            <a style=\"cursor:pointer\"><img (click)=\"parenting()\" id=\"parentingPic\" src=\"assets/images/IMG_1370.jpg\" alt=\"\"></a>\n            <a id=\"home\" (click)=\"home()\" style=\"cursor:pointer\">Home</a>\n            <a id=\"carpentry\" (click)=\"carpentry()\" style=\"cursor:pointer\">Carpentry</a>\n            <a id=\"parenting\" (click)=\"parenting()\" style=\"cursor:pointer\">Parenting</a>\n        </div>\n    </div>\n    <footer><button (click)=\"animateMenu()\" style=\"cursor:pointer\" id=\"footerButton\">Other Interests</button></footer>\n</div>"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamesComponent = (function () {
    function GamesComponent(_router) {
        this._router = _router;
        this.state = 'hiddenOut';
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent.prototype.animateIntro = function () {
        this.state = (this.state === 'visable' ? 'hiddenOut' : 'hiddenOut');
    };
    GamesComponent.prototype.animateMenu = function () {
        this.state = (this.state === 'hiddenOut' ? 'hiddenIn' : 'hiddenOut');
    };
    GamesComponent.prototype.home = function () {
        this.state = 'hiddenOut';
        this._router.navigate(['/']);
    };
    GamesComponent.prototype.parenting = function () {
        this.state = 'hiddenOut';
        this._router.navigate(['/parenting']);
    };
    GamesComponent.prototype.carpentry = function () {
        this.state = 'hiddenOut';
        this._router.navigate(['/carpentry']);
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('menuAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenIn <=> hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('imageFadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: .2 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenIn <=> hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms ease-in-out')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/parenting/parenting.component.css":
/*!***************************************************!*\
  !*** ./src/app/parenting/parenting.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "         .parentingMain {\n             width: 100%;\n             position: absolute;\n             margin-top: 4.1%;\n         }\n         \n         footer {\n             background-color: black;\n             height: 4em;\n             width: 100%;\n             margin-top: 14.6%;\n             text-align: center;\n             padding-bottom: 1%;\n         }\n         \n         p {\n             font-family: quasimoda-2, sans-serif;\n             /* font-family: quasimoda, sans-serif; */\n             font-style: normal;\n             font-weight: 400;\n             font-size: 2rem;\n             text-align: center;\n         }\n         \n         .introduction {\n             width: 50%;\n             text-align: center;\n             margin: 5%;\n             margin-left: 25%;\n             margin-top: -58%;\n             padding: 3%;\n             position: absolute;\n             background-color: black;\n             color: white;\n             border-radius: 25px;\n         }\n         \n         .smallPics {\n             max-width: 20%;\n             max-height: 13rem;\n         }\n         \n         .smallPicsd {\n             max-width: 20%;\n             max-height: 13rem;\n         }\n         \n         #smallPicsDiv {\n             margin-left: 2%;\n         }\n         \n         #backgroundImage {\n             width: 100%;\n         }\n         \n         #footerButton {\n             padding: .4%;\n             padding-left: 1%;\n             padding-right: 1%;\n             color: white;\n             margin: 1%;\n             background-image: linear-gradient(to bottom, rgb(10, 11, 11), rgb(63, 64, 66));\n             font-family: quasimoda-2, sans-serif;\n             -webkit-font-smoothing: subpixel-antialiased;\n             font-style: normal;\n             font-size: 1.4rem;\n             font-weight: 400;\n             border-radius: 15px;\n         }\n         \n         #footerButton:hover {\n             background-image: linear-gradient(to bottom, rgb(177, 185, 194), rgb(63, 64, 66));\n         }\n         \n         #footerButton:active {\n             border: none;\n         }\n         \n         .hobbies {\n             color: white;\n             background-image: linear-gradient(to bottom, rgb(183, 183, 183), rgb(33, 34, 43));\n             /* position: absolute; */\n             max-width: 50%;\n             margin-left: 25%;\n             margin-top: -33rem;\n             z-index: 9999;\n             border-radius: 50px;\n             border: 2px solid rgb(253, 254, 255);\n             box-shadow: 5px 5px 10px black;\n             /* border: 2px solid rgb(177, 174, 174); */\n             padding: 1%;\n         }\n         \n         .hobbies p {\n             margin: 0px;\n             text-align: center;\n             margin-top: .1875rem;\n             font-family: quasimoda-2, sans-serif;\n             -webkit-font-smoothing: subpixel-antialiased;\n             font-style: normal;\n             font-size: .75rem;\n             font-weight: 400;\n             color: rgb(252, 249, 249);\n         }\n         \n         #homePic {\n             margin: 2%;\n             margin-left: 3%;\n             margin-bottom: 0px;\n             border-radius: 10px;\n             position: inherit;\n             display: inline-block;\n             width: 29%;\n             max-height: 200px;\n             box-shadow: 5px 5px 20px black;\n         }\n         \n         #gamingPic {\n             max-width: 28%;\n             margin: 2.5%;\n             margin-top: 1%;\n             margin-bottom: 0;\n             border-radius: 10px;\n             position: inherit;\n             box-shadow: 5px 5px 20px black;\n         }\n         \n         #building {\n             max-width: 28%;\n             margin: 1%;\n             margin-top: 1%;\n             margin-left: 2%;\n             margin-bottom: 0px;\n             border-radius: 10px;\n             position: inherit;\n             box-shadow: 5px 5px 20px black;\n         }\n         \n         #home {\n             margin-left: 14%;\n         }\n         \n         #gaming {\n             display: inline-block;\n             margin: 1%;\n             margin-top: 0px;\n             margin-left: 22%;\n         }\n         \n         #carpentry {\n             margin-left: 25%;\n         }\n         \n         a {\n             color: inherit;\n             color: white;\n             text-decoration: none;\n             font-family: quasimoda-2, sans-serif;\n             -webkit-font-smoothing: subpixel-antialiased;\n             font-style: normal;\n             font-size: 1rem;\n             font-weight: 400;\n         }\n         \n         a:hover {\n             color: rgb(163, 159, 157);\n         }\n         \n         #otherInterests {\n             display: inline-block;\n             margin-left: 37%;\n         }\n         \n         #close {\n             display: inline-block;\n             margin-top: 1%;\n             margin-left: 25%;\n             font-family: quasimoda-2, sans-serif;\n             -webkit-font-smoothing: subpixel-antialiased;\n             font-style: normal;\n             font-size: 1rem;\n             font-weight: 400;\n         }\n         \n         h2 {\n             text-align: center;\n             font-family: quasimoda-2, sans-serif;\n             -webkit-font-smoothing: subpixel-antialiased;\n             /* font-family: quasimoda, sans-serif; */\n             font-style: normal;\n             font-size: 1.5rem;\n             font-weight: 100;\n             color: white;\n         }\n         \n         button:focus {\n             outline: 0;\n         }\n         \n         @media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: portrait) {\n             .parentingMain {\n                 margin-top: 12.9%;\n             }\n             .smallPicsd {\n                 display: none;\n             }\n             footer {\n                 margin-top: 24%;\n             }\n             .hobbies {\n                 margin: auto;\n                 margin-left: 1p;\n                 margin-top: -39%;\n                 max-width: 93%;\n             }\n             .introduction {\n                 width: 85%;\n                 margin-left: 5%;\n                 margin-top: -66%;\n             }\n             .introduction p {\n                 font-size: 1.5rem;\n             }\n             .smallPics {\n                 max-width: 24%;\n             }\n             .hobbies {\n                 margin-left: 1%;\n                 max-width: 94%;\n                 margin-top: -14rem;\n             }\n             #footerButton {\n                 margin: 3%;\n             }\n             #otherInterests {\n                 margin-left: 23%;\n             }\n             #close {\n                 margin-left: 4%;\n                 font-size: .7rem;\n             }\n             #homePic {\n                 margin: 1%;\n             }\n             #carpentry {\n                 margin-left: 13%;\n             }\n             #gaming {\n                 margin-left: 12%;\n             }\n             #favoritePics p {\n                 font-size: 1.5rem;\n             }\n         }\n         \n         @media only screen and (min-width: 375px) and (max-width: 812px) and (orientation: landscape) {\n             footer {\n                 margin-top: 8%;\n             }\n             .introduction {\n                 width: 50%;\n                 margin-left: 25%;\n             }\n             .introduction p {\n                 font-size: 1.5rem;\n             }\n             .parentingMain {\n                 margin-top: 5.7%;\n             }\n             .smallPics {\n                 max-width: 16%;\n             }\n             .smallPicsd {\n                 display: none;\n             }\n             #favoritePics p {\n                 font-size: 2rem;\n             }\n             #smallPicsDiv {\n                 padding-top: 2%;\n             }\n             .hobbies {\n                 margin-left: 6%;\n                 max-width: 86%;\n                 margin-top: -21rem;\n             }\n         }\n         \n         @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: landscape) {\n             p {\n                 font-size: 1rem;\n             }\n             footer {\n                 margin-top: 45%;\n             }\n             .parentingMain {\n                 margin-top: 7.4%;\n             }\n             .introduction {\n                 width: 75%;\n                 margin-left: 10.5%;\n                 margin-top: -63%;\n             }\n             .smallPics {\n                 max-width: 16%;\n             }\n             .smallPicsd {\n                 display: none;\n             }\n             .hobbies {\n                 max-width: 90%;\n                 margin: auto;\n                 margin-left: 2p;\n                 margin-top: -82%;\n             }\n             #otherInterests {\n                 margin-left: 25%;\n             }\n             #close {\n                 margin-left: 3%;\n                 font-size: .7rem;\n             }\n             #homePic {\n                 margin: 1%;\n             }\n             #home {\n                 margin-left: 12%;\n             }\n             #carpentry,\n             #gaming {\n                 margin-left: 15%;\n             }\n             #footerButton {\n                 margin: 2%;\n             }\n         }\n         \n         @media only screen and (min-width: 414px) and (max-width: 736px) and (orientation: portrait) {\n             footer {\n                 margin-top: 11%;\n             }\n             .hobbies {\n                 margin: auto;\n                 margin-left: 1p;\n                 margin-top: -39%;\n                 max-width: 93%;\n             }\n             .parentingMain {\n                 margin-top: 11.4%;\n             }\n             .introduction {\n                 width: 85%;\n                 margin-left: 5%;\n                 margin-top: -66%;\n             }\n             .introduction p {\n                 font-size: 1.5rem;\n             }\n             .hobbies {\n                 margin-left: 1%;\n                 max-width: 94%;\n                 margin-top: -14rem;\n             }\n             #footerButton {\n                 margin: 1%;\n             }\n             #otherInterests {\n                 margin-left: 23%;\n             }\n             #close {\n                 margin-left: 4%;\n                 font-size: .7rem;\n             }\n             #homePic {\n                 margin: 1%;\n             }\n             #carpentry {\n                 margin-left: 13%;\n             }\n             #gaming {\n                 margin-left: 12%;\n             }\n             #footerButton {\n                 margin: 2%;\n             }\n         }\n         \n         @media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: portrait) {\n             .parentingMain {\n                 margin-top: 10.7%;\n             }\n         }\n         \n         @media only screen and (min-width: 375px) and (max-width: 667px) and (orientation: landscape) {\n             footer {\n                 margin-top: 4%;\n             }\n             .hobbies {\n                 margin-top: -41%;\n             }\n             #otherInterests {\n                 margin-left: 32%;\n             }\n             #close {\n                 font-size: 1rem;\n                 margin-left: 22%;\n             }\n             #carpentry {\n                 margin-left: 21%;\n             }\n         }"

/***/ }),

/***/ "./src/app/parenting/parenting.component.html":
/*!****************************************************!*\
  !*** ./src/app/parenting/parenting.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parentingMain\">\n    <img [@imageFadeAnimation]='state' (mouseover)=\"animateIntro()\" id=\"backgroundImage\" src=\"assets/images/Parenting/DSC_1555.jpg\" alt=\"\">\n    <div [@introAnimation]='state' class=\"introduction\">\n        <p>Without a doubt, one of my favorite activities is being a Dad to my amazing daughter!</p>\n    </div>\n    <!-- <div id=\"favoritePics\">\n        <p>Some of my favorite pictures:</p>\n    </div>\n    <div id=\"smallPicsDiv\">\n        <img [@imageFadeAnimation]='state' class=\"smallPicsd\" src=\"assets/images/Parenting/IMG_1709.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/0611101759b_01b.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_4278.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/DSCN1453.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_4296.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_4285.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/DSCN0219.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_0584.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_4311.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_1738.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_1695.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_0047.jpg\" alt=\"\">\n        <img [@imageFadeAnimation]='state' class=\"smallPics\" src=\"assets/images/Parenting/IMG_0055.jpg\" alt=\"\">\n    </div> -->\n    <div [@menuAnimation]='state' class=\"hobbies\" (click)=\"animateMenu()\">\n        <h2 id=\"otherInterests\"> My other passions</h2>\n        <h3 style=\"cursor:pointer\" id=\"close\">Close X</h3>\n        <p>click to explore further</p>\n        <a style=\"cursor:pointer\"><img (click)=\"home()\" id=\"homePic\" src=\"assets/images/IMG_3219.jpg\" alt=\"\"></a>\n        <a style=\"cursor:pointer\"><img (click)=\"carpentry()\" id=\"building\" src=\"assets/images/IMG_0534.jpg\" alt=\"\"></a>\n        <a style=\"cursor:pointer\"><img (click)=\"gaming()\" id=\"gamingPic\" src=\"assets/images/IMG_0334.jpg\" alt=\"\"></a>\n        <a id=\"home\" (click)=\"home()\" style=\"cursor:pointer\">Home</a>\n        <a id=\"carpentry\" (click)=\"carpentry()\" style=\"cursor:pointer\">Carpentry</a>\n        <a id=\"gaming\" (click)=\"gaming()\" style=\"cursor:pointer\">Gaming</a>\n    </div>\n    <footer><button (click)=\"animateMenu()\" style=\"cursor:pointer\" id=\"footerButton\">Other Interests</button> </footer>\n</div>"

/***/ }),

/***/ "./src/app/parenting/parenting.component.ts":
/*!**************************************************!*\
  !*** ./src/app/parenting/parenting.component.ts ***!
  \**************************************************/
/*! exports provided: ParentingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentingComponent", function() { return ParentingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParentingComponent = (function () {
    function ParentingComponent(_router) {
        this._router = _router;
        this.state = 'visable';
        this._router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    ParentingComponent.prototype.ngOnInit = function () {
    };
    ParentingComponent.prototype.animateIntro = function () {
        this.state = (this.state === 'visable' ? 'hiddenOut' : this.state === 'hiddenIn' ? 'hiddenIn' : 'hiddenOut');
    };
    ParentingComponent.prototype.animateMenu = function () {
        this.state = (this.state === 'visable' ? 'hiddenIn' : this.state === 'hiddenIn' ? 'hiddenOut' : 'hiddenIn');
    };
    ParentingComponent.prototype.home = function () {
        this.state = 'hiddenOut';
        this._router.navigate(['/']);
    };
    ParentingComponent.prototype.gaming = function () {
        this.state = 'hiddenOut';
        this._router.navigate(['/games']);
    };
    ParentingComponent.prototype.carpentry = function () {
        this.state = 'hiddenOut';
        this._router.navigate(['/carpentry']);
    };
    ParentingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parenting',
            template: __webpack_require__(/*! ./parenting.component.html */ "./src/app/parenting/parenting.component.html"),
            styles: [__webpack_require__(/*! ./parenting.component.css */ "./src/app/parenting/parenting.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('introAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visable', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visable => hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2500ms ease-in')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('menuAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visable', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenIn <=> hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('imageFadeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hiddenIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: .2 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hiddenIn <=> hiddenOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms ease-in-out')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ParentingComponent);
    return ParentingComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    position: absolute;\n    margin-top: 4.1%;\n}\n\n.sidebar {\n    vertical-align: top;\n    width: 16%;\n    background-color: rgb(57, 54, 54);\n    display: inline-block;\n    padding: 1%;\n    padding-bottom: 17%;\n}\n\n.page {\n    background-color: white;\n    width: 80%;\n    border: 2px solid lightgrey;\n    padding: .625em;\n    padding-right: 0px;\n    border-radius: 5px;\n    box-shadow: 5px 5px 5px rgb(35, 38, 41);\n    display: inline-block;\n}\n\nh2 {\n    text-align: center;\n    color: rgb(119, 117, 228);\n    font-family: 'Open Sans', regular italic, sans-serif;\n    font-family: quasimoda-2, sans-serif;\n    /* font-family: quasimoda, sans-serif; */\n    /* font-family: minerva-modern, sans-serif; */\n    font-style: normal;\n    font-weight: 400;\n}\n\nh3 {\n    color: #0E81B6;\n    margin-top: 1%;\n    margin-bottom: 4%;\n}\n\nfooter {\n    background-color: black;\n    height: 3.75em;\n    max-width: 100%;\n}\n\n.sideTitle {\n    text-align: right;\n    color: rgb(143, 144, 145);\n    color: rgb(184, 186, 187);\n    color: rgb(230, 230, 230);\n    font-family: 'Open Sans', regular italic, sans-serif;\n    font-family: quasimoda-2, sans-serif;\n    /* font-family: quasimoda, sans-serif; */\n    /* font-family: minerva-modern, sans-serif; */\n    font-style: normal;\n    font-weight: 400;\n}\n\nimg {\n    width: 90%;\n    margin: .625em;\n    margin-left: .75em;\n    margin-top: .125em;\n}\n\n#profilePic {\n    display: block;\n    margin: auto;\n    margin-top: 1%;\n}\n\n.profile {\n    width: 20%;\n    margin: 1%;\n    background-color: white;\n    border: 2px solid lightgrey;\n    font-size: 12pt;\n    padding: 1%;\n    border-radius: 5px;\n    box-shadow: 5px 5px 5px rgb(35, 38, 41);\n    display: inline-block;\n}\n\n.experience {\n    /* width: 55%; */\n    margin-top: 1%;\n    border: 2px solid lightgrey;\n    padding: 1%;\n    /* border-radius: 5px; */\n    /* box-shadow: 5px 5px 5px rgb(35, 38, 41); */\n    display: inline-block;\n    /* font-family: 'Open Sans', regular italic, sans-serif; */\n    font-family: quasimoda-2, sans-serif;\n    /* font-family: quasimoda, sans-serif; */\n    /* font-family: minerva-modern, sans-serif; */\n    font-family: fanwood, serif;\n    /* font-family: omnes-pro, sans-serif; */\n    font-style: normal;\n    font-weight: 100;\n}\n\nul {\n    margin: 2%;\n    margin-top: 1%;\n}\n\n.items {\n    margin: 2%;\n}\n\n.icons {\n    margin: 7%;\n    margin-bottom: 0px;\n}\n\n.icons img {\n    margin-left: 10%;\n}\n\n.skills {\n    height: 97%;\n    width: 13%;\n    margin: 1%;\n    margin-top: 1%;\n    border: 19px solid lightgrey;\n    padding: 1%;\n    box-shadow: 5px 5px 5px rgb(35, 38, 41);\n    display: inline-block;\n    border-radius: 175px;\n    vertical-align: top;\n    background-color: rgb(157, 220, 245);\n    background-image: linear-gradient(to bottom, rgb(126, 130, 134), rgb(63, 64, 66));\n}\n\n.skills2 {\n    height: 22rem;\n    width: 80%;\n    margin: auto;\n    margin-top: 15%;\n    border: 5px solid lightgrey;\n    padding: 1%;\n    box-shadow: 5px 5px 5px rgb(35, 38, 41);\n    display: none;\n    border-radius: 175px;\n    vertical-align: top;\n    background-color: rgb(157, 220, 245);\n    background-image: linear-gradient(to bottom, rgb(126, 130, 134), rgb(63, 64, 66));\n}\n\n.education,\n.recognitions {\n    text-align: center;\n    /* width: 27%; */\n    margin-top: 1%;\n    border: 2px solid lightgrey;\n    padding: 1%;\n    /* border-radius: 5px; */\n    /* box-shadow: 5px 5px 5px rgb(35, 38, 41); */\n    display: block;\n    font-family: quasimoda-2, sans-serif;\n    /* font-family: quasimoda, sans-serif; */\n    /* font-family: minerva-modern, sans-serif; */\n    font-family: fanwood, serif;\n    /* font-family: omnes-pro, sans-serif; */\n    font-style: normal;\n    font-weight: 100;\n}\n\n.hrTop {\n    width: 75%;\n    margin-left: 10%;\n}\n\n#title {\n    color: white;\n    margin: 1%;\n    text-align: center;\n    color: rgb(5, 118, 238);\n    color: rgb(63, 64, 66);\n    font-size: 1.5rem;\n    font-family: 'Open Sans', regular italic, sans-serif;\n    font-family: quasimoda-2, sans-serif;\n    /* font-family: quasimoda, sans-serif; */\n    font-family: minerva-modern, sans-serif;\n    font-style: normal;\n    font-weight: bold;\n}\n\n#titleSkills {\n    color: white;\n    margin: 1%;\n    text-align: center;\n    color: rgb(56, 57, 58);\n    /* color: rgb(12, 41, 168); */\n    color: black;\n    color: rgb(174, 209, 243);\n    /* color: rgb(5, 118, 238); */\n    font-size: 14pt;\n    font-family: 'Open Sans', regular italic, sans-serif;\n    font-family: quasimoda-2, sans-serif;\n    /* font-family: quasimoda, sans-serif; */\n    /* font-family: minerva-modern, sans-serif; */\n    font-style: normal;\n    font-weight: 400;\n}\n\n#firstName {\n    color: rgb(47, 79, 114);\n    /* color: rgb(5, 118, 238); */\n    color: rgb(56, 96, 138);\n    color: rgb(44, 102, 160);\n    color: rgb(5, 118, 238);\n    color: rgb(140, 181, 225);\n    margin: 1%;\n    margin-bottom: 0px;\n    margin-right: 0px;\n    /* margin-left: 30%;\n    text-align: left; */\n    font-family: 'Open Sans', regular italic, sans-serif;\n    display: inline-block;\n    vertical-align: top;\n}\n\n#lastName {\n    color: rgb(143, 144, 145);\n    color: rgb(184, 186, 187);\n    color: rgb(230, 230, 230);\n    margin: 1%;\n    margin-bottom: 0px;\n    margin-left: 2px;\n    text-align: center;\n    font-family: 'Open Sans', regular italic, sans-serif;\n    display: inline-block;\n}\n\n#stackshare {\n    width: 90%;\n    margin: 1%;\n    margin-left: 8%;\n    margin-bottom: 1%;\n    margin-top: 0px;\n    display: block;\n}\n\n#stackshareA {\n    color: #0a12e2;\n    margin-left: 25%;\n    margin-bottom: 2%;\n}\n\n#innerCircle {\n    margin-top: 24px;\n    background-color: white;\n    /* width: 90%; */\n    height: 82%;\n    border-radius: 108px;\n    padding: 2%;\n    padding-bottom: 25%;\n}\n\n#java,\n#javascript,\n#python {\n    width: 75%;\n}\n\n#angular {\n    margin: 5px;\n    margin-top: 0px;\n}\n\n#django,\n#nodejs {\n    margin-bottom: 0px;\n}\n\n#javascript {\n    margin-top: 1%;\n    margin-bottom: 1%;\n}\n\n#nodejs {\n    width: 65%;\n    margin-left: 15%;\n    margin-top: 4%;\n}\n\n#codingDojo,\n#grambling,\n#ibm {\n    width: 10%;\n}\n\n#educationAndExperience {\n    width: 79%;\n    display: inline-block;\n}\n\n#downloadDiv {\n    text-align: center;\n    margin-top: 99%;\n    color: rgb(230, 230, 230);\n}\n\n#download {\n    width: 52%;\n}\n\n#downloadA {\n    color: white;\n    text-decoration: none;\n}\n\n#downloadA:active {\n    font-weight: bold;\n}\n\n#downloadA:hover {\n    font-weight: bold;\n    color: rgb(140, 181, 225);\n}\n\n@media only screen and (aspect-ratio: 1366/1024) {\n    .main {\n        margin-top: 6%;\n    }\n    .sidebar {\n        padding-bottom: 24%;\n    }\n}\n\n@media only screen and (aspect-ratio: 1024/1366) {\n    .main {\n        margin-top: 8%\n    }\n    #educationAndExperience {\n        width: 77%;\n    }\n    .sidebar {\n        padding-bottom: 74%;\n    }\n    #stackshareA {\n        margin-left: 17%;\n        font-size: .8rem;\n    }\n}\n\n@media only screen and (aspect-ratio: 1024/768) {\n    .main {\n        margin-top: 6%\n    }\n    #educationAndExperience {\n        width: 77%;\n    }\n    .sidebar {\n        padding-bottom: 74%;\n    }\n    #stackshareA {\n        margin-left: 17%;\n        font-size: .8rem;\n    }\n}\n\n@media only screen and (aspect-ratio: 768/1024) {\n    .main {\n        margin-top: 8%\n    }\n    .page {\n        width: 79%;\n    }\n    #educationAndExperience {\n        width: 76%;\n    }\n    .sidebar {\n        padding-bottom: 76%;\n    }\n    #stackshareA {\n        margin-left: 0%;\n        font-size: .8rem;\n    }\n}\n\n@media only screen and (aspect-ratio: 736/414) {\n    .main {\n        margin-top: 7.3%\n    }\n    .page {\n        width: 79%;\n    }\n    .items p {\n        font-size: .7rem;\n    }\n    .sidebar {\n        padding-bottom: 42%;\n    }\n    ul {\n        margin: 5%;\n    }\n    li {\n        font-size: .7rem;\n    }\n    #educationAndExperience {\n        width: 75%;\n    }\n    #stackshareA {\n        margin-left: 13%;\n        font-size: .5rem;\n    }\n    #title {\n        font-size: 1rem;\n    }\n}\n\n@media only screen and (aspect-ratio: 667/375) {\n    .main {\n        margin-top: 7.4%\n    }\n    .page {\n        width: 79%;\n    }\n    .items p {\n        font-size: .7rem;\n    }\n    ul {\n        margin: 5%;\n    }\n    li {\n        font-size: .7rem;\n    }\n    .sidebar {\n        padding-bottom: 45%;\n    }\n    #educationAndExperience {\n        width: 75%;\n    }\n    #title {\n        font-size: 1rem;\n    }\n    #stackshareA {\n        margin-left: 0%;\n        font-size: .7rem;\n    }\n}\n\n@media only screen and (max-width: 480px) {\n    .sidebar {\n        padding-bottom: 27%;\n    }\n    .main {\n        margin-top: 10.7%;\n    }\n    .page {\n        width: 77%;\n    }\n    .items p {\n        font-size: .7rem;\n    }\n    ul {\n        margin: 5%;\n    }\n    li {\n        font-size: .7rem;\n    }\n    .skills {\n        display: none;\n    }\n    .skills2 {\n        display: block;\n    }\n    #educationAndExperience {\n        width: 96%;\n    }\n    #title {\n        font-size: 1rem;\n    }\n    #titleSkills {\n        font-size: .9rem;\n    }\n    #innerCircle {\n        height: 88%;\n        margin-top: 2%;\n        padding: 0%;\n    }\n    #stackshareA {\n        margin: 0;\n        font-size: .5rem;\n    }\n    #downloadA {\n        font-size: .8rem;\n    }\n    .sideTitle {\n        font-size: 1rem;\n    }\n}\n\n@media only screen and (aspect-ratio: 414/736) {\n    .sidebar {\n        padding-bottom: 30%;\n    }\n    #stackshareA {\n        margin-left: 13%;\n    }\n    .sideTitle {\n        font-size: .7rem;\n        margin-top: 2%;\n    }\n    .main {\n        margin-top: 9%;\n    }\n}\n\n@media only screen and (max-width: 375px) {\n    .main {\n        margin-top: 13.1%\n    }\n    .sideTitle {\n        font-size: .7rem;\n    }\n    .sidebar {\n        padding-bottom: 51%;\n    }\n    #stackshareA {\n        margin-left: 15%;\n    }\n}"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"sidebar\">\n        <!-- <h2 id=\"firstName\">Hiram</h2>\n                <h2 id=\"lastName\">Neal</h2> -->\n        <img id=\"profilePic\" src=\"assets/images/Profile_Pic.png\" alt=\"\">\n        <h3 class=\"sideTitle\">Software Engineer</h3>\n        <h3 class=\"sideTitle\">Full Stack Web Developer</h3>\n        <div id=\"downloadDiv\">\n            <a href=\"https://s3.amazonaws.com/hns3bucket/Hiram+K.+Neal+Web+Developer.pdf\" download><img id=\"download\" src=\"assets/images/PDF_Downloads.png\" alt=\"\"></a>\n            <p><a id=\"downloadA\" href=\"https://s3.amazonaws.com/hns3bucket/Hiram+K.+Neal+Web+Developer.pdf\" download>Download</a> </p>\n        </div>\n        <div class=\"skills2\">\n            <!-- <hr>\n            <hr> -->\n            <h2 id=\"titleSkills\">Skills</h2>\n            <!-- <hr>\n            <hr> -->\n            <div id=\"innerCircle\">\n                <div class=\"icons\">\n                    <img id=\"angular\" src=\"assets/images/angularjs-logo.png\" alt=\"\">\n                    <img id=\"python\" src=\"assets/images/python.png\" alt=\"\">\n                    <img id=\"java\" src=\"assets/images/java-logo.png\" alt=\"\">\n                    <img id=\"javascript\" src=\"assets/images/javascript_logo.png\" alt=\"\">\n                    <img id=\"nodejs\" src=\"assets/images/nodejs_logo.png\" alt=\"\">\n                    <img id=\"django\" src=\"assets/images/django.png\" alt=\"\">\n                </div>\n                <a id=\"stackshareB\" href=\"https://stackshare.io/hkneal/my-stack\"><img id=\"stackshare\" src=\"assets/images/stackshare_logo_transparent.png\" alt=\"\"></a>\n                <a id=\"stackshareA\" href=\"https://stackshare.io/hkneal/my-stack\">My stack</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"page\">\n        <div id=\"educationAndExperience\">\n            <div class=\"experience\">\n                <!-- <hr> -->\n                <!-- <hr> -->\n                <h2 id=\"title\">Professional Experience</h2>\n                <!-- <hr> -->\n                <hr>\n                <div>\n                    <div class=\"items\">\n                        <!-- <img id=\"ibm\" src=\"assets/images/IBM.png\" -->\n                        <p><b>IBM CORPORATION:</b> San Jose, CA (August 1998 - May 2016) -\n                            <i>Software Engineer (Team Lead)</i>\n                        </p>\n                        <p>Software Engineer - Coded & developed workload scenarios, environments, and drivers to effectively evaluate new and existing code functionality. Exceeded our quality assurance goals as Team Lead and provided key feedback and recommendations\n                            to clients and development teams. Responsibilities / Skills included:\n                        </p>\n                        <ul>\n                            <li>Monitoring and development tools: IMS Performance Analyzer (IMSPA); Resource Measurement Facility (RMF); Visual Performance Analyzer (VPA); Eclipse IDE; & Rational Developer for System Z; experience with JMeter & Wireshark.\n                            </li>\n                            <li>Improving workload scenario test cases & environments: coded workload automation configurations and programs; mainframe/Windows; Java TPNS Script; etc. (Reduced a 1 week testing effort into an 8 hour shift).\n                            </li>\n                            <li>Developed and Maintained evaluation scenarios, environments, and drivers: Evaluated new IMS functionality within an IMS Performance evaluation scope. Operated as the team IMS zOS Systems Admin.\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <!--end of experience -->\n            <div class=\"education\">\n                <!-- <hr>\n                <hr> -->\n                <h2 id=\"title\">Education</h2>\n                <!-- <hr> -->\n                <hr>\n                <div>\n                    <div class=\"items\">\n                        <!-- <img id=\"codingDojo\" src=\"assets/images/coding_dojo_logo_black.png\" alt=\"\">  -->\n                        <p><b>CODING DOJO -</b> San Jose, CA (April 2017 - September 2017) Coding Bootcamp\n                        </p>\n                        <p>\n                            <i>Full Stack Development (HTML/CSS, Javascript, JQuery, REST-ful API, Python, MongoDB, Angular, Express, Node.js)\n                            </i>\n                        </p>\n                        <br>\n                        <!-- <img id=\"grambling\" src=\"assets/images/grambling.png\" alt=\"\">  -->\n                        <p><b>GRAMBLING STATE UNIVERSITY – </b> Bachelor of Science in Computer Science, Grambling, LA.</p>\n                        <p><i>Honors:</i> Earl Lester Cole Honors College\n                        </p>\n                        <br>\n                        <p><b>IBM –</b> Leadership Excellence Program, Silicon Valley Laboratory, San Jose, CA.\n                        </p>\n\n                    </div>\n                </div>\n            </div>\n            <div class=\"recognitions\">\n                <!-- <hr>\n                <hr> -->\n                <h2 id=\"title\">Recognitions</h2>\n                <!-- <hr> -->\n                <hr>\n                <div class=\"items\">\n                    <p>IBM Silicon Valley Laboratory Team Leadership Award, Silicon Valley Laboratory, San Jose, CA.\n                    </p>\n                    <br>\n                    <p>Modern Day Leader in Technology Recognition, US Black Engineer & Information Technology Magazine\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"skills\">\n            <!-- <hr>\n            <hr> -->\n            <h2 id=\"titleSkills\">Skills</h2>\n            <!-- <hr>\n            <hr> -->\n            <div id=\"innerCircle\">\n                <div class=\"icons\">\n                    <img id=\"angular\" src=\"assets/images/angularjs-logo.png\" alt=\"\">\n                    <img id=\"python\" src=\"assets/images/python.png\" alt=\"\">\n                    <img id=\"java\" src=\"assets/images/java-logo.png\" alt=\"\">\n                    <img id=\"javascript\" src=\"assets/images/javascript_logo.png\" alt=\"\">\n                    <img id=\"nodejs\" src=\"assets/images/nodejs_logo.png\" alt=\"\">\n                    <img id=\"django\" src=\"assets/images/django.png\" alt=\"\">\n                </div>\n                <a id=\"stackshareB\" href=\"https://stackshare.io/hkneal/my-stack\"><img id=\"stackshare\" src=\"assets/images/stackshare_logo_transparent.png\" alt=\"\"></a>\n                <a id=\"stackshareA\" href=\"https://stackshare.io/hkneal/my-stack\">view my stack</a>\n            </div>\n        </div>\n    </div>\n    <footer></footer>\n</div>\n"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeComponent = (function () {
    function ResumeComponent(_router) {
        this._router = _router;
        this.state = 'large';
    }
    ResumeComponent.prototype.ngOnInit = function () {
        // this.animate();
        this._router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    ResumeComponent.prototype.animate = function () {
        this.state = (this.state === 'small' ? 'large' : 'small');
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('small', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(.1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'scale(1)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('small <=> large', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/HKN/myPortfolio/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map