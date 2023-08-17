const activityBtn = document.getElementById('get-activity')

activityBtn.addEventListener('click', fetchActivity)

function fetchActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        document.getElementById('activity').textContent = data.activity 
        console.log(data)
    })
}
 

