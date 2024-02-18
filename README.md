# hackathon-social-media

## Things we did:
- Setup a node.js express app, while coding through ssh into a linux server hosted on a macbook
- Learned to change an image when hovering over the element
- Made the post cards responsive to diffrent screen sizes
- Learned to handle POST requests with image uplaods to a MongoDB database

## TODO:
- link database to the actual post content for the images, text, user details, and likes
- image upload to go through anti-ai watermarking
- make a script that populates page with all posts as you scroll
- make a script that populates page with the current post's comments as you scroll
- add function to like button and change it to be filled when current user has liked this item
- style up the submit button

## Resources:
- Comment Icon: https://www.svgrepo.com/svg/522067/comment-1
- Heart Icon: https://www.svgrepo.com/svg/522147/heart-like
- Filled Heart Icon: https://www.svgrepo.com/svg/522144/heart-like
- Dogs Image: https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg

## Hackathon Topics
### Originality
Is it implementing a concept that has been done in the past? Or is it something entirely new? If it was a project that has been done before, was it done in a unique way? Is there something special about this project that is unique to their design?
-   Maybe a social media site with images posts, text posts, comments, and likes does not seem original to you, this is understandable, our vision goes beyond that.
-   Unique to our social media site, is the vision to protect user images from being used by AI models scalping the internet for new data to train off of.
- This is acheived through an in-built deeplearning poisoning mechanism.
### Design
How well designed was the project? Was the implementation thoroughly implemented using well fit technologies that were meant for the project? Or were technologies not suited for the goals of the project used for more familiarity?
- Our visual design is responsive to screen size and mobile devices.
- We use servers responsible for hosting the website and the image masking program with Node.js, Express, and Next.js.
- We used cloud and local database options to host user images.
### Utility/Impact
How much utility/impact would this project provide if someone implemented it into their lives? Can this project help users live a more comfortable or convenient life? Would this project provide benefit to its users?
- If fully implemented, user privacy and the right to their own images would be preserved.
### Execution
How well done was the project compared to its vision? Were they able to implement their ideas in an intuitive and well thought out way? Does the project live up to their goals and provide a service that solves the problems they sought out to solve?
- Ram was able to get a bare bones version of the image masking software to work with user authentication and uploading implemented
- Jonathan waas able to get a visual appearing interface and almost had image uploading for the posting and comment feature with MongoDB to work but ran out of time
- Glueing these two parts of the project together would produce a complete product.
### Technical Complexity
How technically complex was their project? Did they use a variety of technologies to accomplish the goal they established? Did they accurately incorporate different technologies that support each other to provide an efficient and accurate product?
- We used many technolgies to build our project including
    - HTML
    - CSS
    - JavaScript
    - TypeScript
    - Node.js
    - Next.js
    - MongoDB
    - Express
    - Google Cloud Platform (Cloud Run, Pub/Sub, Storage Buckets, Artifact Registry)
    - Firebase