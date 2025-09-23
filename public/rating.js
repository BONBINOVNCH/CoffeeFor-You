$(document).ready(function () {
    $("#submit").on("click", function (e) {
        e.preventDefault();

        const rating = {
            nickname: $("#nickname").val(),
            text: $("#text").val(),
            img: $("#img").val(),
        };
        console.log(rating);

        if (rating) {
            axios
                .post("/customer", rating)
                .then((response) => {
                    console.log(response.data);
                    alert("Дані надіслено");
                })
                .catch((error) => {
                    console.error("Сталася помилка:", error);
                });
        } else {
            alert("Будь ласка, заповніть усі поля.");
        }
    });
});
