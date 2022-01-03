

// scene
const scene = new THREE.Scene()

//Red cube
// Geometry
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// mesh is the physical object in the constructor is contains the geometry and material.
const mesh = new THREE.Mesh(geometry, material)

// add the mesh to the scene
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

// Camera - need to create a camera now.
const camera = new THREE.PerspectiveCamera(75 /*pov*/, sizes.width / sizes.height/*aspect ratio width and height - how much of the browser will the rendered fill*/)  // most common type of camera for three.js - contains 
camera.position.z = 3
camera.position.y = 1
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas:canvas
})

// set the size of the renderer to the same as aspect ratio
renderer.setSize(sizes.width, sizes.height)
// need to provide scene and camera to renderer
renderer.render(scene, camera)


