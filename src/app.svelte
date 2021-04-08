<script lang="ts">
import "./tailwind-styles.svelte";

const name: string = "world";
</script>

<h1>Hello {name}!</h1>

<style lang="scss">
h1 {
  @apply text-center;
}
</style>
