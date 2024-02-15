var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "65a5e82152054e1f9d07d9ab3aebc7cb");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
        $('#searchResults').dialog({
            height: 700,
            width: '50%',
            position: { my: "center", at: "bottom", of: window },
        });

          

        results = "";
    })

    .fail(function () {
      alert("error");
    });
}

function searchClick() {
    $("#searchResults").empty();
    apiSearch()
    var searchElement = document.getElementById('searchResults');
    searchElement.style.visibility = 'visible';
}

function OpenTimeDialog() {
    $("#time").dialog();
    let now = new Date();
    let datetime = now.toLocaleTimeString();
    datetime = datetime.slice(0, -6);
    document.getElementById("time").innerHTML = datetime;
    var timeElement = document.getElementById('time');
    timeElement.style.visibility = 'visible';
};

function changeImage() {
    addEventListener.o
    let currentBackgroundImage = document.body.style.backgroundImage;
    if (currentBackgroundImage.toString() == "url(\"./assets/FRANKSinv.png\")") {
        document.body.style.backgroundImage = 'url(./assets/FRANKS.png)'
    }
    else {
        document.body.style.backgroundImage = 'url(./assets/FRANKSinv.png)'
    }
}

function luckyClick() {
      var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "65a5e82152054e1f9d07d9ab3aebc7cb");
      },
      type: "GET",
    })
    .done(function (data) {
        var url = data.webPages.value[1].url
        window.open(url, "_blank");

        results = "";
    })

    .fail(function () {
      alert("error");
    });
}


  // Get current date and time
    var now = new Date();
    var datetime = now.toLocaleTimeString()

    // Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;

document.addEventListener('click', changeImage);

changeImage();