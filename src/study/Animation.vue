<script setup>
import { AxesHelper, BoxGeometry, Clock, DirectionalLight, DirectionalLightHelper, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, PointLightHelper, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const geometry = new BoxGeometry(100, 100, 100)
const material = new MeshLambertMaterial({
  color: 0x0000ff,
  transparent: true,
  opacity: 0.7,
})
const mesh = new Mesh(geometry, material) // 网格模型对象Mesh
mesh.position.set(50, 50, 50)
scene.add(mesh)

const directionalLight = new DirectionalLight(0xffffff, 1)
directionalLight.position.set(150, 150, 150)
scene.add(directionalLight)
const dlh = new DirectionalLightHelper(directionalLight)
scene.add(dlh)

const width = 700
const height = 500

const camera = new PerspectiveCamera(30, width / height, 1, 3000)
camera.position.set(300, 300, 300)
camera.lookAt(mesh.position)

const renderer = new WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
// 设置了动画后，没必要再监听 change
// controls.addEventListener('change', (e) => {
//   renderer.render(scene, camera)
// })

const clock = new Clock()
function render() {
  const spt = clock.getDelta() * 1000
  // console.log('两帧渲染时间间隔(毫秒)', spt)
  // console.log('帧率FPS', 1000 / spt)
  renderer.render(scene, camera)
  mesh.rotateY(0.01)
  requestAnimationFrame(render)
}
render()
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
