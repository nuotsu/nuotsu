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
  console.log(event);
}
</script>

<h1 class="font-title" on:click|preventDefault={requestPermission}>nuotsu</h1>

<div>isRunning: {isRunning}</div>

<div>{JSON.stringify(orientation)}</div>

<style lang="postcss">
h1 {
  font-size: 4rem;
}
</style>
