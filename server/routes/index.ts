import { eventHandler, readBody } from 'h3';

export default eventHandler(async (event) => {
  const requestBody = await readBody(event);
  console.log('received request body:', requestBody);

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode("this is a "));
      controller.enqueue(encoder.encode("streamed response"));
      controller.close();
    },
  });

  return new Response(stream);
});
