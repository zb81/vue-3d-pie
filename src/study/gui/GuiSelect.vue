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

const obj = { bool: false }

// 创建 stats 对象
const stats = new Stats()
// setMode 设置显示模式。帧率、渲染周期
document.body.appendChild(stats.domElement)
function render() {
  stats.update()
  renderer.render(scene, camera)
  // 测试 bool，控制是否旋转
  if (obj.bool) {
    mesh.rotateY(0.01)
  }
  requestAnimationFrame(render)
}
render()

const gui = new GUI()
gui.domElement.style.right = '0px'
gui.domElement.style.width = '300px'

gui.add(pointLight, 'intensity', 0, 2.0).name('平行光强度').step(0.1)

gui.add(mesh.position, 'x', 0, 200).onChange((v) => {
  console.log('x 坐标发生改变：', v)
})
gui.add(mesh.position, 'y', 0, 200)
gui.add(mesh.position, 'z', 0, 200)

gui.addColor(mesh.material, 'color').onChange((v) => {
  console.log('材质颜色发生改变：', v)
})

/**
 * 从第三个参数开始，add 方法会根据这些参数形式，自动生成对应的交互界面
 * 1. 传入数组，生成下拉菜单
 * 2. 传入对象，生成下拉菜单
 * 3. 传入布尔值，生成单选框
 */
gui.add(mesh.position, 'y', [-100, 0, 100]).name('选择 y 坐标').onChange((v) => {
  console.log('y picked:', v)
})
gui.add(mesh.position, 'x', {
  靠左: -100,
  居中: 0,
  靠右: 100,
}).name('选择 x 坐标').onChange((v) => {
  mesh.position.x = v
})

gui.add(obj, 'bool').name('是否旋转').onChange((v) => {
  console.log('obj.bool:', v)
})
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
