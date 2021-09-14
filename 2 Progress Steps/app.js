const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentStep = 1;


const nextStep = e => {
    currentStep++;
    if(currentStep > circles.length){
        currentStep = circles.length;
    }
    update();
    e.preventDefault();
}

const prevStep = e => {
    currentStep--;
    if(currentStep < 1){
        currentStep = 1;
    }
    
    update();

    e.preventDefault();
}

const update = ()=>{ 
    circles.forEach((circle,index)=>{
        if (index<currentStep){
             circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    const progressPerc = (actives.length-1)/(circles.length-1);
    progress.style.width = `${progressPerc*100}%`;

    if(currentStep === 1){
        prev.disabled = true;
    }
    else if(currentStep === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}

next.addEventListener('click', nextStep);
prev.addEventListener('click', prevStep);





