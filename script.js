    const display = document.querySelector('input[name="display"]');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.value;
            if (value === 'AC') {
                display.value = '';
            } else if (value === 'DL') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
