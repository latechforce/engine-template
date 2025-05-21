import App, { type AppSchema } from "@latechforce/engine";

const schema: AppSchema = {
  name: "My Fantastic App",
  automations: [
    {
      name: "get-message",
      trigger: {
        service: "http",
        event: "get",
        path: "/message",
      },
      actions: [
        {
          service: "code",
          action: "run-typescript",
          name: "reply-message",
          code: String(function () {
            return { message: "Hello, world!" };
          }),
        },
      ],
    },
  ],
};

await new App().start(schema);
