<script>
export let text, size;

let fonts = [
  "'Abril Fatface', sans-serif",
  "'Big Shoulders Display', cursive",
  "'JetBrains Mono', monospace",
  "'Liu Jian Mao Cao', cursive",
  "'Overpass', sans-serif",
  "'Oxanium', cursive",
];

let families = [
  'family=Abril+Fatface',
  'family=Big+Shoulders+Display',
  'family=JetBrains+Mono',
  'family=Liu+Jian+Mao+Cao',
  'family=Overpass:wght@100',
  'family=Oxanium:wght@700',
].join('&');

let random = () => Math.floor(Math.random() * fonts.length);
</script>

<svelte:head>
  <link rel="stylesheet" href="//fonts.googleapis.com/css2?{families}&display=swap&text={text}">
</svelte:head>

<div style="font-size: {size};">
  {#each text as char}
    <span style="font-family: {fonts[random()]};">{char}</span>
  {/each}
</div>

<style>
::selection {
  background-color: transparent;
  color: var(--accent);
}
</style>
