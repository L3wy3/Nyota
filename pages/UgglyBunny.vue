<script setup lang="ts">
import { ref } from 'vue'
import { useAnimations, useGLTF } from '@tresjs/cientos'

const { scene: model, animations } = await useGLTF('./scene.gltf')

const { actions } = useAnimations(animations, model)

const currentAction = ref(actions.Greeting)

// currentAction.value.play()

</script>

<template>
  <primitive :object="model" />
</template>