const newman = require("newman")

newman.run({
    collection: "json-collection/egi.postman_collection.json",
    environment: "json-env/egi-env.json",
    reporters: ["cli", "htmlextra"]
})