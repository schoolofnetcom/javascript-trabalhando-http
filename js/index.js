let name = document.getElementById('name')
let job = document.getElementById('job')
let btnClick = document.getElementById('btn-click')
let tbody = document.getElementById('tbody')

btnClick.addEventListener('click', function() {
    if (name.value == '' && job.value == '') {
        console.warn('Error: Invalid value')
        return
    }

    axios
        .post('https://reqres.in/api/users', { name: name.value , job: job.value })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.warn(err)
        })
})

window.addEventListener('load', function() {
    axios
        .get('https://reqres.in/api/users')
        .then((res) => {    
            let responseData = res.data
            let data = responseData.data

            data.forEach((user, index) => {
                let tmpl = `<tr>
                    <td>${user.id}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                </tr>`

                tbody.innerHTML += tmpl
            })
        })
        .catch((err) => {
            console.warn(err)
        })
})