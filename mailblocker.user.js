// ==UserScript==
// @name         MailBlocker v1.0
// @namespace    https://github.com/exploitsrobloxx/
// @version      2025-10-05
// @description  Hide ads in mail.ru
// @author       exploitsrobloxx/github
// @match        https://*.mail.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mail.ru
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
const _0x1f458f=_0x5d0e;function _0x5d0e(_0x284747,_0x1629f7){const _0x24f2cd=_0x24f2();return _0x5d0e=function(_0x5d0ee1,_0x27d00a){_0x5d0ee1=_0x5d0ee1-0x19e;let _0x2086f8=_0x24f2cd[_0x5d0ee1];return _0x2086f8;},_0x5d0e(_0x284747,_0x1629f7);}(function(_0x2fb38f,_0x473b4b){const _0x315726=_0x5d0e,_0x543b0d=_0x2fb38f();while(!![]){try{const _0xdaed5c=-parseInt(_0x315726(0x1a0))/0x1*(-parseInt(_0x315726(0x1ab))/0x2)+-parseInt(_0x315726(0x19f))/0x3*(parseInt(_0x315726(0x1a7))/0x4)+-parseInt(_0x315726(0x1a1))/0x5+-parseInt(_0x315726(0x1a9))/0x6+parseInt(_0x315726(0x1ae))/0x7*(parseInt(_0x315726(0x1ac))/0x8)+parseInt(_0x315726(0x1a6))/0x9*(parseInt(_0x315726(0x1a8))/0xa)+-parseInt(_0x315726(0x1a2))/0xb*(-parseInt(_0x315726(0x1aa))/0xc);if(_0xdaed5c===_0x473b4b)break;else _0x543b0d['push'](_0x543b0d['shift']());}catch(_0x1d2cdb){_0x543b0d['push'](_0x543b0d['shift']());}}}(_0x24f2,0x28c80));function stop_A_DSA(){const _0x54d5e1=_0x5d0e,_0x7bb3b8='[class*=\x22tgb\x22],\x20[id*=\x22tgb\x22],\x20[id*=\x22ads\x22],\x20[class*=\x22ads\x22],\x20[id*=\x22ad-fr\x22],\x20[class*=\x22ad-fr\x22],\x20[class*=\x22csr-uniq\x22],\x20[id*=\x22trq\x22],\x20[class*=\x22trq\x22],\x20[id*=\x22trg\x22],\x20[class*=\x22trg\x22]';document[_0x54d5e1(0x1ad)](_0x7bb3b8)[_0x54d5e1(0x19e)](_0x2c9ba7=>_0x2c9ba7[_0x54d5e1(0x1a5)]());}function _0x24f2(){const _0x3db111=['log','MailBlocker\x20v1.0:\x20Working','remove','9GEslXE','438868SBaeCW','2109050htwGjn','1700466arKBnJ','12NhPxon','9306yQkBQG','8EcbZSI','querySelectorAll','2121497VubqSg','forEach','6aOosdn','9QYcyrQ','397385lYeYZu','2128599RrSJUy'];_0x24f2=function(){return _0x3db111;};return _0x24f2();}console[_0x1f458f(0x1a3)]('MailBlocker\x20v1.0:\x20Enabled'),console[_0x1f458f(0x1a3)](_0x1f458f(0x1a4)),setInterval(stop_A_DSA,0xa);
    function c() {
        document.querySelectorAll('[href*="vkvideo.ru"]').forEach(el => el.remove());
                document.querySelectorAll('[id*="videoplayer_ads"]').forEach(el => el.remove());
                        document.querySelectorAll('[class*="videoplayer_ads"]').forEach(el => el.remove());
                        document.querySelectorAll('[id*="video_player"]').forEach(el => el.remove());
                 document.querySelectorAll('[id*="video_player"]').forEach(el => el.remove());
    }
    setInterval(c, 100)
})();
