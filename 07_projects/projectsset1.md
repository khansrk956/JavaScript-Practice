# Projects related to DOM

## Project Link

[click here ] (put here your project link.)

# Solumtion code

# Project 1

```JavaScript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

// every button pass through for each loop
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (e) {
        console.log(e);
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.background = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.background = e.target.id
        }

    })
})
```
