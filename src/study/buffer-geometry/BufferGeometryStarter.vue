<script setup>
import { AxesHelper, BufferAttribute, BufferGeometry, Line, LineBasicMaterial, LineLoop, LineSegments, PerspectiveCamera, PointLight, PointLightHelper, Points, PointsMaterial, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

// 创建一个空的几何体对象
const geometry = new BufferGeometry()
// 类型化数组创建顶点数据
const vertices = new Float32Array([
  0, 0, 0, // 顶点1坐标
  50, 0, 0, // 顶点2坐标
  0, 100, 0, // 顶点3坐标
  0, 0, 10, // 顶点4坐标
  0, 0, 100, // 顶点5坐标
  50, 0, 10, // 顶点6坐标
])
// 创建属性缓冲区对象
// 3个为一组，表示一个顶点的xyz坐标
const attribute = new BufferAttribute(vertices, 3)
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribute
// 点渲染模式
const pointsMaterial = new PointsMaterial({
  color: 0xffff00,
  size: 10.0, // 点对象像素尺寸
})
const points = new Points(geometry, pointsMaterial) // 点模型对象
scene.add(points)

// 线材质对象
const lineMaterial = new LineBasicMaterial({
  color: 0xff0000, // 线条颜色
})
// 创建线模型对象
const line1 = new Line(geometry, lineMaterial)
// scene.add(line1)
// 闭合线条
const line2 = new LineLoop(geometry, lineMaterial)
// scene.add(line2)
// 非连续线条
const line3 = new LineSegments(geometry, lineMaterial)
scene.add(line3)

const pointLight = new PointLight(0xffffff, 1)
pointLight.position.set(150, 150, 150)
scene.add(pointLight)
const plh = new PointLightHelper(pointLight)
scene.add(plh)

const width = window.innerWidth
const height = window.innerHeight

const camera = new PerspectiveCamera(30, width / height, 1, 3000)
camera.position.set(300, 300, 300)

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
  requestAnimationFrame(render)
}
render()
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
