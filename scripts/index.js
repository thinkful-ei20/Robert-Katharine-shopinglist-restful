'use strict';
/* global shoppingList, store, api, Item */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
  shoppingList.render();

});


