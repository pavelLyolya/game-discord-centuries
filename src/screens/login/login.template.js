export default `
<section class="login">
<h2>Choose your character</h2>
<div class="group">
  <input type="text" id="name" required maxlength="15" placeholder="Enter yor nickname">
  <div class="bar"></div>
</div>
<div class="character">
    <canvas></canvas>
    <div class="items">
      <img src="./images/character-items/guy.png" alt="guy">
      <img src="./images/character-items/soldier.png" alt="soldier">
    </div>
</div>
<div class="span-shadow">
  <span>NEXT</span>
</div>
</section>
`;
