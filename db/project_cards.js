class Card {
    constructor(title, description, gitHubLink, image) {
        this.title = title;
        this.description = description;
        this.gitHubLink = gitHubLink;
        this.image = image
    }
}

const card1 = new Card ("teacher's website", "This started out as a simple front end project for a family member who wanted a way to showcase their teaching qualifications and expertise in order to help expand their client base. We realised after a few meetings that what they were truly after a booking system on which they could update their availability and clients could request or cancel classes. Plans were then made to turn this into a full-stack project, and I am currently working on a draft for the back-end side of things." )
const card2 = new Card ("team dev project", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptate sunt, nihil esse excepturi ut fugit molestiae maxime, enim impedit doloremque rerum pariatur error libero? Esse debitis veniam facere aliquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quidem mollitia, dolorem, vero officia deserunt modi a quisquam vel ea quaerat odit impedit aspernatur iure quos necessitatibus cumque? Unde, eos?" )
const card3 = new Card ("cohort manager - challenge", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt voluptate sunt, nihil esse excepturi ut fugit molestiae maxime, enim impedit doloremque rerum pariatur error libero? Esse debitis veniam facere aliquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quidem mollitia, dolorem, vero officia deserunt modi a quisquam vel ea quaerat odit impedit aspernatur iure quos necessitatibus cumque? Unde, eos?" )
const card4 = new Card ("lesson-planner", "Born out of a desire to create an app that would make EFL lesson-planning less daunting for newly qualified-teachers, this full-stack project focuses... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed magnam nostrum, rem aliquid modi beatae a architecto deleniti tenetur reiciendis voluptates minima nam cum id nemo, ad magni dolores?" )

const cards = [card1, card2, card3, card4]

export { cards }