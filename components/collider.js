AFRAME.registerComponent("flying-birds", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            var id = `hurdle${i}`
            var posX = Math.random() * 3000 + (- 1000)
            var posY = Math.random() * 2 + (- 1)
            var posZ = Math.random() * 3000 + (- 1000)
            var position = {
                x: posX, y: posY, z: posZ
            }
            this.flyingBirds(id, position)
        }
    },

    flyingBirds: (id,position) => {
        var birdEL = document.createElement("a-entity")
        var terrainEL = document.querySelector("#terrain")
        birdEL.setAttribute("id", id)
        birdEL.setAttribute("position", position)
        birdEL.setAttribute("scale", { x: 10, y: 10, z: 10 })
        birdEL.setAttribute("gltf-model", "./assets/models/flying-bird/scene.gltf")
        birdEL.setAttribute("animation-mixer", {})
        birdEL.setAttribute("static-body", {shape:"sphere",sphereRadius:5})
        birdEL.setAttribute("game-play", {elementId:`#${id}`})
        terrainEL.appendChild(birdEL)
    }
})