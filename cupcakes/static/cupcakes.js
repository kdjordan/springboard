// GRAB GLOBALS FOR REFERENCE
let cupDiv = document.querySelector('.cupcakes')
let form = document.querySelector('form')
let images = document.querySelectorAll('.image')
let formContainer = document.querySelector('.form_container')
let submitBtn = document.querySelector('#submitBtn')
let addBtn = document.querySelector('#addBtn')
let deleteBtn = document.querySelector('#deleteBtn')
let editId
let mode 

// GET CUCPCAKES FROM DB ON LOAD
window.onload = () => getCupcakes()

async function getCupcakes() {
    let cupcakes = await axios.get('/api/cupcakes')
    makeCupcakeList(cupcakes.data.cupcakes)
}

// CREATE AND APPEND CUCAKE DIVS FOR DISPLAY ON HOMEPAGE
function makeCupcakeList(arr) {
    arr.forEach(el => {
        let div = document.createElement('div')
        div.appendChild(document.createTextNode(`${el.flavor}`))
        div.classList.add('cupcake')
        div.classList.add('flex-col')
        const img = document.createElement("img");
        img.src = `${el.image}`;
        img.id = `${el.id}`
        img.classList.add('image')
        div.appendChild(img);
        cupDiv.appendChild(div)
        div.addEventListener('click', (e)=> {
            getCupcakeDetails(e.target.id)
        })
    });
}

// LISTENER FOR CLICK ON ADD BUTTON TO REVEAL ADD CUPCAKE FORM
addBtn.addEventListener('click', ()=> {
    modeNotification.innerText = 'ADD CUPCAKE'
    mode = ''
    deleteBtn.style.display="none"
    formContainer.style.display="block"
    form.reset()
})

// LISTENER FOR FORM SUBMIT THAT DELEGATES ADD OR EDIT CUCAKE FN
form.addEventListener('submit', async (e)=> {
    e.preventDefault()
    if(e.submitter.id == 'deleteBtn') {
        let res = await axios.delete(`/api/cupcakes/${editId}`)
            if(res.status == 200) {
                getCupcakes()
                location.reload(true)
            }
        } else if(e.submitter.id == 'submitBtn') {
            data = {
                flavor: document.getElementById('flavor').value,
                size: document.getElementById('size').value,
                rating: document.getElementById('rating').value,
                image :document.getElementById('image').value
            }
            if(data['image']== '') {
                delete data.image
            }
            if(mode == 'edit') {
                let res = await axios.patch(`/api/cupcakes/${editId}`, data)
                if(res.status == 200) {
                    getCupcakes()
                    location.reload(true)
                }
            } else {
                console.log('adding cupcake', data)
                let res = await axios.post('/api/cupcakes', data)
                if(res.status == 201) {
                    getCupcakes()
                    location.reload(true)
                }
            }            
        }
})

// GETS CUPCAKE BY ID FOR FORM POPULATION TO EDIT CUPCAKE DETAILS
async function getCupcakeDetails(id) {
    modeNotification.innerText = 'EDIT CUPCAKE'
    formContainer.style.display="block"
    deleteBtn.style.display="block"
    mode = 'edit'
    let res = await axios.get(`/api/cupcakes/${id}`)
    editId = id
    console.log('click on ', editId)
    document.getElementById('flavor').value = res.data.cupcake.flavor
    document.getElementById('size').value = res.data.cupcake.size
    document.getElementById('rating').value = res.data.cupcake.rating
    document.getElementById('image').value = res.data.cupcake.image   
}
