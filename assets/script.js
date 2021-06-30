// varibles
const world = document.getElementById("world");
const wrong = document.getElementById("wrong");
const play = document.getElementById("play");
const fin = document.getElementById("fin");
const notif = document.getElementById("notif");
const mess = document.getElementById("mess");

// select all class

const fig = document.querySelectorAll(".figu");
// document.getElementById("fin").style.display = "flex";

// guess word

const guess = ['becode','charleroi', 'keller','javascript'];

let guessselect = guess[Math.floor(Math.random()*guess.length)];

const  goodletterArr = [ ];
const  badletterArr = [ ];

// display world hidden

function display() {
    world.innerHTML = ` 

    ${guessselect
        .split('')
        .map(
            lettre => `
                  <span class='letter'>
                  ${goodletterArr.includes(lettre) ? lettre : ''}
                  </span>
            `
        )
        .join('')

    }

    `;

    const wordinternal = world.innerText.replace(/\n/g,'');

    console.log(world.innerText,wordinternal );

    if(wordinternal == guessselect){
        mess.innerText ='Good job';
        fin.style.display = 'block';
      }

}

//  // bad letter

 function updateBadword (){
    wrong.innerHTML = `
    ${badletterArr.map(letter =>  `<span> ${letter} </span> ` )}
    `
    fig.forEach((partie , index) => {

      const error = badletterArr.length;

      if(index < error){

       partie.style.display = 'block';
      }else{
        partie.style.display = 'none';
      }

    })

    if(badletterArr.length===fig.length){

      mess.innerText = 'Sorry you lose! :('
      fin.style.display = 'flex'
    }


  }

// notif

function dispnotif(){
  

    notif.classList.add('display');
  
    setTimeout(() =>{
  
      notif.classList.remove('display')
  
    },2000);
  }

// // listen event keyboard


document.addEventListener('keydown', function(event) {
  
    if(event.keyCode >= 65 && event.keyCode <=90){
   
       const lett = event.key;
  
       if(guessselect.includes(lett)){
  
        if(!goodletterArr.includes(lett)){
          goodletterArr.push(lett)
  
  
          display()
  
        }else{
  
            dispnotif()
  
        }
  
  
  
       }else{
            if(badletterArr.includes(lett)){
              badletterArr.push(lett);
  
             updateBadword();
  
            }else{
  
              dispnotif()
            }
       }
       
  
    }
     
    });

//      // button


play.addEventListener('click',() =>{

    goodletterArr.slice(0);
    badletterArr.slice(0);

    guessselect = guess[Math.floor(Math.random()*guess.length)];

    display()
    updateBadword();
    fin.style.display ='none';


})



display()