import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="/Indianfood1.jpg" class="img-fluid w-100 pt-1" alt="..."/>
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="/Veg Recipe.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Veg Recipes</h5>
        <p class="card-text">Eat Your Greens For A Healthy Sheen.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/Sweets3.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Sweets Recipes</h5>
        <p class="card-text">A Sweet Treats For A Sweet Life.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/Cakes.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Cakes Recipes</h5>
        <p class="card-text">Where There's Cake, There's Hope.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/paneer3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Paneer Recipes</h5>
        <p class="card-text">Cheese Melts, But Paneer Rocks.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home