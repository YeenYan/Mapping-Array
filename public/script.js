'use strict';

let userData = [
  {
    name: 'Mary Robins',
    position: 'Architect',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "../public/images/user_girl-1.jpg",
    imageMargin: -7,
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
    name: 'Joe Smith',
    position: 'Software Engineer',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "../public/images/user_male-1.jpg",
    imageMargin: -.9,
    icon1: {
      icon: 'photo_camera',
      num: 532
    },
    icon2: {
      icon: 'favorite',
      num: 1887
    },
    icon3: {
      icon: 'person',
      num: 4000
    },
    cta: 'Follow'
  },
  {
    name: 'Liza Williams',
    position: 'Designer',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "../public/images/user_girl-3.jpg",
    imageMargin: -3.5,
    icon1: {
      icon: 'photo_camera',
      num: "10k"
    },
    icon2: {
      icon: 'favorite',
      num: "23k"
    },
    icon3: {
      icon: 'person',
      num: "100k"
    },
    cta: 'Follow'
  },
  {
    name: 'Robert Ford',
    position: 'Enterprenuer',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "../public/images/user_male-2.jpg",
    imageMargin: -10,
    icon1: {
      icon: 'photo_camera',
      num: 523
    },
    icon2: {
      icon: 'favorite',
      num: "2k"
    },
    icon3: {
      icon: 'person',
      num: "12k"
    },
    cta: 'Follow'
  },
  {
    name: 'Pamela Johnson',
    position: 'Data Analyst',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "../public/images/user_girl-2.jpg",
    imageMargin: -1,
    icon1: {
      icon: 'photo_camera',
      num: "23k"
    },
    icon2: {
      icon: 'favorite',
      num: "435k"
    },
    icon3: {
      icon: 'person',
      num: "800k"
    },
    cta: 'Follow'
  },
  {
    name: 'Chad Wick',
    position: 'Programmer',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis molestiae vero accusantium culpa doloremque reiciendis!',
    image: "../public/images/user_male-3.jpg",
    imageMargin: -12,
    icon1: {
      icon: 'photo_camera',
      num: 230
    },
    icon2: {
      icon: 'favorite',
      num: 5000
    },
    icon3: {
      icon: 'person',
      num: 8000
    },
    cta: 'Follow'
  },
];

const wrapper = document.querySelector('.wrapper');

let details = userData.map(function (item) {
  return (
    '<div class="card">' +

    '<div class="image_wrapper">' +
    '<img src=' + item.image + ' class="user_image"' + 'style="margin-left:' + item.imageMargin + 'rem;">' +
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