<script setup>
import { AxesHelper, BoxGeometry, Mesh, MeshPhongMaterial, PerspectiveCamera, PointLight, PointLightHelper, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const geometry = new BoxGeometry(100, 100, 100)
const material = new MeshPhongMaterial({
  color: 0xff0000,
  shininess: 100,
  specular: 0x444444,
})
const mesh = new Mesh(geometry, material) // 网格模型对象Mesh
mesh.position.set(50, 50, 50)
scene.add(mesh)

const pointLight = new PointLight(0xffffff, 1)
pointLight.position.set(150, 150, 150)
scene.add(pointLight)
const plh = new PointLightHelper(pointLight)
scene.add(plh)

const width = window.innerWidth
const height = window.innerHeight

const camera = new PerspectiveCamera(30, width / height, 1, 3000)
camera.position.set(300, 300, 300)
camera.lookAt(mesh.position)

const renderer = new WebGLRenderer()
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
  mesh.rotateY(0.01)
  // camera.rotateX(0.01)
  requestAnimationFrame(render)
}
render()
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
