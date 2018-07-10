$.ajax({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDBgfjVw_f1wLNbzqawSx-EpHksrj32Ws4",
    type: "GET",
    success: function(data) {
        console.log(data);
    }
})