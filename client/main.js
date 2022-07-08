const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inspirationBtn = document.querySelector("#inspirationButton")
const hobbyBtn = document.querySelector('#hobbyButton')
const addHobby = document.getElementById('addhobby')
const deletehobby = document.querySelector('dhobby')
const deleteBtn = document.getElementById('dltehobby')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

////////////////////////////////////////////////////////////////
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

// ////////////////////////////////////////////////////////////
const getInspiration = () => {
    axios.get("http://localhost:4000/api/inspiration/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}
inspirationBtn.addEventListener('click', getInspiration)

// ////////////////////////////////////////////////////////////
const getHobby = () => {
    axios.get("http://localhost:4000/api/hobby/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}
hobbyBtn.addEventListener('click', getHobby)

const submitHandler = (evt) => {
    evt.preventDefault()
    console.log('hello')
    let name = document.querySelector('#name')
    let hobby = document.querySelector('#hobby')

    let bodyObj = {
        hobby: hobby.value
    }

    axios.post("http://localhost:4000/api/hobby", bodyObj)
    .then(res => {
        alert('hobby added')
    })
    name.value = ''
    hobby.value = ''
}
addHobby.addEventListener('click', submitHandler)

const deleteHandler = (evt) => {
    evt.preventDefault()

    const name =  deleteBtn.value

    axios.put("http://localhost:4000/api/hobby" + name)
    .then((response) => {
        if(response.data.success) {
            console.log(response.data.info)
            alert('successfully deleted')
        } else {
            alert('failure to delete')
        }
    })
}
deletehobby.addEventListener('submit', deleteHandler)

