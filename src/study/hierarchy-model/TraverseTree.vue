<script setup>
import { AxesHelper, BoxGeometry, Group, Mesh, MeshLambertMaterial, MeshPhongMaterial, PerspectiveCamera, PointLight, PointLightHelper, Scene, Vector3, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

// 批量创建高层楼
const group1 = new Group()
group1.name = '高层楼'
for (let i = 0; i < 5; i++) {
  const geometry = new BoxGeometry(20, 60, 10)
  const material = new MeshLambertMaterial({ color: 0x00ffff })
  const mesh = new Mesh(geometry, material)
  mesh.position.x = i * 30
  group1.add(mesh)
  mesh.name = `${i + 1}号楼`
}
group1.position.y = 30

// 批量创建洋房
const group2 = new Group()
group2.name = '洋房'
// 批量创建多个长方体表示洋房
for (let i = 0; i < 5; i++) {
  const geometry = new BoxGeometry(20, 30, 10)
  const material = new MeshLambertMaterial({
    color: 0x00ffff,
  })
  const mesh = new Mesh(geometry, material)
  mesh.position.x = i * 30
  group2.add(mesh) // 添加到组对象group2
  mesh.name = `${i + 6}号楼`
}
group2.position.z = 50
group2.position.y = 15

// 创建父节点
const model = new Group()
model.name = '小区房子'
model.add(group1, group2)
model.position.set(-50, 0, -25)

scene.add(model)

// 递归遍历 model 包含的所有节点
model.traverse((obj) => {
  console.log(obj.name)
  if (obj.isMesh) {
    obj.material.color.set(0xffff00)
  }
})
// 查找某个具体的模型
const nameNode = scene.getObjectByName('4号楼')
nameNode.material.color.set(0xff0000)

// 本地坐标和世界坐标
console.log('高层楼本地坐标', group1.position)
console.log('4号楼本地坐标', nameNode.position)
const worldPos = new Vector3()
nameNode.getWorldPosition(worldPos)
console.log('4号楼世界坐标', worldPos)
// 给对象添加局部坐标系
const ah = new AxesHelper(50)
nameNode.add(ah)
nameNode.visible = true

const pointLight = new PointLight(0xffffff, 1)
pointLight.position.set(150, 150, 150)
scene.add(pointLight)
const plh = new PointLightHelper(pointLight)
scene.add(plh)

const width = window.innerWidth
const height = window.innerHeight

const camera = new PerspectiveCamera(30, width / height, 1, 3000)
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
