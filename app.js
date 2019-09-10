// Insatntiate github
const github = new Github;

// Insatntiate github
const ui = new UI;

//Search Input 
const searchUser = document.getElementById('searchUser');

// Search Input event Listner
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if (userText !== '') {
        // Make an Http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User Not Found!!', 'alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    // show repos
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
});