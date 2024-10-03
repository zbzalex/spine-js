const Spine = require("spine-js-esm-test")

describe('spine', () => {
    it('test', () => {
        
        // var loader = new Spine.AttachmentLoader("/assets/maneken/male/{name}.png");
        
        function FakeLoader(path) {
            this.path = path
        }

        FakeLoader.prototype.constructor = FakeLoader
        FakeLoader.prototype.destroy = function() {}
        FakeLoader.prototype.resolve = function(name) {
            var filename = this.path.replace('{name}', name)

            // TODO

            return filename
        }

        // fake loader
        var loader = new FakeLoader(
            '/path/to/assets/{name}.png'
        )

        expect(loader.resolve('head')).toBe('/path/to/assets/head.png')

        var skeletonJson = new Spine.SkeletonJson(loader)
        // skeletonJson.setScale(1)

        var skeletonData = skeletonJson.readSkeletonData({
            "bones": [],
            "slots": [],
            "skins": [],
            "animations": {},
        })

        expect("{\"bones\":[],\"slots\":[],\"skins\":[],\"animations\":[],\"defaultSkin\":null}").toBe(JSON.stringify(skeletonData))

        var skeleton = new Spine.Skeleton(skeletonData)

        expect(typeof skeleton.updateWorldTransform).toBe('function')
        expect(typeof skeleton.draw).toBe('function')

    })
})
