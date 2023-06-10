<script setup lang="ts">
import * as T from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, shallowRef } from 'vue'
import type { Props } from './types'
import { palette } from './theme'

const props = withDefaults(defineProps<Props>(), {
  orbitControlsEnabled: true,
  antialias: false,
  backgroundColor: '#1f2937',
  palette: () => palette,
})

const ctnRef = shallowRef<HTMLDivElement>()
const sceneRef = shallowRef<T.Scene>()
function initThree() {
  const { orbitControlsEnabled, antialias } = props
  const scene = new T.Scene()
  sceneRef.value = scene
  const al = new T.AmbientLight(0xffffff, 0.2)
  scene.add(al)
  const sl = new T.SpotLight(0xffffff, 0.75, 0, 0.1, 1)
  sl.position.set(10, 15, 10)
  sl.castShadow = true
  scene.add(sl)
  scene.add(new T.AxesHelper(5))

  const width = ctnRef.value!.clientWidth
  const height = ctnRef.value!.clientHeight
  const camera = new T.PerspectiveCamera(50, width / height, 0.1, 1000)
  camera.position.set(3, 3, 4)
  camera.lookAt(0, 0, 0)
  const renderer = new T.WebGLRenderer({ antialias, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  if (orbitControlsEnabled) {
    animate()
  }
  else {
    renderer.render(scene, camera)
  }
  ctnRef.value!.appendChild(renderer.domElement)
}

onMounted(() => {
  initThree()
})
</script>

<template>
  <div ref="ctnRef" class="container" :style="{ backgroundColor }"></div>
</template>

<style lang="scss" scoped>
.container {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
