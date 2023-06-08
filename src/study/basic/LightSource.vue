<script setup>
import { AxesHelper, BoxGeometry, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, Scene, WebGLRenderer } from 'three'

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
// mesh.position.set(100, 30, 10)
scene.add(mesh)

/*
  1. 创建光源，点光源、平行光、聚光灯光源；
  2. 设置光源位置；
  3. 将光源添加到场景中
*/
const pointLight = new PointLight(0xffffff, 1.0)
pointLight.position.set(400, 400, 400)
scene.add(pointLight)

const width = 700
const height = 500

// 视场角度、画布宽高比、近裁截面、远裁截面
const camera = new PerspectiveCamera(30, width / height, 1, 3000)
camera.position.set(300, 300, 300)
camera.lookAt(mesh.position)

// 创建渲染器对象
const renderer = new WebGLRenderer()
// 定义 three.js 渲染区域的尺寸
renderer.setSize(width, height)
// 渲染
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)

</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped>
</style>
