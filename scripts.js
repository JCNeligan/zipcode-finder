$("#find-zipcode").click(function(e) {
    e.preventDefault();

    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent($("#address").val()) + "&key=AIzaSyDBgfjVw_f1wLNbzqawSx-EpHksrj32Ws4",
        type: "GET",
        success: function(data) {
            if (data["status"] != "OK") {
                $("$message").html('<div class="alert alert-danger" role="alert">Zip code could not be found, please try again.</div>');
            } else {
                $.each(data['results'][0]['address_components'], function(key, value) {
                    if (value['types'][0] == "postal_code") {
                        $("$message").html('<div class="alert alert-success" role="alert"><strong>Zip Code Found! The zip code is ' + value['long_name'] + '</div>');
                    }
                })
            }

        }
    })
})