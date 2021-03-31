let box=document.getElementById('box')
//let new_obj_btn=document.getElementById('new_obj_btn')

let askbutn=document.getElementById('askbutn')

askbutn.addEventListener('click',()=>{

    let asktext=document.createElement('input')
    asktext.placeholder="Ask your question here..."
    asktext.style.height='3.5em'

    let output1=document.createElement('div')
    output1.id='output1'

    let new_obj_btn=document.createElement('button')
    new_obj_btn.innerText="POST QUESTION"
new_obj_btn.style.height='3.5em'


    new_obj_btn.addEventListener('click',()=>{

        if(asktext.value=='')
        {
            alert("PLEASE ENTER YOUR QUESTION!!!");
        }

        else
        {
            output1.style.fontSize='200%'
            output1.style.color='white'
        output1.innerText="\n\nQuestion : "+asktext.value+"\n\n"
    
        let new_input_1=document.createElement('input')
        new_input_1.placeholder="Write your answer here.."
        new_input_1.style.height='3.5em'

        let new_input_2=document.createElement('input')
        new_input_2.placeholder="Your Name"
        new_input_2.style.height='3.5em'

        let output=document.createElement('div')
        output.id='output'
 
        let new_btn=document.createElement('button')
        new_btn.innerText="ADD ANSWER"
        new_btn.style.height='3.5em'

        new_btn.addEventListener('click',()=>{
            
            if(new_input_1.value=='' || new_input_2.value=='')
            {
            alert("PLEASE WRITE YOUR ANSWER AND NAME!!!");
            }

            else
            {
                let lcount=0
                let ucount=0
                let likeb=document.createElement('button')
                likeb.innerText="LIKES"

                let unlikeb=document.createElement('button')
                unlikeb.innerText="DISLIKES"

                let lc=document.createElement("label")
                let uc=document.createElement("label")

                lc.innerText=lcount
                 uc.innerHTML=ucount

                 output.innerHTML+="</br>Answer : "+new_input_1.value+'</br>'+" BY : "+new_input_2.value+'</br>'+"At :  "+Date()+'</br></br>'
               
                 likeb.addEventListener('click',()=>{
                    lcount+=1
                  lc.innerText=lcount
             })

             unlikeb.addEventListener('click',()=>{
                ucount+=1
              uc.innerText=ucount
         })
        

                output.appendChild(lc)
                 output.appendChild(likeb)
                 output.appendChild(uc)
                output.appendChild(unlikeb)
             
            }
            
        })

        asktext.remove();
        new_obj_btn.remove();

     box.appendChild(new_input_1)
     box.appendChild(new_input_2)
        box.appendChild(new_btn)
        box.appendChild(output)
        
        }
    })

    box.appendChild(asktext)
    box.appendChild(new_obj_btn)
    box.appendChild(output1)
})


