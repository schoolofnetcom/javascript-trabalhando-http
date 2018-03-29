// fetch('https://httpbin.org/ip')
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data, data.origin)
//     })
//     .catch((err) => {
//         console.warn(err)
//     })

// fetch('https://httpbin.org/post', {
//     method: 'POST',
//     body: 'name=Leonan&age=21',
//     headers: new Headers({ 'Content-type': 'application/x-www-form-urlencoded'})
// })
// .then((resp) => resp.json())
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.warn(err)
// })