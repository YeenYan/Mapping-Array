'use strict';

let userData = [
  {
    name: 'Mary Robins',
    position: 'Architect',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "./images/user_girl-1.jpg",
    icon1: {
      icon: 'photo_camera',
      num: 2252
    },
    icon2: {
      icon: 'favorite',
      num: 238
    },
    icon3: {
      icon: 'person',
      num: 2252
    },
    cta: 'Follow'
  },
  {
    name: 'Mary Robins',
    position: 'Architect',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "./images/user_girl-1.jpg",
    icon1: {
      icon: 'photo_camera',
      num: 2252
    },
    icon2: {
      icon: 'favorite',
      num: 238
    },
    icon3: {
      icon: 'person',
      num: 2252
    },
    cta: 'Follow'
  },
  {
    name: 'Mary Robins',
    position: 'Architect',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "./images/user_girl-1.jpg",
    icon1: {
      icon: 'photo_camera',
      num: 2252
    },
    icon2: {
      icon: 'favorite',
      num: 238
    },
    icon3: {
      icon: 'person',
      num: 2252
    },
    cta: 'Follow'
  },
  {
    name: 'Mary Robins',
    position: 'Architect',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "./images/user_girl-1.jpg",
    icon1: {
      icon: 'photo_camera',
      num: 2252
    },
    icon2: {
      icon: 'favorite',
      num: 238
    },
    icon3: {
      icon: 'person',
      num: 2252
    },
    cta: 'Follow'
  },
  {
    name: 'Mary Robins',
    position: 'Architect',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "./images/user_girl-1.jpg",
    icon1: {
      icon: 'photo_camera',
      num: 2252
    },
    icon2: {
      icon: 'favorite',
      num: 238
    },
    icon3: {
      icon: 'person',
      num: 2252
    },
    cta: 'Follow'
  },
  {
    name: 'Mary Robins',
    position: 'Architect',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "./images/user_girl-1.jpg",
    icon1: {
      icon: 'photo_camera',
      num: 2252
    },
    icon2: {
      icon: 'favorite',
      num: 238
    },
    icon3: {
      icon: 'person',
      num: 2252
    },
    cta: 'Follow'
  },
];

const wrapper = document.querySelector('.wrapper');

let details = userData.map(function (item) {
  return (
    '<div class="card">' +

    '<div class="image_wrapper">' +
    '<img src=' + item.image + ' class="user_image">' +
    '</div>' +

    '<div class="text-wrapper">' +
    '<p class="user_name">' + item.name + '</p>' +
    '<p class="user_position">' + item.position + '</p>' +
    '<p class="user_description">' + item.description + '</p>' +
    '</div>' +

    '<div class="social_wrapper">' +
    '<div class="social_content">' +
    '<span class="material-symbols-outlined">' + item.icon1.icon + '</span>' +
    '<span>' + item.icon1.num + '</span>' +
    '</div>' +

    '<div class="social_content">' +
    '<span class="material-symbols-outlined">' + item.icon2.icon + '</span>' +
    '<span>' + item.icon2.num + '</span>' +
    '</div>' +

    '<div class="social_content">' +
    '<span class="material-symbols-outlined">' + item.icon3.icon + '</span>' +
    '<span>' + item.icon3.num + '</span>' +
    '</div>' +
    '</div>' +

    '<div class="cta_wrapper">' +
    '<button class="cta">' + item.cta + '</button>' +
    '</div>' +

    '</div>'
  );
});

wrapper.innerHTML = details.join('\n');