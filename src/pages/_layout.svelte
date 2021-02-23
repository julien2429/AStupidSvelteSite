<script>
  import { route } from "@roxi/routify/runtime/store";
  import { urlToRoute } from "@roxi/routify/runtime/utils/urlToRoute";
  import { goto } from '@roxi/routify'
  import Login from "./modules/Login.svelte";
  let is_logged = false;
  function show_register() {
    is_registered = true;
    show_login();
  }

  function show_login() {
    is_logged = true;
  }

  function hide_login() {
    is_logged = false;
    is_registered = false;
  }

  let is_registered = false;

  function search_func() {
    let address = document.getElementById("search").value;
    $goto('./search/'+address);
  }
  function handle(e){
	let address=document.getElementById("search").value;
  console.log(address);
  if(address)
  {
    $goto('./search/'+address);
  }
  else
  {
    $goto('../../');
  }
	return false;
}
</script>

<main>
  <div class="top_line">
    <a class="acasa" href="/">ReferateleGrozave.com</a>
    <input
      class="search_field"
      id="search"
      type="text"
      placeholder="Type something here"
      on:keyup={handle}
    />
    <button class="search_button" on:click={search_func}>search</button>
    <button class="register_btn" on:click={show_register}>Register</button>
    <button class="login_btn" on:click={show_login}>Login</button>
    {#if is_logged}
      <Login {is_registered} on:closeIt={hide_login} />
    {/if}
  </div>
  <slot />
</main>

<style>
  .acasa{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    margin-left: 20px;
    color: white;
    font-weight: 400;
    font-size: 160%;
  }
  .search_button {
    margin-top: auto;
    margin-bottom: auto;
    border: solid 3px rgb(0, 0, 0);
    background-image: url("../Poze/search.png");
    z-index: 39;
    border-radius: 1500px;
  }
  .search_field {
    margin-top: auto;
    margin-bottom: auto;
    align-self: center;
    color: rgb(20, 20, 20);
    border: solid 3px rgb(0, 0, 0);
    font-style: italic;
    z-index: 39;
    border-radius: 500px;
  }
  .login_btn {
    margin-top: auto;
    margin-bottom: auto;
    border: solid 3px rgb(0, 0, 0);
    font-style: italic;
    border-radius: 500px;
    z-index: 40;
  }
  .register_btn {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;    
    border: solid 3px rgb(0, 0, 0);
    font-style: italic;
    border-radius: 500px;
    z-index: 40;
  }
  .top_line {
    position:sticky;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 6px solid rgb(3, 3, 3);
    background-color: rgb(56, 55, 55);
    z-index: 40;
  }
</style>
