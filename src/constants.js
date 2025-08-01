import blog1 from './assets/img/blog1.jpg'
import blog2 from './assets/img/blog2.jpg'
import blog3 from './assets/img/blog3.jpg'
import image from './assets/img/iphone16.jpg'
import image2 from './assets/img/iphone-16-pro.jpg'
import image3 from './assets/img/iphone16e.jpg'
import image4 from './assets/img/iphone15.jpg'
const watchImages = import.meta.glob('./assets/watch images/*.jpg',{eager:true,as:'url'});
const watchData = Object.values(watchImages)



export const watches=[
  {
    text:'Apple Watch SE',
    price:'349',
    image:watchData[0]
  },
  {
    text:'Apple Watch Series 10A',
    price:'599',
    image:watchData[1]
  },
    {
    text:'Apple Watch Series 10T',
    price:'1049',
    image:watchData[2]
  },
    {
    text:'Apple Watch Ultra 2',
    price:'1199',
    image:watchData[3]
  }
]

export const blogs=[
  {
    title:'Get Some Cool Gadget in 2025',
    date: 'July 23 2025',
    category: 'Gadgets',
    image:blog1
  },
    {
    title:'Technology Hacks You Wont Get',
    date: 'July 21 2025',
    category: 'Technology',
    image:blog2
  },
    {
    title:'Top 10 small camera in the world',
    date: 'July 1 2025',
    category: 'Camera',
    image:blog3
  }
]


export const images = [
  {
    text:'Iphone 16',
    price: "1299",
    image: image
  },
    {
    text:'Iphone 16 Pro',
    price: "1599",
    image: image2
  },
    {
    text:'Iphone 16e',
    price: "949",
    image: image3
  },
      {
    text:'Iphone 15 ',
    price: "1099",
    image: image4
  }
]


export const navItems =    [
    {name:"Home",path:'/home'},
    {name:"Products",path:'/product'},
    {name:"Pages",path:'/pages'},
    {name:"About Us",path:'/about-us'},
    {name:"Contact Us",path:'/contact-us'}
]