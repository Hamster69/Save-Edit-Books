(function () {
    'use strict';
    angular
        .module('app')
        .factory('BookService', BookService);
        BookService.$inject = [];  
    
        function BookService() {
            var books = [{
                Title: "100 años de Soledad",
                Edition: "20/08/2001",
                authors: ['Gabriel García Márquez']
            }, {
                Title: "La divina comedia",
                Edition: "20/08/1980",
                authors: ['Dante Alighieri']
            }, {
                Title: "Don Quijote de la mancha",
                Edition: "20/08/1970",
                authors: ['Miguel de Cervantes']
            }];
            var authors = ['Gabriel García Márquez', 'Dante Alighieri', 'Roberto Bolaño', 'Miguel de Cervantes'];
            
            var getBooks = () => {
                return books;
            }
            
            var getAuthors = () => {
                return authors
            }
            
            return {
                getBooks: getBooks,
                getAuthors: getAuthors
            }
        }
})();