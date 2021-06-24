<script lang="ts">
import { goto } from "@roxi/routify";

let text = "Hello World!!";

// $: { } ← のことを reactive declarations と呼ぶ
// reactive declarations に変数 text が存在しないため1度のみ実行
$: {
  // eslint-disable-next-line no-console
  console.log("一度の実行");
}

// reactive declarations に変数 text が存在するため text が変更されるたび実行
$: {
  // eslint-disable-next-line no-console
  console.log(`text(${text}) が変更するたびに実行`);
}

// reactive declarations には条件を追加することが可能
$: if (text.length > 30) {
  // eslint-disable-next-line no-console
  console.log("30文字以上になりました");
}
</script>

<div>
  <span>{text}</span>
  <span>{text}</span>
  <span>{text}</span>
  <input bind:value={text} />
  <button on:click={() => $goto("/about")}>About ページへ</button>
  <button on:click={() => $goto("/not-found")}>Not Found ページへ</button>
</div>

<style lang="scss">
@import "./index.scss";
</style>
