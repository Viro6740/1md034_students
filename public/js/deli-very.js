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
        info: {},
        vCheck: false,
        myOrder: {},
        lastOrder: 0
    },
       
    methods: {
        addOrder: function (event) {
            var items = getOrder();
            var contacts = getContact();
            this.lastOrder += 1;
            socket.emit("addOrder", { orderId: this.lastOrder,
                                      details: { x: this.target.x,
                                                 y: this.target.y },
                                      orderItems: items,
                                      orderContact: contacts
                                    });
            this.info = getContact();
            this.myOrder = getOrder();
            this.vCheck = true;
            
        },
        displayOrder: function (event) {          
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};          
            this.target = { x: event.clientX - 10 - offset.x,
                            y: event.clientY - 10 - offset.y }
        }
    }
                });
