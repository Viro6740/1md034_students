/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
    el: '#finalize',
    data: {
        orders: {},
        target: {},
        key: 'T',         
        info: ""
    },
    methods: {
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            var items = getContact().slice(4)
            socket.emit("addOrder", { orderId: this.getNext(),
                                      details: { x: this.target.x,
                                                 y: this.target.y },
                                      orderItems: items
                            });
        },
        displayOrder: function (event) {          
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};          
            this.target = { x: event.clientX - 10 - offset.x,
                            y: event.clientY - 10 - offset.y }
        },
        
        markDone: function(array) {
            console.log(getContact())            
            this.info = getContact()
            
        }   
    }
                });
