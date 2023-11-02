# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Links

- [Solution URL](https://github.com/elyyyse/Interactive-pricing-component)
- [Live Site URL](https://interactive-pricing-component-theta.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/)
- Mobile-first workflow
- Flexbox

### What I learned

- For this project, I really focused on separating concerns and creating reusable components. It's probably overkill for a project of this size, but I think it was good practice as I learn React.

  - Used the same `<button>` component as a CTA (Start my trial) and a Pricing Toggle (monthly or yearly)
  - Realized late in the game that the accessibility needs for these two types of buttons are different enough that perhaps a `<Button />` component and a separate `<ToggleButton />` component would have been prudent

- I also learned that - unlike Firefox, and even IE - Chrome doesn't allow you to custom style the track on a `<range>` input based on progress (meaning different colors for the left and right sides of the thumb). I found one potential solution, but it seemed a bit hacky.

### Continued development

- This was my first solo React project, so there's a lot of development opportunity here - getting more comfortable with the framework, improving my component design, starting to use custom hooks more.
- I will definitely look into CSS Modules or styled-components for my next project. I wanted to minimize how much new I was taking on with this project, so I stuck with the plain CSS that I know.

## Author

- Website - [Elyse Kanagaratnam](https://www.elysekan.com)
- Frontend Mentor - [@elyyyse](https://www.frontendmentor.io/profile/elyyyse)
