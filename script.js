/***********************************************************************************************/
/* Staff Page Handler Event Driven Controller */
/***********************************************************************************************/


/*global jQuery */
jQuery(function (window, document, $) {
    'use strict';

    var  docListCnt = 0;  var selectedStatus = "else"; var selectedMenu = "";

        var StaffApp = {

        init: function () {

            this.bindEvents();
            // $('#hrportal').click();
            // $.LoadingOverlay("hide");
            // this.loadDialog();
            // this.verifySiteMode();

        },
        /*----------------------------------------- Binding Staff Page Event ---------------------------------------------*/
        bindEvents: function () {
          $('.message a').click(function(){
              $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
          });
	        $('#steveNav > ul > li > a').on('click', this.checkMenuFunction.bind(this));
	        $('#steveNav > ul > li > ul > li > a').on('click', this.checkMenuSubFunction.bind(this));
//	        $('#side-nav-hr-a').on('click', this.checkMenuFunction.bind(this));
          // $('#steveTest').on('click', this.checkMenuTestFunction.bind(this));
        },

        checkMenuFunction: function (e) {

        	// console.log("type - " + e.type);
        	// console.log("node - " + e.target.nodeName);
        	// console.log("id  - " + e.target.getAttribute('id'));
        	// var eTargetId = e.target.getAttribute('id');
        	// eTargetId = "#" + eTargetId.substring(0, 11) + "-a" ;
        	// console.log("u id  - " + eTargetId);

          $('#steveNav > ul > li > a').on('click', this.checkMenuFunction.bind(this));
	        $('#steveNav > ul > li > ul > li > a').on('click', this.checkMenuSubFunction.bind(this));
	        $('#steveNav > ul > li > ul > li > ul > li> a').on('click', this.checkMenuSubSubFunction.bind(this));
//	        $('#side-nav-hr-a').on('click', this.checkMenuFunction.bind(this));

        	$('#steveNav li').removeClass('active');
            $(eTargetId).closest('li').addClass('active');
//            var checkElement = $('#side-nav-hr-a').next();
            var checkElement = $(eTargetId).next();

            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                $(checkElement).closest('li').removeClass('active');
                checkElement.slideUp('normal');
            }

            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#steveNav ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
            }

            if($('#side-nav-hr').closest('li').find('ul').children().length == 0) {
                return true;
              } else {
                return false;
            }

	        var app = document.getElementById('steveNav');
	        var items = app.getElementsByClassName('last');

//	        for (var item of items) {
//	            item.addEventListener('click', function() {
//	              // alert('you clicked on item: ' + item.id);
//	              if (item.id == 'hr1') {
//	                selectedMenu = "hr1";
//	                showNewEmployeePackage();
//	              } else if (item.id == 'hr2') {
//	                selectedMenu = "hr2";
//	                showDocsListMainHr2();
//	              } else if (item.id == 'hr3') {
//	                selectedMenu = "hr3";
//	                showDocsListMainHr3();
//	              }
//	            });
//	        }

        },
        checkMenuFunction: function (e) {

        	console.log("--checkMenuFunction--");
        	console.log("type - " + e.type);
        	console.log("node - " + e.target.nodeName);
        	console.log("id  - " + e.target.getAttribute('id'));
        	var eTargetId = e.target.getAttribute('id');
        	if (eTargetId != null) {
            	eTargetId = "#" + eTargetId.substring(0, 11) + "-a" ;
            	console.log("u id  - " + eTargetId);
        	}

        	$('#steveNav li').removeClass('active');
            $(eTargetId).closest('li').addClass('active');
            var checkElement = $(eTargetId).next();

            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            	console.log("ul visible");
                $(checkElement).closest('li').removeClass('active');
                checkElement.slideUp('normal');
            }

            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            	console.log("ul un visible");
                $('#steveNav ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
            }

            if($('#side-nav-hr').closest('li').find('ul').children().length == 0) {
                return true;
              } else {
                return false;
            }

	        var app = document.getElementById('steveNav');
	        var items = app.getElementsByClassName('last');

//	        for (var item of items) {
//	            item.addEventListener('click', function() {
//	              // alert('you clicked on item: ' + item.id);
//	              if (item.id == 'hr1') {
//	                selectedMenu = "hr1";
//	                showNewEmployeePackage();
//	              } else if (item.id == 'hr2') {
//	                selectedMenu = "hr2";
//	                showDocsListMainHr2();
//	              } else if (item.id == 'hr3') {
//	                selectedMenu = "hr3";
//	                showDocsListMainHr3();
//	              }
//	            });
//	        }

        },
        checkMenuSubFunction: function (e) {

        	console.log("--checkMenuSubFunction--");
        	console.log("type - " + e.type);
        	console.log("node - " + e.target.nodeName);
        	console.log("id  - " + e.target.getAttribute('id'));

        	var eTargetId = e.target.getAttribute('id');
        	if (eTargetId != null) {
            	eTargetId = "#" + eTargetId.substring(0, 14) + "-a" ;
            	console.log("u id  - " + eTargetId);
        	}

        	$('#steveNav li').removeClass('active');
            $(eTargetId).closest('li').addClass('active');
            var checkElement = $(eTargetId).next();

            if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            	console.log("sub ul visible");
                $(checkElement).closest('li').removeClass('active');
                checkElement.slideUp('normal');
            }

            if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            	console.log("sub ul un visible");
                $('#steveNav ul li ul ul:visible').slideUp('normal');
                // $('#cssmenu ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
            }


        	var eTargetIdParent = e.target.getAttribute('id');
        	if (eTargetIdParent != null) {
            	eTargetIdParent = "#" + eTargetIdParent.substring(0, 11) + "-a" ;
            	// $('#steveNav li').removeClass('active');
              $(eTargetIdParent).closest('li').addClass('active');
        	} else {
        	}

            var checkElementParent = $(eTargetIdParent).next();

            if (eTargetId.substring(1, 17) == "side-nav-ad-re-a") {
            	this.displayRegRegistrarPg(checkElementParent);
            } else if (eTargetId.substring(1, 17) == "side-nav-ad-fi-a") {
            	this.displayRegFinancialPg(checkElementParent);
	        } else if (eTargetId.substring(1, 17) == "side-nav-ad-mo-a") {
            	this.displayRegMovePSPg(checkElementParent);

	        } else if (eTargetId.substring(1, 17) == "side-nav-hr-ne-a") {
            	console.log("new employee click");
            	this.displayNewEmployeePackagePg(checkElementParent);
	        } else if (eTargetId.substring(1, 17) == "side-nav-hr-gr-a") {
            	console.log("group benefits click");
            	this.displayRegMovePSPg(checkElementParent);
	        }


            if($('#side-nav-hr').closest('li').find('ul').children().length == 0) {
                return true;
              } else {
                return false;
            }

        },
        checkMenuSubSubFunction: function (e) {

        	console.log("--checkMenuSubSubFunction--");

        	var eTargetId = e.target.getAttribute('id');
        	if (eTargetId != null) {
            	eTargetId = "#" + eTargetId.substring(0, 17) + "-a" ;
        	}

        	var eTargetIdParent = e.target.getAttribute('id');
        	if (eTargetIdParent != null) {
            	eTargetIdParent = "#" + eTargetIdParent.substring(0, 14) + "-a" ;
        	} else {
        	}

            var checkElementParent = $(eTargetIdParent).next();

	        if (eTargetIdParent.substring(1, 17) == "side-nav-hr-ne-a") {
            	console.log("new employee click");
            	this.displayNewEmployeePackagePg(checkElementParent);
	        } else if (eTargetIdParent.substring(1, 17) == "side-nav-hr-gr-a") {
            	console.log("group benefits click");
            	this.displayGroupBenefitsPg(checkElementParent);
	        }

            if($('#side-nav-hr').closest('li').find('ul').children().length == 0) {
                return true;
              } else {
                return false;
            }

        },

    };

    /************************************ END App Body ***********************************************************/


    StaffApp.init();

    $(function () {
        if (typeof window.Modernizr === "object") {
            $("#no-js-message").addClass("hide");
        }

    });


}(window, document, jQuery));
