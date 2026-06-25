const mongoose = require("mongoose");
const Product = require("./models/Service");

mongoose.connect("mongodb://127.0.0.1:27017/interior");

const products = [
  {
  id: "hair-styling",
  category: "Hair",
  image: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
  services: [
    {
      name: "Hair Cut",
      duration: "45 min",
      price: "₹500",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hair Spa",
      duration: "60 min",
      price: "₹1200",
      image:
        "https://plus.unsplash.com/premium_photo-1733317329824-7028adef050a?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hair Coloring",
      duration: "90 min",
      price: "₹2500",
      image:
        "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
},

  {
    id: "facial-treatments",
    category: "Skin",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
    services: [
      {
        name: "Gold Facial",
        duration: "60 min",
        price: "₹1500",
        image:
          "https://plus.unsplash.com/premium_photo-1726862764199-f556b6b05fe9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Cleanup",
        duration: "30 min",
        price: "₹600",
        image:
          "https://images.unsplash.com/photo-1674867688568-933ab7e65636?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    id: "nail-care",
    category: "Nail",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc",
    services: [
      {
        name: "Manicure",
        duration: "45 min",
        price: "₹700",
        image:
          "https://plus.unsplash.com/premium_photo-1661290231745-15f1ed6fea88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      { 
        name: "Pedicure",
        duration: "60 min",
        price: "₹900",
        image:
          "https://plus.unsplash.com/premium_photo-1661499249417-c20d6b668469?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Gel Polish",
        duration: "40 min",
        price: "₹1200",
        image:
          "https://images.unsplash.com/photo-1632345031435-8727f6897d53",
      },
      {
        name: "Nail Extension",
        duration: "90 min",
        price: "₹2500",
        image:
          "https://images.unsplash.com/photo-1587729927069-ef3b7a5ab9b4?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    id: "body-treatment",
    category: "Body",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    services: [
      {
        name: "Body Polish",
        duration: "60 min",
        price: "₹1800",
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      },
      {
        name: "Body Scrub",
        duration: "45 min",
        price: "₹1500",
        image:
          "https://images.unsplash.com/photo-1507652313519-d4e9174996dd",
      },
      {
        name: "Detox Treatment",
        duration: "75 min",
        price: "₹2200",
        image:
          "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
      },
    ],
  },

  {
    id: "bridal-makeup",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    services: [
      {
        name: "Bridal Makeup",
        duration: "3 hrs",
        price: "₹12000",
        image:
          "https://images.unsplash.com/photo-1684868265714-fd2300637c23?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Engagement Makeup",
        duration: "2 hrs",
        price: "₹7000",
        image:
          "https://plus.unsplash.com/premium_photo-1661771761352-bd446050d5fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Reception Makeup",
        duration: "3 hrs",
        price: "₹10000",
        image:
          "https://plus.unsplash.com/premium_photo-1661326352695-6cbe1ff74ee9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  {
    id: "massage-therapy",
    category: "Massage",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
    services: [
      {
        name: "Swedish Massage",
        duration: "60 min",
        price: "₹2000",
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      },
      {
        name: "Aromatherapy Massage",
        duration: "75 min",
        price: "₹2500",
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
      },
      {
        name: "Deep Tissue Massage",
        duration: "90 min",
        price: "₹3000",
        image:
          "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
      },
    ],
  },

];

const seedDB = async () => {
  await Product.deleteMany();
  await Product.insertMany(products);

  console.log("Products inserted successfully");
  mongoose.connection.close();
};

seedDB();