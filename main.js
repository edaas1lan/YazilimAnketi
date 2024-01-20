const correctAnswers=['e','e,','e','e,','e','e,','e','e'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');


form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const userAnsers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value];
    userAnsers.forEach((answer,index)=>{
        if(answer===correctAnswers[index])
        {
            score+=20;
        }
    })
    result.classList.remove('d-none');
        let puan=0;
    const bas=setInterval(() => {
        result.querySelector('span').textContent=`${puan}%`;
        if(puan==score){
            clearInterval(bas);
        }
        else{
            puan++;
        }
    }, 10);
    
    
})

