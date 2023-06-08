<script setup>
import { AxesHelper, BoxGeometry, CircleGeometry, CylinderGeometry, DoubleSide, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene, SphereGeometry, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

// 长方体
const box = new BoxGeometry(100, 100, 100)
// 球体
const sphere = new SphereGeometry(50)
// 圆柱
const cylinder = new CylinderGeometry(50, 50, 100)
// 矩形平面
const plane = new PlaneGeometry(100, 50)
// 圆形平面
const circle = new CircleGeometry(50)
const material = new MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.6, side: DoubleSide })
const boxMesh = new Mesh(box, material)
boxMesh.position.set(50, 50, 50)
const sphereMesh = new Mesh(sphere, material)
sphereMesh.position.set(200, 50, 50)
const cylinderMesh = new Mesh(cylinder, material)
cylinderMesh.position.set(350, 50, 50)
const planeMesh = new Mesh(plane, material)
planeMesh.position.set(500, 25, 0)
const circleMesh = new Mesh(circle, material)
circleMesh.position.set(650, 25, 0)
scene.add(boxMesh, sphereMesh, cylinderMesh, planeMesh, circleMesh)

const w = window.innerWidth
const h = window.innerHeight
const camera = new PerspectiveCamera(30, w / h, 1, 5000)
camera.position.set(800, 300, 300)
camera.lookAt(400, 0, 0)

const renderer = new WebGLRenderer({})
renderer.setSize(w, h)
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

<style lang="scss" scoped></style>
