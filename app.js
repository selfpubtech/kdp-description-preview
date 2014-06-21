'use strict';

var myApp = angular.module('myApp', [ ]);

myApp.controller('MainController', ['$scope', function($scope) {
}]);

myApp.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);

myApp.filter('linebreaks', [function(){
    return function(text) {
        return text ? text.replace(/\n/g, "\n<br />") : text;
    };
}]);



$(document).ready(function()	{

    var editorSettings = {
        onShiftEnter:  	{keepDefault:false, replaceWith:'<br />\n'},
        onCtrlEnter:  	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
        onTab:    		{keepDefault:false, replaceWith:'    '},
        markupSet:  [
            {name:'Heading 1', key:'1', openWith:'<h1(!( class="[![Class]!]")!)>', closeWith:'</h1>', placeHolder:'Your title here...' },
            {name:'Heading 2', key:'2', openWith:'<h2(!( class="[![Class]!]")!)>', closeWith:'</h2>', placeHolder:'Your title here...' },
            {name:'Heading 3', key:'3', openWith:'<h3(!( class="[![Class]!]")!)>', closeWith:'</h3>', placeHolder:'Your title here...' },
            {name:'Heading 4', key:'4', openWith:'<h4(!( class="[![Class]!]")!)>', closeWith:'</h4>', placeHolder:'Your title here...' },
            {name:'Heading 5', key:'5', openWith:'<h5(!( class="[![Class]!]")!)>', closeWith:'</h5>', placeHolder:'Your title here...' },
            {name:'Heading 6', key:'6', openWith:'<h6(!( class="[![Class]!]")!)>', closeWith:'</h6>', placeHolder:'Your title here...' },

            {separator:'---------------' },
            {name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
            {name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)'  },
            {name:'Underline', key:'U', openWith:'<u>', closeWith:'</u>'  },
            {name:'Strike through', key:'S', openWith:'<strike>', closeWith:'</strike>' },

            {separator:'---------------' },
            {name:'Bulleted List', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>'},
            {name:'Numeric List', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>'},
            {name:'List Item', openWith:'    <li>', closeWith:'</li>', },

            {separator:'---------------' },
            {name:'Line', openWith:'<hr />' },
            {name:'Paragraph', openWith:'<p>', closeWith:'</p>' },
            {name:'Sub-script', openWith:'<sub>', closeWith:'</sub>' },
            {name:'Super-script', openWith:'<sup>', closeWith:'</sup>' },
        ]

    };

    $('#editor').markItUp(editorSettings);
});
