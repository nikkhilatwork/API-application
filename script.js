let url = "https://www.kontests.net/api/v1/all"


let response = fetch(url)
response.then((v) => {
    return v.json()

}).then((contests) => {
    console.log(contests)
    ihtml = " "
    for (item in contests) {
        console.log(contests[item])
        ihtml += `
        
        
            <div class="card mx-2 my-3" style="Width: 20rem; justify">
            <img class="card-img-top" src="https://th.bing.com/th/id/R.ac10d2303fef230b4e8e67ec5e79aa99?rik=gNTh1lTFfKIC%2bw&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1555066931-4365d14bab8c%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8Y29kaW5nfHwwfHx8fDE2MjkzNjU5NTc%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=X5pB53YnamfuOcZGaSwkYzq9TJDV8vKmQrMirCpyvb0%3d&risl=&pid=ImgRaw&r=0">
            <div class="card-body">
              <h5 class="card-title">${contests[item].name}</h5>
              <p class="card-text"> Status is  ${contests[item].status} and site is ${contests[item].site} </p>
              <p class="card-text">  In 24 hours ${contests[item].in_24_hours}</p>
              <p>Starts at: ${contests[item].start_time}
              <p>Starts at: ${contests[item].end_time}
              <a href=" ${contests[item].url}" class="btn btn-primary my-4">Visit contest.</a>
            </div>
        </div>
        `
    }
    cardContainer.innerHTML = ihtml
})




























