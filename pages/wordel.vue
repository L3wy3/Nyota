
<template>
    <div class="container">
        <div id="grid" class="grid">
            <div v-for="item in items" :class="`${item[1] === 'green' ? 'green' : item[1] === 'yellow' ? 'yellow' : ''}`" >
                {{ item[0] }}
            </div>
        </div>
        <div class="keyboard">
            <v-btn icon v-for="letter in alphabet" class="key" @click="setNewData(letter)">{{letter}}</v-btn>
        </div>
        <div>
            <button @click="EnterRow" :disabled="submitCondition">Enter</button>
            <button @click="DeleteChar" class="px-4 py-2 bg-pink-500 rounded uppercase font-bold hover:bg-pink-600 duration-300">Back</button>
        </div>
    </div>
    <div>
 </div>
    <client-only>
        <!-- <p>{{ word }}</p> -->
    </client-only>

</template>
<script setup lang="ts">
import type { ConstNode } from 'three/examples/jsm/nodes/Nodes.js';
import words from '../assets/fives.json'
const word = words[Math.floor(Math.random() * words.length)]
var completedRow =0

var submitCondition = true;
var winCondition = 0
var isWord
const EnterRow = () => {
    if (count % 5 === 0 && count > completedRow*5) {
        for (var i = 0; i < 5; i++) {
            var letter = items.value[i+(completedRow*5)][0]
            if(letter == word[i]) {
                winCondition++
                items.value[i+(completedRow*5)][1] = "green"
            } 
            else if (letter == word[0]||letter == word[1]||letter == word[2]||letter == word[3]||letter == word[4]){
                items.value[i+(completedRow*5)][1] = "yellow"
            }
        }
        completedRow++
        if(winCondition === 5) {
            console.log("Congrats you won with "+(10-completedRow)+" lives remaining")
        }
    }
    submitCondition = true
    return items
}
const setNewData = (letter: string) => {
    // disable = false;
    
    // submitCondition = true;
    if (count-(completedRow*5) < 5) {
        items.value[count][0] = letter
        count++
        if (count-(completedRow*5) == 5) {
            isWord = items.value[0+(completedRow*5)][0]+""+items.value[1+(completedRow*5)][0]+""+items.value[2+(completedRow*5)][0]+""+items.value[3+(completedRow*5)][0]+""+items.value[4+(completedRow*5)][0]
            if(words.includes(isWord)){
                submitCondition = false
            }
            console.log(count-(completedRow*5))
            // return submitCondition
        }
        return items
    }
    
        
    

    // make your changes here...
  }
var count = 0;
var items = ref([["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0],["",0]]);
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const DeleteChar = () => {
    submitCondition = true
    if (count > completedRow*5) {
        count--;
        items.value[count][0] = "";
        return items
    }
}

import { useMagicKeys, whenever } from '@vueuse/core'
const { q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m, Backspace, current } = useMagicKeys()
const keys = computed(() => Array.from(current))
whenever(keys, () => {
    if(keys.value[0] != "") {
        console.log(keys.value[0])
        if (keys.value[0] == "Backspace") {
            DeleteChar()
        }
        else {
            setNewData(keys.value[0])
        }
    }
})
</script>
<style>
body {

}

.container {
    margin-top: 200px;
}
button:disabled {
    background-color: black;
}
div.yellow {
    background-color: yellow;
}
div.green {
    background-color: green;
}
.keyboard {
    display: flex;
    width: 70%;
    max-width: 100vw;
    gap: 9px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0;
}
.key {
    font-size: 32px;
    border-radius: 12px;
    border: 2px solid black;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
}
    .grid div {
        border: 1px solid #000;
        height: 50px;
        width: 50px;
        font-size: 30px;
        text-align: center;
        text-transform: capitalize;
    }
    .grid {
        display: inline-grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 6px;
        margin: 0 auto;
        width: fit-content;
        position: relative;
    }
    .container {
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .keyboard {
        display: inline-grid;
        grid-template-columns: repeat(10, 1fr);
        gap: 3px;
    }
    .keyboard div {
        text-align: center;
        background-color: lightgray;
        border-radius: 4px;
        border: 1px solid #000;
        font-size: 20px;
        padding: 2px;
    }
    .keyboard div:hover {
        background-color: aqua;
        cursor: pointer;
    }
</style>