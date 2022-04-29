var buttons = document.querySelectorAll('.left');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    });
});

var buttons2 = document.querySelectorAll('.right');
buttons2.forEach(button => {
  button.addEventListener('click', () => {
    buttons2.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
    });
});

// ----------------------------------------------------------------

const input = document.querySelector('.input');
const input_text = document.querySelector('.input_box p')
const output = document.querySelector('.output');
const output_text = document.querySelector('.output_box p')

const rubl1 = document.querySelector('.rubl1');
const usd1 = document.querySelector('.usd1');
const eur1 = document.querySelector('.eur1');
const gbp1 = document.querySelector('.gbp1');

const rubl2 = document.querySelector('.rubl2');
const usd2 = document.querySelector('.usd2');
const eur2 = document.querySelector('.eur2');
const gbp2 = document.querySelector('.gbp2');



var keys = /^[0-9.,\b]+$/;
var bs = /^[\b]+$/

input.addEventListener('keypress', (event) =>{
  if(!keys.test(event.key) && !bs.test(event.key)){
    event.preventDefault()
  }
})

// FROM - RUBLE
input.addEventListener('keyup', (event) => {
  input.value = event.target.value.replace(/,/g,'.')

  fetch("https://api.exchangerate.host/latest/500")
    .then(function() {
        console.log("Online");
    }).catch(function() {
        alert("Error! Please check the internet connection!");
    });

  if (rubl1.classList.contains("active")) {
    fetch('https://api.exchangerate.host/latest?base=RUB').then(data => data.json())
      .then(data => {
        display(data);
        console.log(data)

        function display(data) {
          var entries = Object.entries(data);
   
          if (usd2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=USD').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["USD"]
                input_text.innerHTML = `1 RUB = ${entries[4][1]["USD"]} USD`
                output_text.innerHTML = `1 USD = ${entries2[4][1]["RUB"]}RUB `
              })
          }

          if (eur2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=EUR').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["EUR"]
                input_text.innerHTML = `1 RUB = ${entries[4][1]["EUR"]} EUR`
                output_text.innerHTML = `1 EUR = ${entries2[4][1]["RUB"]} RUB `

              })


          }
          if (gbp2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=GBP').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["GBP"]
                input_text.innerHTML = `1 RUB = ${entries[4][1]["GBP"]} GBP`
                output_text.innerHTML = `1 GBP = ${entries2[4][1]["RUB"]} RUB `
              })
          }
          
          if (rubl2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=RUB').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value
                input_text.innerHTML = `1 RUB = ${entries[4][1]["RUB"]} RUB`
                output_text.innerHTML = `1 RUB = ${entries2[4][1]["RUB"]} RUB `
              })
          }
        }
      })
  }

  // FROM - USD
  if (usd1.classList.contains("active")) {
    fetch('https://api.exchangerate.host/latest?base=USD').then(data => data.json())
      .then(data => {
        display(data);
        console.log(data)


        function display(data) {
          var entries = Object.entries(data);
          if (usd2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=USD').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value
                input_text.innerHTML = `1 USD = ${entries[4][1]["USD"]} USD`
                output_text.innerHTML = `1 USD = ${entries2[4][1]["USD"]} USD`
              })


          }
          if (rubl2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=RUB').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["RUB"]
                input_text.innerHTML = `1 USD = ${entries[4][1]["RUB"]} RUB`
                output_text.innerHTML = `1 RUB = ${entries2[4][1]["USD"]} USD`
              })


          }
          if (eur2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=EUR').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["EUR"]
                input_text.innerHTML = `1 USD = ${entries[4][1]["EUR"]} EUR`
                output_text.innerHTML = `1 EUR = ${entries2[4][1]["USD"]} USD`
              })


          }
          if (gbp2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=GBP').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["GBP"]
                input_text.innerHTML = `1 USD = ${entries[4][1]["GBP"]} GBP`
                output_text.innerHTML = `1 GBP = ${entries2[4][1]["USD"]} USD`
              })


          }



        }




      }
      )
  }



  // FROM - EUR
  if (eur1.classList.contains("active")) {
    fetch('https://api.exchangerate.host/latest?base=EUR').then(data => data.json())
      .then(data => {
        display(data);
        console.log(data)


        function display(data) {
          var entries = Object.entries(data);
          if (eur2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=EUR').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value
                input_text.innerHTML = `1 EUR = ${entries[4][1]["EUR"]} EUR`
                output_text.innerHTML = `1 EUR = ${entries2[4][1]["EUR"]} EUR`
              })


          }
          if (rubl2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=RUB').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["RUB"]
                input_text.innerHTML = `1 EUR = ${entries[4][1]["RUB"]} RUB`
                output_text.innerHTML = `1 RUB = ${entries2[4][1]["EUR"]} EUR`
              })


          }

          if (usd2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=USD').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["USD"]
                input_text.innerHTML = `1 EUR = ${entries[4][1]["USD"]} USD`
                output_text.innerHTML = `1 USD = ${entries2[4][1]["EUR"]} EUR`
              })


          }
          if (gbp2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=GBP').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["GBP"]
                input_text.innerHTML = `1 EUR = ${entries[4][1]["GBP"]} GBP`
                output_text.innerHTML = `1 GBP = ${entries2[4][1]["EUR"]} EUR`
              })


          }

        }
      }
      )
  }



  //FROM - GBP
  if (gbp1.classList.contains("active")) {
    fetch('https://api.exchangerate.host/latest?base=GBP').then(data => data.json())
      .then(data => {
        display(data);
        console.log(data)


        function display(data) {
          var entries = Object.entries(data);
          if (gbp2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=GBP').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value
                input_text.innerHTML = `1 GBP = ${entries[4][1]["GBP"]} GBP`
                output_text.innerHTML = `1 GBP = ${entries2[4][1]["GBP"]} GBP`
              })


          }
          if (rubl2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=RUB').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["RUB"]
                input_text.innerHTML = `1 GBP = ${entries[4][1]["RUB"]} RUB`
                output_text.innerHTML = `1 RUB = ${entries2[4][1]["GBP"]} GBP`
              })


          }

          if (usd2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=USD').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["USD"]
                input_text.innerHTML = `1 GBP = ${entries[4][1]["USD"]} USD`
                output_text.innerHTML = `1 USD = ${entries2[4][1]["GBP"]} GBP`
              })


          }
          if (eur2.classList.contains("active")) {
            fetch('https://api.exchangerate.host/latest?base=EUR').then(data2 => data2.json())
              .then(data2 => {
                console.log(data2)
                var entries2 = Object.entries(data2);
                output.value = input.value * entries[4][1]["EUR"]
                input_text.innerHTML = `1 GBP = ${entries[4][1]["EUR"]} EUR`
                output_text.innerHTML = `1 EUR = ${entries2[4][1]["GBP"]} GBP`
              })


          }

        }
      }
      )
  }
})