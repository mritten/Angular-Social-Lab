"use strict";

{
    angular.module('app')
        .controller('SocialController', function(){
            const $ctrl = this;
            $ctrl.thoughts = 
            [{title:'My First Thought', done: 'Some more about my first thought.'},
            {title:'My Second Thought', done: 'Some more about my second thought.'}];
            
        $ctrl.addText = function() {
            $ctrl.show = true;
        }

        $ctrl.hideText = function(){
            $ctrl.show = false;
        }

        $ctrl.addPost = function(post){
            $ctrl.thoughts.unshift(post)
            $ctrl.hideText();
        }

        $ctrl.removeTask = function(index) {
            $ctrl.tasks.splice(index,1);
            };
        });

    
}