'use strict';
 
angular.module('sendmailApp', [])
.controller('MailController', function ($scope,$http) {
$scope.loading = false;
$scope.send = function (mail){
$scope.loading = true;
$http.post('/sendmail', {
from: 'CodeNx &lt;admin@angularcode.com&gt;',
to: 'kristin.gumbert@yahoo.com',
subject: 'Message from AngularCode',
text: mail.message
}).then(res=&gt;{
$scope.loading = false;
$scope.serverMessage = 'Email sent successfully';
});
}
})