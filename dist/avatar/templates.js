angular.module("user_management.avatar").run(["$templateCache",function(a){"use strict";a.put("templates/user_management/profile/profile.html",'<h1>Overridden</h1><form avatarprofile-init id=profileForm profile-form novalidate ng-submit=editProfile() action="" enctype=multipart/form-data method=post name=form modify-action="{{ avatarUploadUrl }}"></form><form password-change-form ng-submit=changePassword()></form>'),a.put("templates/user_management/profile/profile_form.html",'<div class="alert alert-success" ng-if="updated === true"><p>You have updated your profile.</p></div><div class=form-group ng-class="{\'has-error\': fields.name.errors}"><label for=name ng-if=fields.name.label>{{ fields.name.label }}</label><input type=text ng-model=data.name class=form-control id=name maxlength="{{ fields.name.max_length }}"><div class=help-block ng-if=fields.name.errors>{{ fields.name.errors }}</div></div><div class=form-group ng-class="{\'has-error\': fields.avatar.errors}"><label for=avatar ng-if=fields.avatar.label>{{ fields.avatar.label }}</label><img avatar user-url="{{ controls.publicUrl }}" size=thumbnail width=150 height="150"> <input type=text name=token value="{{ token }}"><div class="lozenge avatar-upload-wrapper"><span class=avatar-upload-target>Upload Picture</span><br><input type=file name=avatar auto-submit form-id="profileForm"></div></div><button type=submit class="btn btn-default">Update profile</button>')}]);