<script setup>
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
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
  // mesh.rotateY(0.01)
  requestAnimationFrame(render)
}
render()

/**
 * 1. 创建一个 GUI 对象，调整 style 属性
 * 2. 调用 add 方法，创建一个交互界面
 */
const gui = new GUI()
gui.domElement.style.right = '0px'
gui.domElement.style.width = '300px'

// const obj = { x: 30, y: 60, z: 30 }
// gui.add(obj, 'x', 0, 100)
// gui.add(obj, 'y', 0, 100)
// gui.add(obj, 'z', 0, 100)

/**
 * 改变光照强度
 * 调用 name 方法设置属性名称
 * 调用 step 方法设置步长
 * 调用 onChange 方法添加回调函数
 * 调用 addColor 方法添加颜色交互截面
 */
gui.add(pointLight, 'intensity', 0, 2.0).name('平行光强度').step(0.1)
/**
 * 改变模型位置
 */
gui.add(mesh.position, 'x', 0, 200).onChange((v) => {
  console.log('x 坐标发生改变：', v)
})
gui.add(mesh.position, 'y', 0, 200)
gui.add(mesh.position, 'z', 0, 200)

gui.addColor(mesh.material, 'color').onChange((v) => {
  console.log('材质颜色发生改变：', v)
})
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
