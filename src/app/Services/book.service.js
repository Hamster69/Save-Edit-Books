(function () {
    'use strict';
    angular
        .module('app')
        .factory('BookService', BookService);
        BookService.$inject = [];  
    
        function BookService() {
            var authorList = [{
                id: 0,
                name: 'Gabriel García Márquez'
            },{
                id: 1,
                name: 'Miguel de Cervantes'
            },{
                id: 2,
                name: 'Gabriel García Márquez'
            }];

            var books = [{
                id: 0,
                title: "100 años de Soledad",
                edition: "20/08/2001",
                authors: authorList
            }, {
                id: 1,
                title: "La divina comedia",
                edition: "20/08/1980",
                authors: authorList
            }, {
                id: 2,
                title: "Don Quijote de la mancha",
                edition: "20/08/1970",
                authors: authorList
            }];
            
            return {
                getBooks: books,
                getAuthors: authorList
            }
        }
})();