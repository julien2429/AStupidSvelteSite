<script>
  import { text } from "svelte/internal";
  import { createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";
  const dispatch = createEventDispatcher();
  function close() {
    dispatch("closeIt");
  }
  export let is_registered = false;
</script>

<div class="background_login" transition:fade on:click={close} />
<div class="login_box" transition:fly={{ x: -300 }}>
  <form action="">
    {#if !is_registered}
      <label for="username" style="position: relative; text-align: center;"
        >Username: <input type="text" /></label
      >
      <label for="password" style="position: relative; text-align: center;"
        >Password: <input type="password" /></label
      >
    {:else}
      <label for="username" style="position: relative; text-align: center;"
        >Username: <input type="text" /></label
      >
      <label for="email" style="position: relative; text-align: center;"
        >Email: <input type="email" /></label
      >
      <label for="password" style="position: relative; text-align: center;"
        >Password: <input type="password" /></label
      >
    {/if}
    <button style="position: relative; left:25%;" on:click={close}>
      {#if is_registered}
        Register
      {:else}
        Login
      {/if}</button
    >
    <button style="position: relative;left:40% ;" on:click={close}>Close</button
    >
    <hr />
    <button
      style="position: relative;left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        margin-top: 20px;"type="button" on:click={() => (is_registered = !is_registered)}
    >
      {#if is_registered}
        Logare
      {:else}
        Inregistrare
      {/if}
    </button>
  </form>
</div>

<style>
  .background_login {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 40;
  }
  .login_box {
    position: absolute;
    top: 550px;
    left: 50%;
    margin: -400px 0 0 -215px;
    height: 250px;
    width: 400px;
    color: rgb(3, 3, 3);
    padding: 15px;
    background-color: rgb(255, 255, 255);
    border: solid 5px rgb(5, 5, 5);
    z-index: 100;
    border-radius: 10px;
  }
</style>