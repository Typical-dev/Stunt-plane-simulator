AFRAME.registerComponent("target-ring", {
    init: function () {
        for (var i = 1; i <= 20; i++){
            var id = `ring${i}`
            var posX = Math.random() * 3000 +(- 1000)
            var posY = Math.random() * 2 +(- 1)
            var posZ = Math.random() * 3000 +(- 1000)
            var position = {
                x:posX, y:posY, z:posZ
            }
            this.createRings(id,position)
        }
    },

    createRings: function (id,position) {
        var terrainEL = document.querySelector("#terrain")
        var ringEL = document.createElement("a-entity")
        ringEL.setAttribute("id", id)
        ringEL.setAttribute("position", position)
        ringEL.setAttribute("material", "color", "#FF0000")
        ringEL.setAttribute("geometry", { primitive: "torus", radius: 8 })
        ringEL.setAttribute("static-body", {shape:"sphere",sphereRadius:2})
        ringEL.setAttribute("game-play", {elementId:`#${id}`})
        terrainEL.appendChild(ringEL)
        //console.log(position)
    }
})