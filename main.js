/*jslint vars: true, plusplus: true, nomen: true, regexp: true, maxerr: 50 */
/*global define, brackets */

define(function (require, exports, module) {
    "use strict";

    var LanguageManager = brackets.getModule("language/LanguageManager");

    var language = LanguageManager.getLanguage("php");
    
    language.addFileExtension("silverstripe.ss");
    language.setBlockCommentSyntax("<%--", "--%>");
});
