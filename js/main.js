

// document.querySelector('#myheader').addEventListener('click', (event)=>{
     
// changeText()
// })


// const changeText = ()=>{
//     if(document.querySelector('#myheader').innerHTML != 'programming class'){
//         document.querySelector('#myheader').innerHTML = 'programming class'
//        document.querySelector('#name').value = 'show something else'
//        document.querySelector('#Email').value = 'something else '

     
      
//     }else{
//        document.querySelector('#myheader').innerHTML = 'js for beginners'
//        document.querySelector('#name').value = ''
//        document.querySelector('#Email').value = ''
//     }
// }


// const name = document.querySelector('#name')
// const email =  document.querySelector('#Email')




// const overallChecking = ()=> {
      
// if(document.querySelector('#name').value.length < 6 || document.querySelector('#Email').value.length < 6){
//     document.querySelector('.btn').style.background = 'red'
//     document.querySelector('.msg').innerHTML = 'invalide characters:'
//       document.querySelector('.msg').classList.add('error')
//       setInterval(()=>{
//         document.querySelector('.msg').remove();
//       }, 3000)
//     document.querySelector('.btn').setAttribute('disabled', "")
// }else{
//     document.querySelector('.btn').style.background = 'blue'
//     document.querySelector('.msg').innerHTML = ''
//     document.querySelector('.btn').removeAttribute('disabled', "")
//        document.querySelector(".msg").classList.remove("error");
// }
//    }




       
        
//           name.addEventListener("input", (e) => {
//             overallChecking();
//           });


//      Email.addEventListener("input", (e) => {
//        overallChecking();
      
//      });


//      const btn = document.querySelector('.btn')
//      btn.addEventListener('click', (e)=>{
//         console.log('button is clicked')
//         e.preventDefault();
       
//      })





const myform = document.querySelector('#my-form');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#Email");
const msg = document.querySelector(".msg");
const btn = document.querySelector(".btn");
const user = document.querySelector("#users");









 myform.addEventListener('submit', (e)=>{
     e.preventDefault();
     if(nameInput.value === '' || emailInput.value === ''){
         msg.innerHTML = 'fields can not be empty'
         msg.classList.add('error')
            setInterval(()=>{
                msg.remove()
            }, 3000)
            document.querySelector('.btn').setAttribute('disabled', '')
     }else{
        const li = document.createElement('li')
        li.innerHTML =  `${nameInput.value}: ${emailInput.value}`
        
        users.appendChild(li)

        nameInput.value = '';
        emailInput.value = '';
      
        
     }
   
 }) 






























