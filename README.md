# Nitro bug repro: request body stream 500s with new netlify preset

Repro steps:

1. `nitro dev`
2. `curl -X POST --data "hello world" http://localhost:3000`

Expected: response 200 with body "success", server logs "received request body: hello world"

Observed: response 500, server logs "[nitro] [request error] [unhandled] Response body object should not be disturbed or locked"
