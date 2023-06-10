<script setup lang="ts">
import * as T from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { onMounted, shallowRef } from 'vue'
import type { Props } from './types'
import { palette } from './theme'
import { createPie } from './pie'

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
  controls.enablePan = false
  controls.maxPolarAngle = Math.PI / 2
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
  // console.log(props.pieData)
  const { pieSvgDataUri } = createPie(props.pieData, 0, 200, 0, 0)
  // 加载 svg
  const svgLoader = new SVGLoader()
  svgLoader.load(pieSvgDataUri, (data) => {
    const group = new T.Group()
    data.paths.forEach((path, index) => {
      const material = new T.MeshStandardMaterial({ color: props.palette[index] })
      const shapes = SVGLoader.createShapes(path)
      // 创建每一片
      shapes.forEach((shape) => {
        const extrude = new T.ExtrudeGeometry(shape, {
          curveSegments: 256,
          steps: 2,
          depth: props.pieData[index].height,
          bevelEnabled: true,
          bevelThickness: 0.01,
          bevelSize: 0.01,
          bevelOffset: 0.0,
          bevelSegments: 1,
        })
        const mesh = new T.Mesh(extrude, material)
        mesh.rotateX(-Math.PI / 2)
        group.add(mesh)
      })
    })
    sceneRef.value.add(group)
  })
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
