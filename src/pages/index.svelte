<script lang="ts">
import { goto } from "@roxi/routify";

let text = "Hellow World!!";

// スコープ内に変数 text が存在しないため1度のみ実行
$: {

  // eslint-disable-next-line no-console
  console.log("一度の実行");

}

// スコープ内に変数 text が存在するため text が変更されるたび実行
$: {

  // eslint-disable-next-line no-console
  console.log(`text(${text}) が変更するたびに実行`);

}
</script>

<div>
  <span>{text}</span>
  <span>{text}</span>
  <span>{text}</span>
  <input bind:value={text} />
  <button on:click={() => $goto("/about")}>About ページへ</button>
</div>

<style lang="scss">
div {
  @apply h-full flex flex-col items-center justify-center space-y-3;

  span {
    @apply font-bold;
  }
  :nth-child(1) {
    @apply text-blue-700;
  }
  :nth-child(2) {
    @apply text-blue-500;
  }
  :nth-child(3) {
    @apply text-blue-300;
  }

  input {
    @apply h-[100px] w-[400px];
    @apply text-center rounded border-2 border-blue-100;
    @apply focus:border-blue-900;
  }

  button {
    @apply p-4 rounded bg-blue-800 text-blue-100;
  }
}
</style>
