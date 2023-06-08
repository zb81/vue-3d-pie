<script setup>
import { AxesHelper, BoxGeometry, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

// 创建三维场景
const scene = new Scene()

// AxesHelper 辅助观察的坐标系，红-x，绿-y，蓝-z
const axesHelper = new AxesHelper(150)
scene.add(axesHelper)

const geometry = new BoxGeometry(100, 100, 100)
// 使用漫反射材质
const material = new MeshLambertMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.7,
})
const mesh = new Mesh(geometry, material) // 网格模型对象Mesh
scene.add(mesh)

const pointLight = new PointLight(0xffffff, 1.0)
pointLight.position.set(400, 400, 400)
scene.add(pointLight)

const width = 700
const height = 500

// 视场角度、画布宽高比、近裁截面、远裁截面
const camera = new PerspectiveCamera(30, width / height, 1, 3000)
camera.position.set(300, 300, 300)
camera.lookAt(mesh.position)

const renderer = new WebGLRenderer()
renderer.setSize(width, height)
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

/*
  设置相机轨道控制器，监听相机改变，重新渲染
*/
const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener('change', (e) => {
  renderer.render(scene, camera)
  console.log('camera.position', camera.position)
})
</script>

<template>
  <div></div>
</template>
