var countdown = document.querySelector('.countdown');
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var newChild;

  function updateClock() {
    var t = getTimeRemaining(endtime);
    var daysArr = String(t.days).split('');
    daysSpan.innerHTML = '';
    for (var i = 0; i < daysArr.length; i++) {
      newChild = document.createElement('span');
      newChild.innerHTML = daysArr[i];
      daysSpan.appendChild(newChild);
    }
    var hoursArr = String(('0' + t.hours).slice(-2)).split('');
    hoursSpan.innerHTML = '';
    for (var i = 0; i < hoursArr.length; i++) {
      newChild = document.createElement('span');
      newChild.innerHTML = hoursArr[i];
      hoursSpan.appendChild(newChild);
    }
    var minuteArr = String(('0' + t.minutes).slice(-2)).split('');
    minutesSpan.innerHTML = '';
    for (var i = 0; i < minuteArr.length; i++) {
      newChild = document.createElement('span');
      newChild.innerHTML = minuteArr[i];
      minutesSpan.appendChild(newChild);
    }
    var secondArr = String(('0' + t.seconds).slice(-2)).split('');
    secondsSpan.innerHTML = '';
    for (var i = 0; i < secondArr.length; i++) {
      newChild = document.createElement('span');
      newChild.innerHTML = secondArr[i];
      secondsSpan.appendChild(newChild);
    }
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// set your wedding date here
var deadline = 'May 15 2022 11:00:00 GMT+0300';
if (countdown) {
  initializeClock('timer', deadline);
}

/*-- cat run  */
/*-- show album  */
let showAlbum = () => {
  jQuery(document).ready(function () {
    jQuery('#nanogallery2').nanogallery2({
      // ### gallery settings ###
      galleryMosaic: [
        // default layout
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 4, r: 1 },
        { w: 2, h: 1, c: 5, r: 1 },
        { w: 2, h: 2, c: 5, r: 2 },
        { w: 1, h: 1, c: 4, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 2, h: 1, c: 3, r: 4 },
        { w: 1, h: 1, c: 5, r: 4 },
        { w: 1, h: 1, c: 6, r: 4 },
      ],
      galleryMosaicXS: [
        // layout for XS width
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 1, h: 1, c: 3, r: 4 },
      ],
      galleryMosaicSM: [
        // layout for SM width
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 1, h: 1, c: 3, r: 4 },
      ],
      galleryMaxRows: 1,
      galleryDisplayMode: 'rows',
      gallerySorting: 'random',
      thumbnailDisplayOrder: 'random',

      thumbnailHeight: '180',
      thumbnailWidth: '220',
      thumbnailAlignment: 'scaled',
      thumbnailGutterWidth: 0,
      thumbnailGutterHeight: 0,
      thumbnailBorderHorizontal: 0,
      thumbnailBorderVertical: 0,

      thumbnailToolbarImage: null,
      thumbnailToolbarAlbum: null,
      thumbnailLabel: { display: false },

      // DISPLAY ANIMATION
      // for gallery
      galleryDisplayTransitionDuration: 1500,
      // for thumbnails
      thumbnailDisplayTransition: 'imageSlideUp',
      thumbnailDisplayTransitionDuration: 1200,
      thumbnailDisplayTransitionEasing: 'easeInOutQuint',
      thumbnailDisplayInterval: 60,

      // THUMBNAIL HOVER ANIMATION
      thumbnailBuildInit2: 'image_scale_1.15',
      thumbnailHoverEffect2:
        'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
      touchAnimation: true,
      touchAutoOpenDelay: 500,

      // LIGHTBOX
      viewerToolbar: { display: false },
      viewerTools: {
        topLeft: 'label',
        topRight: 'rotateLeft, rotateRight, fullscreenButton, closeButton',
      },

      // GALLERY THEME
      galleryTheme: {
        thumbnail: { background: '#111' },
      },

      // DEEP LINKING
      locationHash: true,
      items: [
        { src: './img/a20.jpg', srct: './img/a20.jpg' },
        { src: './img/a12.jpeg', srct: './img/a12.jpeg' },
        { src: './img/a2.jpeg', srct: './img/a2.jpeg' },
        { src: './img/a3.jpeg', srct: './img/a3.jpeg' },
        { src: './img/a4.jpeg', srct: './img/a4.jpeg' },
        { src: './img/a5.jpeg', srct: './img/a5.jpeg' },
        { src: './img/a6.jpeg', srct: './img/a6.jpeg' },
        { src: './img/a7.jpeg', srct: './img/a7.jpeg' },
        { src: './img/a8.jpeg', srct: './img/a8.jpeg' },
        { src: './img/a9.jpeg', srct: './img/a9.jpeg' },
        { src: './img/a10.jpeg', srct: './img/a10.jpeg' },
        { src: './img/a11.jpeg', srct: './img/a11.jpeg' },
        { src: './img/a1.jpeg', srct: './img/a1.jpeg' },
        { src: './img/a17.jpg', srct: './img/a17.jpg' },
        { src: './img/a18.jpg', srct: './img/a18.jpg' },
        { src: './img/a19.jpg', srct: './img/a19.jpg' },
        { src: './img/a20.jpg', srct: './img/a20.jpg' },
        { src: './img/a21.jpg', srct: './img/a21.jpg' },
        { src: './img/a22.jpeg', srct: './img/a22.jpeg' },
        { src: './img/a23.jpeg', srct: './img/a23.jpeg' },
        { src: './img/a24.jpeg', srct: './img/a24.jpeg' },
        { src: './img/a25.jpeg', srct: './img/a25.jpeg' },
        { src: './img/a26.jpeg', srct: './img/a26.jpeg' },
        { src: './img/a27.jpeg', srct: './img/a27.jpeg' },
        { src: './img/a28.jpeg', srct: './img/a28.jpeg' },
      ],
    });
  });
};
showAlbum();
