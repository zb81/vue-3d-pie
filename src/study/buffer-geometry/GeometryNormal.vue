<script setup>
import { AxesHelper, BufferAttribute, BufferGeometry, DoubleSide, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, PointLightHelper, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const scene = new Scene()
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const geometry = new BufferGeometry()
/*
  一个矩形平面，可以至少通过两个三角形拼接而成，这两个三角形有两个顶点是重合的。
  注意三角形的正反面问题：从一个方向观察，两个三角形的顶点顺序都是顺时针或逆时针
*/
const vertices = new Float32Array([
  0, 0, 0, // 顶点1
  80, 0, 0, // 顶点2
  80, 80, 0, // 顶点3
  0, 80, 0, // 顶点4
])
const indexes = new Uint16Array([
  // 索引值对应 vertices 中的顶点坐标
  0, 1, 2, 0, 2, 3,
])
const normals = new Float32Array([
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
])
const attribute = new BufferAttribute(vertices, 3)
geometry.attributes.position = attribute
geometry.index = new BufferAttribute(indexes, 1) // 1 个为一组
geometry.attributes.normal = new BufferAttribute(normals, 3)
const material = new MeshLambertMaterial({ color: 0xffff00, side: DoubleSide })
const mesh = new Mesh(geometry, material)
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
