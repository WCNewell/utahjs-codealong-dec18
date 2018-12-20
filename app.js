// document & window already exist, they are given in any js doc
// console.log(document)

// Strings, arrays, objects, booleans, numbers, functions are all tools we can start using

const postsContainer = document.getElementById('posts-container')
// console.log(postsContainer)

const addPostForm = document.addPostForm

let posts = [
    
    {
        title: 'My First Post',
        imgUrl: 'https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/f24b4a7bf9f24d1ba5f899339e6949f3'
    },
    {
        title: 'My First Post',
        imgUrl: 'https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/f24b4a7bf9f24d1ba5f899339e6949f3'
    }

]

addPostForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const title = addPostForm.title.value
    const imgUrl = addPostForm.imgUrl
    const newPost = {
        title: title.value,
        imgUrl: imgUrl.value
    }
    posts.push(newPost)
    postsContainer = ''
})

function listPosts() {
    for ( i = 0; posts.length < 10; i++ ) {

    // Create html elements:

    const postContainer = document.createElement('div')
    const myH1 = document.createElement('h1')
    const myImg = document.createElement('img')

    // Add content to created elements:

    myH1.textContent = posts[i].title
    // look at your element as an object in the console
    // console.dir(myH1)
    myImg.setAttribute('src', posts[i].imgUrl)
    postContainer.classList.add('post-container')

    // Everything in html is about parent-child relationships
    // appendChild to get the elemnt from js to html

    postContainer.appendChild(myH1)
    postContainer.appendChild(myImg)
    postsContainer.appendChild(postContainer)

    }
}

listPosts()
