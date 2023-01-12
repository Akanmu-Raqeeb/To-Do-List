let  texter = document.getElementById('text').value
let taska =  document.getElementById('taskadd')
let collection = document.getElementById('collect')
let clearer = document.getElementById('clear')

let task = [];
function looper() {
    collection.innerHTML=''

for (let index = 0; index < task.length; index++) {
    
    collection.innerHTML +=`

            
    <td id='sec'>${task[index].taskname}<div class="space">
   
    <i class="fa-solid fa-xmark" id="bt1" style="color: red;font-weight: bolder;font-size: 20px;" onclick="remove()" >
    </i></div></td>
    
    
    `
    
}

}

function addtasks() {

       if ( document.getElementById('text').value === '') {
        alert('Add a Task')
       } else {
        

        texter = document.getElementById('text').value
           task.push({taskname:texter})
           looper()
       
           document.getElementById('text').value  = ''
       }
           
           
        

   
}
function remove(params) {
   task.splice(params,1)

   looper()
}
