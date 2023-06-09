<script setup lang="ts">
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { AxesHelper, DirectionalLight, MeshLambertMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import tree from './models/bingdwendwen.glb'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const loader = new GLTFLoader()
loader.load(tree, (gltf) => {
  console.log('gltf 文件结构', gltf)
  console.log('gltf 场景属性', gltf.scene)
  scene.add(gltf.scene)
  gltf.scene.traverse((obj) => {
    if (obj.isMesh) {
      console.log('gltf默认材质', obj.material)
      // obj.material = new MeshLambertMaterial({ color: 0xffffff })
    }
  })
}, (e) => {
  console.log(e.loaded / e.total)
})

const w = window.innerWidth
const h = window.innerHeight
const camera = new PerspectiveCamera(60, w / h, 1, 3000)
camera.position.set(0, 1, 2)
camera.lookAt(0, 0, 0)

const dl = new DirectionalLight(0xffffff, 2)
dl.position.set(200, 200, 200)
scene.add(dl)

const renderer = new WebGLRenderer({ antialias: true })
renderer.setClearColor(0x444444, 1)
renderer.setSize(w, h)
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

function render() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
