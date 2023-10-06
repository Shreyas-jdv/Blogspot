// Add interactivity to blog posts

const blogPosts = document.querySelectorAll('.content');

blogPosts.forEach((blogPost) => {
  const readMoreButton = blogPost.querySelector('a');

  readMoreButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Animate the blog post to scroll into view

    blogPost.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
