<script setup>
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

// 创建三维场景
const scene = new Scene()
// 创建一个长方体几何对象
const geometry = new BoxGeometry(100, 100, 100)
// 创建一个材质对象
const material = new MeshBasicMaterial({
  color: 0xff0000, // 0xff0000设置材质颜色为红色
})
// 创建网格模型，两个参数分别为几何体 geometry、材质material
const mesh = new Mesh(geometry, material) // 网格模型对象Mesh
// 设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 10, 0)
// 将网格模型添加到三维场景中
scene.add(mesh)

// 定义相机在网页上输出的 Canvas 画布尺寸
const width = 800
const height = 500

// 创建一个透视投影相机对象
// 视场角度、画布宽高比、近裁截面、远裁截面
const camera = new PerspectiveCamera(30, width / height, 1, 3000)
// 设置相机位置
camera.position.set(200, 200, 200)
// 将相机镜头对准物体
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
  <div>123</div>
</template>

<style lang="scss" scoped></style>
