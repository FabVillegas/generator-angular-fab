angular.module( '<%= app_name %>' ).factory( 'exampleModel', exampleModel);

exampleModel.$inject = [];

function exampleModel(){

    function exampleModel () {

    };

    exampleModel.prototype = {
        exampleMethod: exampleMethod,
    };

    //////////////////////////////////////////////////////////////////////////////

    function exampleMethod() {
      console.log( 'If you are reading this... SHITS FUCKING READY, YO !111!!!one!!!!!1' );
    };

    //////////////////////////////////////////////////////////////////////////////

    return exampleModel;

};
