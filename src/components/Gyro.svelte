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

<div
  class="perspective"
  on:click={handleClick}
  style="
    --hoko: {enabled ? orientation.alpha : 0};
    --zengo:      {enabled ? orientation.beta : 0};
    --zengo-abs:  {enabled ? Math.abs(orientation.beta - 30) : 0};
    --sayu:       {enabled ? orientation.gamma : 0};
    --sayu-abs:   {enabled ? Math.abs(orientation.gamma) : 0};
    --sayu-3d:    {enabled
      ? orientation.gamma * (orientation.beta > 30 ? 1 : -1)
      : 0
    };
  "
>
  <div class="gyro" class:enabled>
    <span>
      <slot></slot>
    </span>

    {#if enabled}
      <span class="shadow">
        <slot></slot>
      </span>
    {/if}
  </div>
</div>

<style lang="postcss">
.perspective {
  perspective: 200;
}

.gyro {
  display: grid;
  grid-template-areas: content;
  place-content: center;
  max-width: max-content;
  margin-inline: auto;

  &.enabled {
    transform: rotate3d(
      1,
      calc(var(--sayu-3d) * -0.05),
      0,
      calc(var(--zengo) * 1deg - 30deg)
    );

    --dir: calc(var(--hoko) * -1deg);
  }
}

span {
  grid-area: content;

  &:not(.shadow) {
    position: relative;
    z-index: 1;
  }
}

.shadow {
  --tX: calc(var(--sayu) * 0.75px);
  --tY: calc(var(--zengo) * 0.75px - 22px);

  transform: translate(var(--tX, 0), var(--tY, 0));
  opacity: 0.12;

  @media (prefers-color-scheme: dark) {
    opacity: 0.2;
  }
}
</style>
