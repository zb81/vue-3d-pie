<script setup>
import { AxesHelper, BoxGeometry, DirectionalLight, DirectionalLightHelper, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, PointLightHelper, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const geometry = new BoxGeometry(100, 100, 100)
const material = new MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.7,
})

/**
 * 创建一列
 */
// for (let i = 0; i < 10; i++) {
//   const mesh = new Mesh(geometry, material)
//   mesh.position.set(i * 200, 0, 0)
//   scene.add(mesh)
// }

/**
 * 创建阵列
 */
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const mesh = new Mesh(geometry, material) // 网格模型对象Mesh
    // 在XOZ平面上分布
    mesh.position.set(i * 200, 0, j * 200)
    scene.add(mesh) // 网格模型添加到场景中
  }
}

// 平行光源
const directionalLight = new DirectionalLight(0xffffff, 1)
directionalLight.position.set(150, 150, 150)
scene.add(directionalLight)
const dlh = new DirectionalLightHelper(directionalLight)
scene.add(dlh)

const width = 700
const height = 500

const camera = new PerspectiveCamera(10, width / height, 1, 20000)
camera.position.set(2000, 2000, 2000)
// camera.lookAt(0, 0, 0)
// camera.lookAt(1000, 0, 1000)

const renderer = new WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(1000, 0, 1000)
controls.update()

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
