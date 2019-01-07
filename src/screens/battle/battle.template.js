export default `
<section class="battle">
  <article class="battle-state">
    <header>
      <span class="name">Plauer Name</span>
      <span class="versus">versus</span>
      <span class="name">Big Russian Boss</span>
    </header>
    <div class="health">
      <div><canvas id="player-health" width="600" height="30"></canvas></div>
      <div><canvas id="monster-health" width="600" height="30"></canvas></div>
    </div>
  </article>
  <div class="canvas-container">
    <canvas id="character" width="1200" height="600"></canvas>
  </div>
  <div class="span-shadow attack">
    <span>Attack!</span>
  </div>
</section>
`;
