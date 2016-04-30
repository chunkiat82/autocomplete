'use strict';

class WordsFilter {

    constructor(list){
        this.list = list;
    }

    calculateState(input){
        if (input && input.indexOf(this.input) !== 0) {
            this.currentList = this.list.slice();
        } else if (input === '') {
            this.currentList = this.list.slice();
        }

        this.input = input;

    }

    filter(input){

        this.calculateState(input);

        return this.currentList = this.currentList.filter(element => { return element.indexOf(input) > -1 });
    }
}
// var inputList = ['aaa','xx','aab','cc','dd','cd','xxxcdfff'];
// var wordsFilter = new WordsFilter(inputList);
// console.log(wordsFilter.filter('aa'));
// console.log(wordsFilter.filter(''));
// console.log(wordsFilter.filter(''));

//
// function getFilteredList(list, input) {
//
//     function filterList(element) {
//         return element.indexOf(input) > -1;
//     }
//
//     return list.filter(filterList);
// }

//console.log(getFilteredList(inputList,'cd'));
