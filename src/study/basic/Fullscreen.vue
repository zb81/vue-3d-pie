<script setup>
import { BoxGeometry, DirectionalLight, Mesh, MeshLambertMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

const scene = new Scene()
const geo = new BoxGeometry(80, 80, 80)
const material = new MeshLambertMaterial({ color: 0xff0000 })
const mesh = new Mesh(geo, material)
mesh.position.set(40, 40, 40)
scene.add(mesh)

const pl = new DirectionalLight(0xffffff, 0.9)
pl.position.set(40, 40, 40)
scene.add(pl)

const width = window.innerWidth
const height = window.innerHeight
const camera = new PerspectiveCamera(50, width / height, 1, 3000)
camera.position.set(200, 200, 200)
camera.lookAt(mesh.position)

const renderer = new WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

// canvas 高度动态变化
window.onresize = function() {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
