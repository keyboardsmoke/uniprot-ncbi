// ==UserScript==
// @name         Uniprot to NCBI
// @namespace    http://www.patreon.com/thethoughtemporium
// @version      0.1
// @description  Insert NCBI links into Uniprot entries.
// @author       thethoughtemporium
// @match        https://www.uniprot.org/uniprotkb/*/entry
// @icon         https://www.google.com/s2/favicons?sz=64&domain=uniprot.org
// @grant        unsafeWindow
// @run-at       document-idle
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

// NCBI actually accepts the Uniprot ID format, though this isn't documented?
// https://www.ncbi.nlm.nih.gov/protein/A0A0C5B5G6

(function() {
    'use strict';

    $(unsafeWindow.document).ready(function() {
        var p = new URL(unsafeWindow.location);
        var pn = p.pathname;
        var re = /uniprotkb\/(.+?)\/entry/.exec(pn);

        var c = $('.button-group');
        c.ready(function() {
            c.append('<a href="https://www.ncbi.nlm.nih.gov/protein/' + re[1] + '" target="_blank" class="button tertiary" target="_blank" rel="noopener noreferrer">NCBI Link</a>');
        });
    });
})();