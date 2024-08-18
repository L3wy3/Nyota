<script setup lang="ts">
import words from '../assets/fives.json'
var row = 0;
var column = 0;

function keyStroke(key) {
    items[2] = key
    column++;
    console.log("Row: "+row+" Column: "+" = "+key);
    console.log(items[0])
}
const items = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
</script>

<template>
    <div class="container">
        <div id="grid" class="grid">
            <div v-for="item in items">
                {{ item }}
            </div>
        </div>
        <div class="keyboard">
            <div class="key" @click="keyStroke('q')">Q</div>
            <div class="key" @click="keyStroke('w')">W</div>
            <div class="key" @click="keyStroke('e')">E</div>
            <div class="key" @click="keyStroke('r')">R</div>
            <div class="key" @click="keyStroke('t')">T</div>
            <div class="key" @click="keyStroke('y')">Y</div>
            <div class="key" @click="keyStroke('u')">U</div>
            <div class="key" @click="keyStroke('i')">I</div>
            <div class="key" @click="keyStroke('o')">O</div>
            <div class="key" @click="keyStroke('p')">P</div>
            <div class="key" @click="keyStroke('a')">A</div>
            <div class="key" @click="keyStroke('s')">S</div>
            <div class="key" @click="keyStroke('d')">D</div>
            <div class="key" @click="keyStroke('f')">F</div>
            <div class="key" @click="keyStroke('g')">G</div>
            <div class="key" @click="keyStroke('h')">H</div>
            <div class="key" @click="keyStroke('j')">J</div>
            <div class="key" @click="keyStroke('k')">K</div>
            <div class="key" @click="keyStroke('l')">L</div>
            <div class="key" @click="keyStroke('z')">Z</div>
            <div class="key" @click="keyStroke('x')">X</div>
            <div class="key" @click="keyStroke('c')">C</div>
            <div class="key" @click="keyStroke('v')">V</div>
            <div class="key" @click="keyStroke('b')">B</div>
            <div class="key" @click="keyStroke('n')">N</div>
            <div class="key" @click="keyStroke('m')">M</div>
        </div>
        <div>
            <div @click="items[0] = 'f'">Enter</div>
            <div>Back</div>
        </div>
    </div>
    <client-only>
    <p>{{ words[Math.floor(Math.random() * words.length)] }}</p>
    </client-only>
</template>

<style>
body {

}
    .grid div {
        border: 1px solid #000;
        height: 50px;
        width: 40px;
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