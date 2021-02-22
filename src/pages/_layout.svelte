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
  console.log(e.keyCode);
    if(e.keyCode === 13)
    {
    	$goto('./search/'+address);
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
      on:keypress={handle}
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
    position: relative;
    float: left;
    color: white;
    top:10%;
    margin-left: 10px;
    font-weight: 400;
    font-size: 120%;
  }
  .search_button {
    position: relative;
    float: left;
    height:98%;
    margin-left: 30px;
    z-index: 39;
  }
  .search_field {
    position: relative;
    color: rgb(20, 20, 20);
    float: left;
    margin-left: 30px;
    top: 0;
    font-style: italic;
    height:98%;
    z-index: 39;
  }
  .login_btn {
    position: relative;
    float: right;
    border: solid 3px rgb(0, 0, 0);
    top: 0;
    font-style: italic;
    height: 40px;
    width: 80px;
    z-index: 40;
  }
  .register_btn {
    position: relative;
    border: solid 3px rgb(0, 0, 0);
    float: right;
    margin-right: 80px;
    top: 0;
    font-style: italic;
    height: 40px;
    width: 80px;
    z-index: 40;
  }
  .top_line {
    position: relative;
    top: 0;
    left: 0;
    border-bottom: 6px solid rgb(3, 3, 3);
    background-color: rgb(56, 55, 55);
    width: 100%;
    height: 40px;
    z-index: 40;
  }
</style>
