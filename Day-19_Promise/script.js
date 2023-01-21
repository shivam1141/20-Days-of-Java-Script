const button = document.getElementById('button');
        const output = document.getElementById('output');

        button.addEventListener('click', () => {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    const randomNumber = Math.floor(Math.random()*10);
                    if (randomNumber > 3) {
                        resolve(randomNumber);
                    } else {
                        reject(Error('Random number is too low'));
                    }
                }, 1000);
            });

            promise
                .then(result => {
                    output.innerHTML = `Random number: ${result}`;
                    output.style.color = 'green';
                })
                .catch(error => {
                    output.innerHTML = `Error: ${error.message}`;
                    output.style.color = 'red';
                });
        });