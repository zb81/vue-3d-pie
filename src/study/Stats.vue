<script setup>
import { AxesHelper, BoxGeometry, DirectionalLight, DirectionalLightHelper, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, PointLightHelper, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

/** 创建长方体 */
function createBox(num) {
  for (let i = 0; i < num; i++) {
    const geometry = new BoxGeometry(5, 5, 5)
    const material = new MeshLambertMaterial({
      color: 0x00ffff,
    })
    const mesh = new Mesh(geometry, material)
    // 随机生成长方体xyz坐标
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    const z = (Math.random() - 0.5) * 200
    mesh.position.set(x, y, z)
    scene.add(mesh) // 模型对象插入场景中
  }
}

createBox(1000)

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
