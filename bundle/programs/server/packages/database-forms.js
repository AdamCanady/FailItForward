(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var FormModel, DatabaseForm;



/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['database-forms'] = {
  FormModel: FormModel,
  DatabaseForm: DatabaseForm
};

})();
