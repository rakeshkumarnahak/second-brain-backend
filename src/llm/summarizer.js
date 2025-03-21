import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function summarise(inputContent) {
  console.log("Summarization in progress...");
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "You have been given a text in long from format. You need to summarise it by keeping all the details intact so that when someone studies it all the content gets revised in detail.\n\nContent: \nHey, there. Storytelling is one of the most powerful tools to hook your listeners and keep them glued to every word you say. But hey, a lot of the advice that is out there, make it sound way too complicated. But the truth is, storytelling is actually pretty simple if you know what really matters. If you just give me nine minutes, you'll discover the five storytelling techniques to tell insanely good stories. But before we do that, let me show you a quick example by John Krasinski, whom you might know from the Office. It's a 22nd story, so really short, but it's so powerful, by the end of today, you'll know exactly how to tell stories just like him. And then I said, yeah. And he said, says, who are you visiting here? I said, my wife. And he says, is she an actress? And I said, yeah. He said, would I know her? And I. I don't know, man. Her name's Emily Blunt. He goes, he goes, you. And I went, yeah. And he goes, you. You married Emily Blunt? And I go, yeah. And he goes like this. Okay, go. Did you notice what he did there? He didn't just summarize the events. Didn't say, oh, yeah, back then I was at customs and the agent asked me what I was doing, and I responded, I was an actor. Then he was very surprised. He doesn't do that. He doesn't summarize the events. Instead, he zoomed into the moment of the story. The best stories don't just summarize events. They don't stay at that helicopter level. They zoom into the moment. They take us into the trenches. They let us be part of that physical moment. The good thing is, it's not that difficult. I'm now going to show you five techniques that you can use in all of your stories. First, technique, location. Say where you are. The best stories start by stating the location. Where are you physically? Examples. Two weeks ago, I'm sitting on my couch in my living room, taking a deep breath. Or September 2019, I'm standing in \nfront of the conference room, ready to walk inside. Now, why does it matter to state the location? Because the moment you say conference room or living room, your audience \nwill start to visualize it. They're like, oh, yes, I know a conference room. And they start to visualize their version of that conference room. Now, beginner storytellers, \nthey often do the mistake that they give too many details. They're like, oh, in that conference room, there was a big table, a television, and. And a wooden floor. Like, don't do that, don't do that. It doesn't matter. Just state the location. As long as they can visualize it, it doesn't matter. All the details. They have their own version of that location. Second technique, actions. What are you doing in that specific moment of the story? Instead of giving way too much context about all the random stuff that doesn't matter, just say, what are you doing in that specific moment? That can be walking, biking, shouting, reading, waiting, whatever it is, just state the actions, state \nthe verbs. Examples. I'm in my office, I open my laptop and start reading a message by my manager. Or two weeks ago, I'm at the airport, waiting in line at security. And why does it matter to state the actions? Because it brings in forward momentum. It takes the listener right into the moment. When you do that, your audience will immediately \nknow that you won't waste their time. You're straight away taking them into the most important part of the story. Third technique, thoughts. What are you thinking? We as humans have thousands and thousands of thoughts every single day. A lot of those thoughts are hopes, dreams, plans, fears, worries, crazy thoughts. Now share some of those thoughts of that crucial moment of the story. Instead of saying, I was excited to meet my crush, say, I thought, ah, this will be so cool, right? Finally, I can see her after all that time. Or instead of saying, I was very disappointed about that presentation, say, I thought, oh man, this is bad, right? Everyone will think, now I'm stupid. I can never go back there. Do you see the difference? It's a tiny tweak, but it makes any story more interesting. But hey, a common mistake is that people share thoughts that sound too professional, too intellectual. They say something like, I thought this represents a supreme opportunity. Now, would your thoughts actually sound like that? Probably not, right? And so what you want to do is, when you share your thoughts, give us the raw, unfiltered thoughts. Give us those a little bit like, ranchy, juicy, a little bit neurotic thoughts. Now that will make your story much more relatable. Fourth technique, emotions. What are you feeling? The best stories, they're emotional. They take the listeners on this emotional journey. And now with the thoughts, with the previous technique, you know, now one technique to make it more emotional, but there's another one. The simplest way is to just state an emotion. So you say something like, I was disappointed. I was relieved, I was happy. Now that is pretty standard, right? That is what most people do, but it's not ideal because it is not really visual, right? When you hear someone saying, I was disappointed, well, you cannot visualize it. And so the better way Is to show the emotion. Show how it looks on the body, on the face. When you experience that emotion. Let me give you some examples. Instead of saying I was relieved, say in that moment I leaned backward, let out this big. Or instead of saying he was anxious, say he kept tapping his pen on the, on this table and he kept glancing up to the clock every few seconds. Do you see the difference? Showing the emotion makes it much more visual. It takes us into the specific moment of the story. Technique number \nfive, dialogue. What are you hearing? Many of your stories will have more than one character. Maybe a manager, your friend, a co worker, your dog, whoever it is. Now, what \ndid the character say in that crucial moment of the story? What were the exact words? Examples. Instead of saying, my friend was very disappointed, say in that moment, my friend looked at me and said, philipp, what on earth was that? Or instead of saying, my manager was very happy with my work, say in that moment, my manager looked at me and \nsaid, wow, that was really the best presentation you've ever given. Now do you see the difference? Dialogue is such a simple tool to make any story much more interesting. It is actually the tool that I use the most. But I guess there's just one thing to keep in mind. Similar as with the thoughts, share the dialogue that is a little bit more interesting, a little bit more juicy. If you say something like, in this moment, my manager said, well, I'm very dissatisfied with the inadequate execution of that project. \nWell, that would sound super boring, right? Instead, pick much more juicy, much more concise and catchy dialogue. All right, now that you know the five most important elements in storytelling, let's watch a quick one minutes video to see those elements in action. That story is by Sarah Willingham, who's a British entrepreneur, investor, and CEO of Nightcap. Now, when you watch the story, see how she zooms into the moment. Can you spot when she shares the location, the actions, the thoughts, the dialogue and the feelings? So in my mid-20s, I was running acquisitions for Pizza Express and walked into a meeting room. I was two minutes late for the meeting. And the person on the opposite side of the table, the lawyer, looked up and said, oh, thank goodness for that. Mine's white with one sugar, please. So I thought, okay, this is a moment. Walked round to the coffee, made him his coffee, put the coffee in front of him and said, would anybody else like a coffee? And nobody said anything. Nobody wanted one. I made myself a coffee and then sat back down again opposite him. And as he looked up, I watched the colour drain from his face as he realized this enormous assumption that he'd made. And it was such a beautiful moment in my career, really empowering when I sat there and realised that actually this moment where I'd had imposter syndrome, anyway, running a meeting like this. But I'd been completely misjudged by the people on the opposite side of the table, which was actually this incredible superpower, because guess who walked out with the deal. What an incredible storyteller, right? Today you learned the foundations. You learned how to tell insanely good stories. But, hey, there are also a few \nmore advanced storytelling techniques out there. In case you want to go deeper on this journey, I would suggest you check out this next video in which you learn how to be a better storyteller than 99% of the people. See you there.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: 'This text explains how to tell engaging stories using five key techniques. It emphasizes zooming into specific moments rather than summarizing events. Here\'s a detailed breakdown:\n\n**Core Idea:** Storytelling is a powerful tool that can be simplified by focusing on specific elements. The text outlines five techniques to make stories more captivating.\n\n**The Krasinski Example:** The text starts with an anecdote about John Krasinski recounting an interaction with a customs agent. The key takeaway is that he *showed* the moment rather than simply summarizing it.\n\n**Five Storytelling Techniques:**\n\n1.  **Location:** Establish the physical setting immediately. Instead of excessive detail, let the audience visualize their own version.\n    *   Example: "Two weeks ago, I\'m sitting on my couch in my living room..."\n2.  **Actions:** Describe what you were doing in that specific moment. Use verbs to create forward momentum and draw the listener in.\n    *   Example: "I\'m in my office, I open my laptop and start reading a message..."\n3.  **Thoughts:** Share your raw, unfiltered thoughts from that crucial moment, even if they\'re a bit "ranchy" or neurotic. Avoid overly intellectual or professional-sounding thoughts.\n    *   Example: Instead of "I thought this represents a supreme opportunity," say "I thought, \'Oh man, this is bad!\'"\n4.  **Emotions:** Instead of simply stating an emotion (e.g., "I was relieved"), *show* it through physical cues or reactions.\n    *   Example: Instead of "I was relieved," say "I leaned backward and let out this big sigh."\n5.  **Dialogue:** Use direct quotes to bring characters to life. Choose dialogue that is interesting, concise, and catchy, avoiding boring or overly formal language.\n    *   Example: Instead of "My manager was very happy with my work," say "My manager looked at me and said, \'Wow, that was really the best presentation you\'ve ever given.\'"\n\n**Sarah Willingham Example:** The text provides an example of Sarah Willingham, a British entrepreneur, showcasing these techniques in action. She shares a story about a meeting where she turned an assumption about her on its head.\n\n**Key Takeaways:**\n\n*   **Zoom into the moment:** Don\'t summarize; immerse the audience.\n*   **Visual language:** Use descriptive language that allows the audience to "see" the story.\n*   **Authenticity:** Share raw thoughts and emotions to make the story relatable.\n*   **Dialogue is powerful:** Use it to create interest and reveal character.\n\nIn essence, the text encourages storytellers to focus on specific details, bring their stories to life through vivid descriptions, and connect with their audience on an emotional level.\n',
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(inputContent);
  return result.response.text();
}
