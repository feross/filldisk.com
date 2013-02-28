# `filldisk.js` - Masterful trolling with HTML5 localStorage

#### Use HTML5 `localStorage` to completely fill up Chrome, Safari, and IE users' hard disks.

#### Check out the [demo](http://www.filldisk.com)!

#### Info about how this works [in this blog post](http://feross.org/fill-disk/).

## Features:

- Fills up the user's hard disk on Chrome, Safari, and IE.
- Fills up **1 GB every 16 seconds** on my Macbook Pro Retina (with solid state drive)
- Tested with latest Chrome (25), Safari (6), IE (10).
- For 32-bit browsers, like Chrome, **the entire browser may crash** before the disk is filled.
- Does not work on Firefox, since Firefox's implementation of localStorage is smarter.
- Requires user input on Opera - it asks you how much you want to allow each subdomain.
- Includes a button to reclaim your disk space ;)

## How it works

The [HTML5 localStorage](http://www.w3.org/TR/webstorage/) standard was developed to allow sites to store larger amounts of data (like 5-10 MB) than was previously allowed by cookies (like 4KB). The standard is supported in all modern browsers (Chrome, Firefox, Safari, IE, etc.).

The standard anticipated that sites might abuse this feature ;) and advised that browsers limit the total amount of storage space that each origin could use. Quoting from the HTML5 spec:

> User agents should limit the total amount of space allowed for storage areas.

The [current limits](http://en.wikipedia.org/wiki/Web_storage#Storage_size) are:

- 2.5 MB per origin in Google Chrome
- 5 MB per origin in Mozilla Firefox and Opera
- 10 MB per origin in Internet Explorer

However, what if we get clever and make lots of subdomains like `1.filldisk.com`, `2.filldisk.com`, `3.filldisk.com`, and so on? Should we get 5MB of space per subdomain? **The standard says no.**

> User agents should guard against sites storing data under the origins other affiliated sites, e.g. storing up to the limit in a1.example.com, a2.example.com, a3.example.com, etc, circumventing the main example.com storage limit.
>
> A mostly arbitrary limit of five megabytes per origin is recommended.

However, **Chrome, Safari, and IE currently do not implement any such storage limit**. Thus, cleverly coded websites effectively have unlimited storage space on their visitor's computer.

I wrote [http://www.filldisk.com](fill-disk.js) as a proof-of-concept to include with the bug reports I filed. Star the bug reports here:

- [Chromium bug report](https://code.google.com/p/chromium/issues/detail?id=178980)
- [Apple bug report](http://openradar.appspot.com/radar?id=2792401)
- How do I file a bug on IE? Their [bug report](http://connect.microsoft.com/IE) page is broken.

## MIT License

Copyright (c) 2012 [Feross Aboukhadijeh](http://feross.org)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
