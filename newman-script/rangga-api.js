const newman = require("newman")

newman.run({
    collection: "json-collection/rangga.postman_collection.json",
    environment: "json-variables/rangga-env.json",
    globals: "json-variables/rangga-globals.json",
    reporters: ["cli", "htmlextra"]
})
