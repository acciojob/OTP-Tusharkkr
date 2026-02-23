//your JS code here. If required.
let allInput = document.querySelectorAll('.code')

        for (let i = 0; i < allInput.length; i++) {
            allInput[i].addEventListener('keydown', (e) => {
                let val = e.target.value
                if (e.key === 'Backspace') {
                    allInput[i].value = ''
                    if (i !== 0) {
                        allInput[i - 1].focus();
                    } 
                }else if(allInput[i].value!='' && i<allInput.length-1 && allInput[i].value >= 0 && allInput[i].value <= 9){
                        allInput[i+1].focus()  
                }
            })
        }