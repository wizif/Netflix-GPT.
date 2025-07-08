//  https://netflix-gpt-fe7f2.web.app
.
AIzaSyCsy-fO-4yTjeo2pvpI8k3NymSEGxMJj_I


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



import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));