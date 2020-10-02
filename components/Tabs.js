// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const entryTab = document.querySelector('.topics')

function tabMaker(topic){
    const topicDiv = document.createElement('div')

    topicDiv.classList.add('tab')

    topicDiv.textContent = topic

    return topicDiv
}

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(res => {
        const topics = res.data.topics
        topics.forEach(function(topic){
            const topicTab = tabMaker(topic)
            entryTab.append(topicTab)
        })
    })
    .catch(err =>{
        console.log(err)
    })