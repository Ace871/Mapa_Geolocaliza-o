window.onload = function () {

  function mapa( lat, long) {

    L.mapquest.key = 'uuUlD43vKBqjsyE4G0fWtb5A4erx6yro';

    var map = L.mapquest.map('map', {
      center: [lat, long],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });

    map.addControl(L.mapquest.control());

  }

  document.querySelector("#botao").addEventListener("click", function () {

    var onSuccess = function (position) {
      mapa(position.coords.latitude, position.coords.longitude);

    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
      alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

  });

}