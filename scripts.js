$("#find-zipcode").click(function() {
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + $("#address").val() + "&key=AIzaSyDBgfjVw_f1wLNbzqawSx-EpHksrj32Ws4",
        type: "GET",
        success: function(data) {
            $.each(data['results'][0]['address_components'], function(key, value) {
                if (value['types'][0] == "postal_code") {
                    alert(value['long_name']);
                }
            })

        }
    })
})