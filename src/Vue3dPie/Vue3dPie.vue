<script setup lang="ts">
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'
import { ref } from 'vue'

const boxColor = ref('#fff')

const boxOver = ({ over }) => {
  boxColor.value = over ? '#ff0000' : '#ffffff'
}
const boxClick = (e) => {
  console.log(e)
}
</script>

<template>
  <Renderer ref="renderer" :width="500" :height="500" antialias resize :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }" @pointer-over="boxOver" @click="boxClick">
        <LambertMaterial :color="boxColor" />
      </Box>
    </Scene>
  </Renderer>
</template>

<style lang="scss" scoped>
</style>
