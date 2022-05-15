const stringToHTML = (S) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(s, 'test/html')
    
    return doc.body.firstChild
}

const renderItem = (item) => {
   const element = stringToHTML `<li data-id="${item._id}>${item.name}"</li>` 

    element,addEventListener('click', () => {
        const definitionList = document.getElementById('definition-list')
        Array.from(definitionList.children).forEach (x => x.classList.remove('selected'))
      element.class.add('selected') 
      const definitionIdInput = document.getElementById('definition-id')
      definitionIdInput.value = item._id
    })

   return element
}

const rendertips = (tips, ) => {
    const tips = tips.find(tips._id === definitionId)
    const element = stringToHTML `<li data-id="${tips._id}>${item.name}"</li>` 
}

const { response } = require("express")

window.onload =() => {
    const orderForm = document.getElementById('order')
    orderForm.onsubmit = (e) {
        e.preventDefault()
        const definitionId = document.getElementById('definition-id')
        const definitionIdValue = definitionId.value
        if (!definitionIdValue){
         alert ('selecione el modelo') 
         return
        }
        const order = {
          definition_id: definitionIdValue,
          user_id: 'Daniel'
        }
        fetch('https://vercel.com/feedback/api/definition',{
        method: 'POST',   
        headers: {
                'Content-type': 'application/json',

        },
        body:JSON.stringify(tips)
    }).then(x => (x) )
        
    }


    fetch("https://vercel.com/feedback/api/definition")
    .then(response => response.json())
    .then(data => {
        const definitionList = document.getElementById('definition-list')
        const submit = document.getElementById('submit')
        const listItems = data.map(renderItem)
        definitionList.removeChild(definitionList.firstElementChild)
        listItems.forEach(element => definitionList.appendChild(element))
        submit.removeAttribute('disabled')
        fetch("https://vercel.com/feedback/api/tips")
        .then(response => response.json)
        .then(tipsData => {
            const tipsList = document.getElementById('tips-list')

        } )
    })

}