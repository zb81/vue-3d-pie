<script setup>
import { AxesHelper, GridHelper, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, RepeatWrapping, Scene, TextureLoader, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import reactUrl from './assets/react.png'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const geometry = new PlaneGeometry(1000, 1100)
const texLoader = new TextureLoader()
const texture = texLoader.load(reactUrl)
const material = new MeshBasicMaterial({
  map: texture,
  transparent: true,
})
// texture.offset.x += 0.5
texture.wrapS = RepeatWrapping
texture.wrapT = RepeatWrapping
texture.repeat.x = 10
texture.repeat.y = 10
// texture.offset.y += 0.5
// texture.wrapT = RepeatWrapping
const mesh = new Mesh(geometry, material)
mesh.rotateX(-Math.PI / 2)
mesh.position.y = 1
scene.add(mesh)

const gridHelper = new GridHelper(300, 25, 0x004444, 0x004444)
scene.add(gridHelper)

const width = window.innerWidth
const height = window.innerHeight

const camera = new PerspectiveCamera(30, width / height, 1, 10000)
camera.position.set(300, 300, 300)

const renderer = new WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

// 创建 stats 对象
const stats = new Stats()
// setMode 设置显示模式。帧率、渲染周期
document.body.appendChild(stats.domElement)
function render() {
  stats.update()
  texture.offset.x += 0.001
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
