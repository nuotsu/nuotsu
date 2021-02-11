<script>
let isRunning = false;
$: orientation = {};

function requestPermission() {
  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission();
  }

  if (isRunning) {
    window.removeEventListener('deviceorientation', handleOrientation);
    isRunning = false;
  } else {
    window.addEventListener('deviceorientation', handleOrientation);
    isRunning = true;
  }
}

function handleOrientation(event) {
  orientation = event;
}
</script>

<div class="container" on:click|preventDefault={requestPermission}>
  <div
    class="logo font-title"
    class:isRunning
    style="
      --alpha:  {orientation.alpha || 0}deg;
      --beta:   {orientation.beta || 0}deg;
      --gamma:  {orientation.gamma || 0};
    "
  >nuotsu</div>
</div>

<dl>
  <dt>alpha</dt>  <dd>{orientation.alpha || 0}</dd>
  <dt>beta</dt>   <dd>{orientation.beta || 0}</dd>
  <dt>gamma</dt>  <dd>{orientation.gamma || 0}</dd>
</dl>

<style lang="postcss">
.container {
  perspective: 200;
  text-align: center;
}

.logo {
  font-size: 4rem;
  transform:
    rotate3d(1, calc(var(--gamma) / 15), 0, calc(var(--default, 0) + var(--beta)));

  &.isRunning {
    --default: -60deg;
  }
}
</style>
