<script setup>
import { AxesHelper, BoxGeometry, BufferAttribute, BufferGeometry, CircleGeometry, DoubleSide, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, PointLight, PointLightHelper, RepeatWrapping, Scene, SphereGeometry, TextureLoader, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import picUrl from './assets/girl.jpg'
import tileUrl from './assets/tile.jpeg'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const geometry = new PlaneGeometry(2000, 2000)
// const geometry = new BoxGeometry(100, 100, 100)
// const geometry = new SphereGeometry(60, 25, 25)
// const geometry = new CircleGeometry(60, 100)
const texLoader = new TextureLoader()
const texture = texLoader.load(tileUrl)
console.log(texture.colorSpace)
const material = new MeshBasicMaterial({ map: texture })
const mesh = new Mesh(geometry, material)
texture.wrapS = RepeatWrapping
texture.wrapT = RepeatWrapping
texture.repeat.set(12, 12)
mesh.rotateX(-Math.PI / 2)
scene.add(mesh)
console.log('uv', geometry.attributes.uv)

const pointLight = new PointLight(0xffffff, 1)
pointLight.position.set(150, 150, 150)
scene.add(pointLight)
const plh = new PointLightHelper(pointLight)
scene.add(plh)

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
