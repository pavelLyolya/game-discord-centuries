export default `
<section class="login">
<h2>Choose your character</h2>
<div class="group">
  <input type="text" id="name" required maxlength="15" placeholder="Enter your nickname" autofocus>
  <div class="bar"></div>
</div>
<div class="character">
    <canvas width="600px" height="460px"></canvas>
    <div class="items">
      <div class="js-character-item"><img src="./images/character-items/guy.png" alt="hero"></div>
      <div class="js-character-item"><img src="./images/character-items/soldier.png" alt="soldier"></div>
    </div>
</div>
<div class="span-shadow">
  <span>NEXT</span>
</div>
</section>
`;
