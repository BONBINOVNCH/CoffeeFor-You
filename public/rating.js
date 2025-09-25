$(document).ready(function () {
    $("#submit").on("click", function (e) {
        e.preventDefault();

        const rating = {
            nickname: $("#nickname").val(),
            text: $("#text").val(),
            img: $("#img").val(),
            stars: $("input[type='radio'][name='star-radio']:checked").val(),
        };
        console.log(rating);

        if (rating.nickname && rating.text && rating.img) {
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
