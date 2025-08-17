

 $(document).ready(function() {
            $('.info_input').on('submit', function(e) {

                const email = {
                    email: $("#email").val()
                }
                console.log(email)

                if (email) {
                    axios.post('/', email)
                        .then(response => {
                            console.log(response.data)
                            alert("Користувач зареєстрований")
                            $('.info_input').trigger('reset');
                        })
                        .catch(error => {
                            console.error('Сталася помилка під час реєстрації:', error);
                        });
                } else {
                    alert('Будь ласка, заповніть усі поля.');
                }
            });
        });