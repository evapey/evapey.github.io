/*
 * this file use for toggle template function
 * -------------------------------------------------- */

//
// countdown
// --------------------------------------------------
//

var _countdown =                        false; // [true, false] - countdown toggle
var _countdown_date =                   [2020, 02, 03]; // 2016[year] - 12[month] - 1[day]
var _countdown_gmt =                    true; // [true, false] - gmt time

//
// border - header bottom and footer top
// --------------------------------------------------
//

var _site_border =                      true; // [true, false] - border toggle

//
// background
// --------------------------------------------------
// choose background version for each desktop and mobile :)
//

// for desktop
var _bg_style_desktop =                 3;
                                           // 1 = each image at each section
                                           // 2 = each image at each section (mp3 audio)
                                           // 3 = image
                                           // 4 = image (mp3 audio)
                                           // 5 = slideshow
                                           // 6 = slideshow (mp3 audio)
                                           // 7 = slideshow (kenburn)
                                           // 8 = slideshow (kenburn, mp3 audio)
                                           // 9 = html5 video (mute)
                                           // 10 = html5 video (video audio)
                                           // 11 = html5 video (mp3 audio)
                                           // 12 = youtube video (mute)
                                           // 13 = youtube video (video audio)
                                           // 14 = youtube video (mp3 audio)

// for mobile
var _bg_style_mobile =                  3;
                                           // 1 = each image at each section
                                           // 2 = each image at each section (mp3 audio)
                                           // 3 = image
                                           // 4 = image (mp3 audio)
                                           // 5 = slideshow
                                           // 6 = slideshow (mp3 audio)
                                           // 7 = slideshow (kenburn)
                                           // 8 = slideshow (kenburn, mp3 audio)

// if _bg_style == 4 - 6 (slideshow)
var _bg_slideshow_image_amount =        2; // slideshow image amount
var _bg_slideshow_duration =            9000; // millisecond


//
// background effect (cloud / star)
// --------------------------------------------------
//

var _bg_effect =                        3; // 0 = disable, 1 = cloud, 2 = parallax star star, 3 = star

//
// if _bg_effect == 1 (cloud)
// --------------------------------------------------
//

var _cloud_opacity =                    1; // [0.1 to 1] - cloud opacity

//
// if _bg_effect == 2 (parallax star)
// --------------------------------------------------
//

var _parallax_star_opacity =            1; // [0.1 to 1] - parallax star opacity


//
// if _bg_effect == 3 (star)
// --------------------------------------------------
//

var _bg_effect_star_color =             'rgba(191, 182, 182, 0.3)';// rgba format - star color
var _bg_effect_star_width =             1.8; // px - star width