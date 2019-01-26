(function () {
    'use strict';
    angular
        .module('app')
        .controller('BookListController', BookListController);
        BookListController.$inject = ['BookService'];
    
        function BookListController(BookService) {
            var vm = this;
            
            vm.bookList = () => {
                return BookService.getBooks;
            }
            
            vm.authorList = BookService.getAuthors;

            vm.currentAuthor;
    
            vm.book= {
                title: "",
                edition: null,
                authors: []
            };
            
        }
})();
