!function(a){"use strict";a.module("user_management.avatar",[])}(window.angular),function(a){"use strict";var b=a.module("user_management.avatar");b.provider("userManagementAvatarConfig",function(){var a="",b="/profile/avatar";return{$get:function(){return{apiRoot:function(){return a},avatarEndpoint:function(){return b}}},setApiRoot:function(b){a=b},setAvatarEndpoint:function(a){b=a}}})}(window.angular),function(a){"use strict";var b=a.module("user_management.avatar");b.directive("modifyAction",[function(){return{restrict:"A",link:function(b,c,d){function e(b){a.isDefined(b)&&""!==b&&(c[0].action=b)}b.$watch("modifyAction",function(){e(d.modifyAction)})}}}]),b.directive("autoSubmit",[function(){return{restrict:"A",scope:{formId:"@"},link:function(a,b){function c(){try{document.getElementById(a.formId).submit()}catch(b){}}b[0].onchange=c}}}]),b.directive("avatarprofileInit",["userManagementAvatarConfig","$rootScope",function(a,b){return{restrict:"A",link:function(c){var d=a.apiRoot();c.avatarUploadUrl=d+a.avatarEndpoint(),c.token=b.usertoken}}}])}(window.angular,window.moment);