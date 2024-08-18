<script setup>
import { TresCanvas, useRenderLoop } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from 'three'

import UgglyBunny from './UgglyBunny.vue';

const gl = {
  clearColor: '#F78B3D00',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  windowSize: true,
  
}
</script>
<template>
  <TresCanvas v-bind="gl" style="max-width: 50%;
    height: auto !important; position: relative">
    <TresPerspectiveCamera
    :position="[0, 9, 5]"
    :look-at="[0, 0, 0]"
  />
    <OrbitControls 
    />
    <Suspense>
      <UgglyBunny />
    </Suspense>
    <TresDirectionalLight
      color="#F78B3D"
      :position="[3, 3, 3]"
      :intensity="1"
    />
    <TresAmbientLight :intensity="2" />
  </TresCanvas>
  </template>