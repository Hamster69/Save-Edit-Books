(function () {
    'use strict';
    angular
        .module('app')
        .controller('BookListController', BookListController);
        BookListController.$inject = [$mdDialog, 'BookService'];
    
        function BookListController(BookService, $mdDialog) {
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

            vm.showPrompt = function(ev) {
                // Appending dialog to document.body to cover sidenav in docs app
                var confirm = $mdDialog.prompt()
                  .title('Salvar / Editar')
                  .textContent('Bowser is a common name.')
                  .placeholder('Dog name')
                  .ariaLabel('Dog name')
                  .initialValue('Buddy')
                  .targetEvent(ev)
                  .required(true)
                  .ok('Okay!')
                  .cancel('I\'m a cat person');
            
                $mdDialog.show(confirm).then(function(result) {
                  vm.status = 'You decided to name your dog ' + result + '.';
                }, function() {
                  vm.status = 'You didn\'t name your dog.';
                });
              };

        }
})();
