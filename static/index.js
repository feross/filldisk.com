var mb = document.querySelector('.mb')

window.addEventListener('message', onMessage, false)

function onMessage (event) {

  var frameNum = event.data

  /**
   * Save the highest subdomain that we've set data on,
   * so that we can reclaim the space later.
   */

  try {
    localStorage['highest'] = frameNum
  } catch (e) {
    console.error('local storage exception')
    return
  }

  /**
   * Calculate the amount of used space in MB
   */

  var usedMB = (frameNum * 5) - 5
  mb.innerHTML = usedMB

  /**
   * Set background of page to match amount of used space.
   */

   var nonRed = (256 - Math.min(frameNum, 255)).toString(16)
   if (nonRed.length == 1) {
    nonRed = '0' + nonRed
   }
   document.body.style.background = '#FF' + nonRed + nonRed

   /**
    * Show another cat
    */

   setNextCat()

}

/**
 * Reclaim the disk space that we used.
 */

var reclaim = document.querySelector('.reclaim')
reclaim.addEventListener('click', reclaimSpace, false)

function reclaimSpace (event) {
  reclaim.disabled = 'disabled'
  setFrame('http://' + localStorage.highest + '.filldisk.com/frame.html?reclaim=true')
}

/**
 * Injects a CSS style tag into page.
 * @param  {String} rules CSS rules to inject
 */

function setFrame (src) {
  var oldFrame = document.querySelector('iframe')
  if (oldFrame) {
    oldFrame.parentElement.removeChild(oldFrame)
  }
  var frame = document.createElement('iframe')
  frame.src = src
  document.getElementsByTagName('body')[0].appendChild(frame)
}

/**
 * List of cat pictures to show.
 */

var cats = [
  '/cats/030827.png',
  '/cats/030828.png',
  '/cats/030829.png',
  '/cats/030830.png',
  '/cats/030831.png',
  '/cats/030901.png',
  '/cats/030902.png',
  '/cats/030903.png',
  '/cats/030904.png',
  '/cats/030905.png',
  '/cats/030906.png',
  '/cats/030907.png',
  '/cats/030908.png',
  '/cats/030909.png',
  '/cats/030910.png',
  '/cats/030911.png',
  '/cats/030912.png',
  '/cats/030913.png',
  '/cats/030914.png',
  '/cats/030915.png',
  '/cats/030916.png',
  '/cats/030917.png',
  '/cats/030918.png',
  '/cats/030919.png',
  '/cats/030920.png',
  '/cats/030921.png',
  '/cats/030922.png',
  '/cats/030923.png',
  '/cats/030924.png',
  '/cats/030925.png',
  '/cats/030926.png',
  '/cats/030927.png',
  '/cats/030928.png',
  '/cats/030929.png',
  '/cats/030930.png',
  '/cats/031001.png',
  '/cats/031002.png',
  '/cats/031003.png',
  '/cats/031004.png',
  '/cats/031005.png',
  '/cats/031006.png',
  '/cats/031007.png',
  '/cats/031008.png',
  '/cats/031009.png',
  '/cats/031010.png',
  '/cats/031011.png',
  '/cats/031012.png',
  '/cats/031013.png',
  '/cats/031014.png',
  '/cats/031015.png',
  '/cats/031016.png',
  '/cats/031017.png',
  '/cats/031018.png',
  '/cats/031019.png',
  '/cats/031020.png',
  '/cats/031021.png',
  '/cats/031022.png',
  '/cats/031023.png',
  '/cats/031024.png',
  '/cats/031025.png',
  '/cats/031026.png',
  '/cats/031027.png',
  '/cats/031028.png',
  '/cats/031029.png',
  '/cats/031030.png',
  '/cats/031031.png',
  '/cats/031101.png',
  '/cats/031102.png',
  '/cats/031103.png',
  '/cats/031104.png',
  '/cats/031105.png',
  '/cats/031106.png',
  '/cats/031107.png',
  '/cats/031108.png',
  '/cats/031109.png',
  '/cats/031110.png',
  '/cats/031111.png',
  '/cats/031112.png',
  '/cats/031113.png',
  '/cats/031114.png',
  '/cats/031115.png',
  '/cats/031116.png',
  '/cats/031117.png',
  '/cats/031118.png',
  '/cats/031119.png',
  '/cats/031120.png',
  '/cats/031121.png',
  '/cats/031122.png',
  '/cats/031123.png',
  '/cats/031124.png',
  '/cats/031125.png',
  '/cats/031126.png',
  '/cats/031127.png',
  '/cats/031128.png',
  '/cats/031129.png',
  '/cats/031130.png',
  '/cats/031201.png',
  '/cats/031202.png',
  '/cats/031203.png',
  '/cats/031204.png'
]

/**
 * Show the next cat picture.
 */

var catIndex = 0
var cat = document.querySelector('.cat')

function setNextCat () {
  cat.src = cats[catIndex]
  catIndex += 1
  catIndex %= cats.length
}

/**
 * Initialize the highest subdomain to 1, if it hasn't been set yet.
 */

if (!localStorage['highest']) {
  localStorage['highest'] = 1
}

/**
 * Start filling up the user's disk.
 */

setFrame('http://' + localStorage['highest'] + '.filldisk.com/frame.html')