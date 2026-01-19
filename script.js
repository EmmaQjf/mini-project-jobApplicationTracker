// get all the value, save it to the job object and push it to the jobs array. update the localStorage.

const nameInput = document.getElementById('name');
const roleInput = document.getElementById('role');
const statusSelect = document.getElementById('status');
const form = document.querySelector('form');
const applicationsList = document.getElementById('applicationsList');


let jobs = JSON.parse(localStorage.getItem("jobStorage")) || []

//“When the page finishes loading, run renderForm”
// window.addEventListener("load", renderForm);


//save the data in form
const renderForm =() => {
    // clear the applicationlIST
    applicationsList.innerHTML = '';
    if(jobs.length === 0) {
       applicationsList.textContent = 'No data'  
       return
    } 
   
        jobs.forEach((job, index) => {
            const list = document.createElement('li')
            index += 1;
            list.innerHTML = `<div><p>${index}</p> <p>${job.name}</p>   <p>${job.role}</p>  <p>${job.status}</p> <button class="deleteBtn" data-index="${index}">delete</button> </div>`
            applicationsList.appendChild(list)
           
            const div = list.querySelector('div')
            const p = list.querySelectorAll('p')
            div.classList.add("listStyle")
            p.forEach((item)=>{
                item.classList.add("listRowStyle")
            })

            // const deleteBtn = document.createElement('button')
            // deleteBtn.className = "deleteBtn"
            // deleteBtn.textContent = "delete";
            // deleteBtn.dataset.index = index;
            // list.appendChild(deleteBtn)
        //     deleteBtn.addEventListener("click", () => {
        //     jobs.splice(index, 1);
        //    localStorage.setItem("jobStorage", JSON.stringify(jobs));
        //    renderForm();
    });       
}

renderForm();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    //object store reference, so if i put it out of this function, it will change and updated.
    let currentJob = {}
    currentJob.name = nameInput.value;
    currentJob.role = roleInput.value;
    currentJob.status = statusSelect.value;
    console.log(currentJob)
    jobs.push(currentJob)
    localStorage.setItem('jobStorage', JSON.stringify(jobs));
    event.target.reset()
    renderForm()
})



//delete button  -- update when the list element is created, it should have a delete button
// eventlistener for delete button; update localstorage, jobs array and render 
// if this is before render, it won't work because the delete buttons are not created yet.
// const deleteBtns = document.querySelectorAll(".deleteBtns")
// for (let deleteBtn in deleteBtns){
//     deleteBtn.addEventListener("click", (event) =>{
//         event.target.remove();

//     })
// }

//Never attach event listeners to elements that are recreated by render().
//after renderForm. this only renders when the page loads, so it won't work for newly created delete buttons.
// deleteBtns.forEach((deleteBtn,index) => {
//     deleteBtn.addEventListener("click", (event) =>{
//         // event.target.remove();
//         jobs.splice(index,1)
//         console.log(jobs)
//         localStorage.setItem("jobStorage",JSON.stringify(jobs))
//         renderForm();
//     })
// })



//Event delegation
applicationsList.addEventListener("click",(e) =>{
    if (e.target.classList.contains("deleteBtn")){
        const index = e.target.dataset.index;
        jobs.splice(index, 1)
        localStorage.setItem("jobStorage", JSON.stringify(jobs))
        renderForm()
    }
})