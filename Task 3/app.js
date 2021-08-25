const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true


async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,{
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
  } )
  return newEditor
 
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor=>{
  workExpdetails = nEditor
})
let Academic;
TextEditor(inputfields["academics"]).then(nEditor=>{
  Academic = nEditor
})



function toggle(){
    if(inputShow){
         inputfields.style.display = "none"
         inputShow = false 
         output.innerHTML=`
         <!-- Google Fonts -->
         <link
           href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,700,800,900&display=swap"
           rel="stylesheet"
         />
           <div class="hero">
            <h1>${inputfields["name"].value}</h1>
            <h3>${inputfields["title"].value}</h3>
           </div>
           <hr />

           <div class="main">
            <div>
              <div class="obj-heading violet">
              <i class="fas fa-bullseye icon"></i>
              <h2>OBJECTIVE</h2>
              </div>
              <p>${inputfields["objective"].value}</p>

              <div class="obj-heading violet">
              <i class="fas fa-tools icon"></i>
              <h2>SKILLS</h2>
              </div>              
              <p>${inputfields["skills"].value}</p>

              <div class="obj-heading violet">
              <i class="fas fa-bullseye"></i>
              <h2>ACHIEVEMENTS</h2>
              </div>
              <p>${inputfields["achievements"].value}</p>

              <div class="obj-heading violet">
              <i class="fas fa-briefcase"></i>
              <h2>WORK EXPERIENCE</h2>
              </div>
              ${workExpdetails.getData()}

              <div class="obj-heading violet">
              <i class="fas fa-school icon"></i>
              <h2>ACEMEDIC DETAILS</h2>
              </div>
              ${Academic.getData()}
              
              <div class="obj-heading violet">
              <i class="fas fa-hammer"></i>
              <h2>PROJECTS</h2>
              </div>
              <p>${inputfields["projects"].value}</p>

              <div class="obj-heading violet">
              <i class="fas fa-phone"></i>
              <h2>CONTACT</h2>
              </div>
              <p>${inputfields["contact"].value}</p>
            </div>
          </div>

           <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
         `
    }else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}