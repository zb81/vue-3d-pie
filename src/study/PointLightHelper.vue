<script setup>
import { AmbientLight, AxesHelper, BoxGeometry, DirectionalLight, DirectionalLightHelper, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, PointLightHelper, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// 创建三维场景
const scene = new Scene()

// AxesHelper 辅助观察的坐标系，红-x，绿-y，蓝-z
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const geometry = new BoxGeometry(100, 100, 100)
// 使用漫反射材质
const material = new MeshLambertMaterial({
  color: 0x0000ff,
  transparent: true,
  opacity: 0.7,
})
const mesh = new Mesh(geometry, material) // 网格模型对象Mesh
mesh.position.set(50, 50, 50)
scene.add(mesh)

// 点光源
// const pointLight = new PointLight(0xffffff, 1.0)
// pointLight.position.set(100, 60, 50)
// scene.add(pointLight)

// 环境光
// const ambient = new AmbientLight(0xffffff, 0.8)
// scene.add(ambient)

// 平行光
const directionalLight = new DirectionalLight(0xffffff, 1)
// directionalLight.position.set(80, 100, 50)
// directionalLight.position.set(100, 100, 100)
directionalLight.position.set(0, 100, 0)
// directionalLight.target = mesh
scene.add(directionalLight)
const dlh = new DirectionalLightHelper(directionalLight)
scene.add(dlh)

/*
  点光源辅助观察
*/
// const plh = new PointLightHelper(pointLight, 10)
// scene.add(plh)
// // pointLight.position.set(100, 100, 100)
// pointLight.position.set(-400, -200, -300)

const width = 700
const height = 500

const camera = new PerspectiveCamera(30, width / height, 1, 3000)
camera.position.set(300, 300, 300)
camera.lookAt(mesh.position)

const renderer = new WebGLRenderer()
renderer.setSize(width, height)
// 渲染
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

/*
  设置相机轨道控制器，监听相机改变，重新渲染
*/
const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', (e) => {
  renderer.render(scene, camera)
})
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
