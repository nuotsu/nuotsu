<script>
let enabled = false;
$: orientation = {};

function handleClick() {
  if (!DeviceOrientationEvent.requestPermission) return false;

  DeviceOrientationEvent.requestPermission();

  if (enabled) {
    window.removeEventListener('deviceorientation', handleOrientation);
    enabled = false;
  } else {
    window.addEventListener('deviceorientation', handleOrientation);
    enabled = true;
  }
}

function handleOrientation(event) {
  orientation = event;
}
</script>

<div class="perspective" on:click={handleClick}>
  <div class:transform={enabled}
    style="
      --beta:   {orientation.beta || 0}deg;
      --gamma:  {orientation.gamma || 0};
    "
  >
    <slot></slot>
  </div>
</div>

<style>
.perspective {
  perspective: 200;
  text-align: center;
}

.transform {
  transform: rotate3d(
    1,
    calc(var(--gamma) / 15),
    0,
    calc(-60deg + var(--beta))
  );
}
</style>
