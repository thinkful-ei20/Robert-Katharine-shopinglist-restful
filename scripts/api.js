const api = (function () {

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/robertkatharine';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback) {
    let newItem = {
      name,
    };

    newItem = JSON.stringify(newItem);
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'post',
      contentType: 'application/JSON',
      data: newItem,
      success: callback,
    });
  };

  return {
    getItems,
    createItem,

  };

}());