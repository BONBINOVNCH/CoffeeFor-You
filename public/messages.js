const message = document.querySelector("#administration_message")
const send = document.querySelector("#send")

 $(document).ready(function() {
            $('#send').on('click', function(e) {

                const email = {
                    email: $("#administration_message").val()
                }
                console.log(email)

                if (email) {
                    axios.post('/administration', email)
                        .then(response => {
                            console.log(response.data)
                            alert("Дані надіслено")
                            $('.info_input').trigger('reset');
                        })
                        .catch(error => {
                            console.error('Сталася помилка:', error);
                        });
                } else {
                    alert('Будь ласка, заповніть усі поля.');
                }
            });
        });