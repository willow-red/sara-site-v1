// Getting all posts
export function getAllProjects() {
    fetch("http://localhost:3000/posts")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
}
//design projects