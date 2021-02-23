
/**
 * @roxi/routify 2.12.5
 * File generated Tue Feb 23 2021 08:30:09 GMT+0200 (Eastern European Standard Time)
 */

export const __version = "2.12.5"
export const __timestamp = "2021-02-23T06:30:09.763Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "C:/Users/ioana/Desktop/Proiecte/Test_routify/go-svelte-routify-starter/frontend/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/ioana/Desktop/Proiecte/Test_routify/go-svelte-routify-starter/frontend/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/ioana/Desktop/Proiecte/Test_routify/go-svelte-routify-starter/frontend/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "modules",
      "filepath": "/modules",
      "name": "modules",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/ioana/Desktop/Proiecte/Test_routify/go-svelte-routify-starter/frontend/src/pages/modules",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "Login.svelte",
          "filepath": "/modules/Login.svelte",
          "name": "Login",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ioana/Desktop/Proiecte/Test_routify/go-svelte-routify-starter/frontend/src/pages/modules/Login.svelte",
          "importPath": "../src/pages/modules/Login.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/modules/Login",
          "id": "_modules_Login",
          "component": () => import('../src/pages/modules/Login.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/modules"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "search",
      "filepath": "/search",
      "name": "search",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/ioana/Desktop/Proiecte/Test_routify/go-svelte-routify-starter/frontend/src/pages/search",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[page_name].svelte",
          "filepath": "/search/[page_name].svelte",
          "name": "[page_name]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ioana/Desktop/Proiecte/Test_routify/go-svelte-routify-starter/frontend/src/pages/search/[page_name].svelte",
          "importPath": "../src/pages/search/[page_name].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/search/:page_name",
          "id": "_search__page_name",
          "component": () => import('../src/pages/search/[page_name].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/search/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/ioana/Desktop/Proiecte/Test_routify/go-svelte-routify-starter/frontend/src/pages/search/index.svelte",
          "importPath": "../src/pages/search/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/search/index",
          "id": "_search_index",
          "component": () => import('../src/pages/search/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/search"
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

