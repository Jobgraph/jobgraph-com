import blogHunterGatherers from "@/assets/blog-hunter-gatherers.jpg";
import blogFootballer from "@/assets/blog-footballer.jpg";
import blogProductivity from "@/assets/blog-productivity.jpg";
import blogSkillsFuture from "@/assets/blog-skills-future.jpg";
import blogNecessaryError from "@/assets/blog-necessary-error.jpg";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "is-work-unnatural",
    title: "Is Work Unnatural?",
    date: "April 14, 2026",
    category: "Thoughts",
    image: blogHunterGatherers,
    excerpt:
      "It's a strange thing to question something that dominates so much of our lives. The structures in which we work are artificial.",
    blocks: [
      { type: "h4", text: "Is the Way We Work Natural?" },
      { type: "p", text: "It's a strange thing to question something that dominates so much of our lives. Many workaholics would object to this premise right off the bat. Let's use another example first by comparison: going to the gym. That is not normal. There was never a point in our evolutionary past where we'd carve out time to build our muscles or lose weight. Our fitness would come from the tasks we did each day. It was, in some sense, a by-product." },
      { type: "p", text: "Work is much the same way. The structures in which we work are artificial. Yes, society would not function without it. We can view it as a necessity, like hunting and gathering was. How many jobs are essential, though? It's an uncomfortable question at first. But if it's the case that many jobs aren't, that's a lot of unhappy people who'd rather be… well, free!" },
      { type: "p", text: "Figures from the ONS suggest that over a fifth of UK adults are not looking for work. This means 9.2 million people aged 16–64 in the UK are not in work nor looking for a job. That seems startling, but it shouldn't be. At this point, the 9-to-5 grind is a cliche. It is not seen as a positive thing, definitely not something to aspire to. So is it surprising that people are turning away from work?" },
      { type: "p", text: "Some people love to work. It's the linchpin of their sense of purpose in life. But if you asked most people whether this was true for them, they'd say no. The painful reality is that most people work because they have to. They need the money. If they were able to pursue their passions, their lives would look very different. Their wellbeing would skyrocket, not to mention the litany of intangible improvements they'd also experience." },
      { type: "p", text: "AI is often billed as a threat — something that will replace or displace us. For many, displacement will be tantamount to freedom. Through this lens, the looming prospect of AI's disruption of work might be a liberating force." },
      { type: "h4", text: "A Better Balance" },
      { type: "p", text: "Since 2019, Zurich UK has offered all roles on a part-time or flexible basis (including job sharing). This led to a fivefold increase in the number of female part-time hires, which jumped from 23 to 119 per year. The company also used gender-neutral language in adverts." },
      { type: "p", text: "There are many people for whom full-time work is unappealing, but part-time work is perfect. A decreased need for full-time workers might empower new parts of the population. This is not just about the skills of the future. It's a counterintuitive sign of the new relationship humans will have with work going forward. Work will be a part of people's lives, a meaningful one, but will no longer dominate it in the same way." },
    ],
  },
  {
    slug: "what-if-everyone-was-the-best-footballer-in-the-world",
    title: "What if Everyone Was the Best Footballer in the World?",
    date: "March 28, 2026",
    category: "Thoughts",
    image: blogFootballer,
    excerpt:
      "Imagine that tomorrow everyone woke up with the footballing skill of Lionel Messi. What would happen next?",
    blocks: [
      { type: "h2", text: "Thought Experiment" },
      { type: "p", text: "Imagine that tomorrow everyone woke up and had the piano playing chops of Sergei Rachmaninoff or the footballing skill of Lionel Messi. What would happen next? Let's simulate some possibilities using the football example." },
      { type: "p", text: "Option 1: Everyone loses interest in football. Viewing figures plummet because it is totally demystified. Any person can play football at the highest level now, so who cares about watching it! Wages for football players drop to average levels because the supply of this skill is everywhere. The magic is gone, and so is the money." },
      { type: "p", text: "Option 2: Football explodes and becomes even more ubiquitous than it already is. Now, everyone is engaged. We all play it constantly. Other sports become less interesting to us. Now that this ability is widespread, we all want to do it as much as possible. There are many more leagues and orders of magnitude more professional footballers." },
      { type: "p", text: "Option 3: Nothing changes. We still watch football avidly. Footballers still get paid an abnormally high amount. The number of people playing football at the professional level stays, more or less, the same." },
      { type: "h2", text: "Nothing Changes!?" },
      { type: "p", text: "Option 3 seems counterintuitive, doesn't it? But let's dig into that. Most people can talk. Many people can talk really well. They have interesting things to say and are engaging conversationalists. Yet podcasts are everywhere. Often, we would gladly listen to a podcast with conversations less compelling than ones we could have ourselves. There are a huge number of musicians in the world. Yet, they all listen to music. In the case of concert pianists, they listen to pieces of immense complexity that they themselves can play at the same level. Clearly, there is something strange going on." },
      { type: "h2", text: "Hierarchies of Competence" },
      { type: "p", text: "AI, if it hasn't already, will allow us all to wake up one day as experts. Suddenly, our capability in a field will be astonishing. We can already generate artwork (arguably) on a par with any human artist. We can emulate the style, tone, and cadence of the great writers of history. Soon, we'll be able to create video content in the same way. We'll all be expert writers, artists, coders and directors." },
      { type: "p", text: "AI democratises skills but doesn't distribute the willingness to put effort into something. A tool is only as useful as the will of the person using it allows it to be. We consume things not because we can't do them ourselves but because we don't want to. It is simply easier to listen to an interesting conversation than to have one. There is a different kind of pleasure that comes from watching a football match than from playing in one." },
      { type: "p", text: "The most startling possible outcome is that very little will change. The baseline level of skill may skyrocket, but hierarchies of competence could remain unchanged. This was never a question of skill but rather, of desire, work ethic, commitment, and a litany of other intangible attributes that separate the people who succeed in an area from everyone else. The skill level difference between the people at the top of an industry or sport is negligible. It's about mindset." },
      { type: "p", text: "Even in a world where everyone has technical skills without trying, the best will continue to be the best, for more or less the same reasons as always." },
    ],
  },
  {
    slug: "why-arent-people-more-productive-yet",
    title: "Why Aren't People More Productive Yet?",
    date: "March 5, 2026",
    category: "Research",
    image: blogProductivity,
    excerpt:
      "With the meteoric ascent of AI, everyone is grappling with a pivotal question: how can AI help me do more with the hours in the day?",
    blocks: [
      { type: "p", text: "With the meteoric ascent of AI in the past 5 years, everyone, from CEOs helming corporate giants to team managers striving for efficiency to individuals hungry for more hours in their day, is grappling with a pivotal question: how can AI help me do more with the hours in the day?" },
      { type: "p", text: "Everyone has the same 24 hours in a day. We dedicate 8 of these to work and surrender another 8 to sleep. Slicing our time into thirds leaves precious few hours for everything else in our lives. So it is not surprising that productivity is a big topic on everyone's minds." },
      { type: "h3", text: "What Does Productivity Actually Mean?" },
      { type: "p", text: "Economists and politicians will focus on national outputs, and the dictionary definition is aligned with this. The rate at which a company or country makes goods. This view can be codified as:" },
      { type: "p", text: "Labour Productivity = Output / Hours Worked" },
      { type: "p", text: "Imagine an office clerk at the HM Passport Office racing against the clock to process a mountain of passport applications, or a Starbucks barista hurriedly crafting caramel macchiato Frappuccino's by the dozen. This perspective measures productivity in tangible outputs: How much can you achieve within a given timeframe?" },
      { type: "p", text: "But companies cannot limit their view of productivity to output alone. Direct output can be difficult to measure in many cases. So, indirect measures are used:" },
      { type: "p", text: "Financial metrics like labour or project costs offer a $-sign perspective on productivity: How efficiently is your money translating into results?" },
      { type: "p", text: "Customer satisfaction and Net Promoter Scores (NPS) reflect productivity through the prism of consumer approval: Are we delivering value that resonates with our customers?" },
      { type: "p", text: "Operational benchmarks, such as the average time to move from raw materials to shipped products, gauge productivity in the flow of production cycles: How swiftly do we turn concepts into commodities?" },
      { type: "p", text: "Quality scores focus not just on volume but also on the quality of the service or output being offered." },
      { type: "p", text: "These alternate vantage points underscore a broader understanding of productivity, particularly where it is difficult to measure the exact desired output and for organisations that understand that output isn't everything." },
      { type: "h3", text: "Early Indicators Show That AI Is Positively Impacting Productivity" },
      { type: "p", text: "We are seeing numerous early indicators of increased productivity as a result of AI, across a wide range of different professions." },
      { type: "h4", text: "Consultants Are Faster With AI" },
      { type: "p", text: "Early indicators show that consultant productivity can benefit significantly from AI. 758 consultants were divided into three groups: those with no AI access, those with GPT-4 AI access, and those with GPT-4 AI access, with an overview of prompt engineering. Some of the tasks they needed to complete were easily done with AI. On measuring their ability to carry out 18 realistic consulting tasks, consultants were found to be able to complete 12.2% more tasks on average, and they completed their tasks 25.1% more quickly. Additionally, these were found to produce significantly higher-quality results (more than 40% higher quality compared to those without AI). This was also found to benefit consultants across different skill levels. Those below the average performance levels saw performance increases of 43%, and those who were above the average performance level for consultants saw increases of 17% compared to their performance without AI." },
      { type: "p", text: "Other studies have shown that knowledge freelancers on Upwork are already being impacted by the rollout of AI assistants. Across the board, it was found that freelancers who offer services in occupations most affected by AI experienced reductions in both employment and earnings. The release of ChatGPT led to a 2% drop in the number of jobs available on the platform and a 5.2% drop in monthly earnings. Interestingly, it was found that offering high-quality services did not mitigate the negative effect of AI on freelancers, and in fact, early indications suggest that top employees are disproportionately hurt by AI." },
      { type: "h4", text: "Coders Are Utilising AI Assistants as Part of Their Workflows" },
      { type: "p", text: "Software engineers, data scientists, and coders are already adopting AI into their workflows to improve their own productivity. Products such as ChatGPT and Claude are being used to help developers ideate and solve complex problems, where previously they would have had to spend time carrying out manual research on websites like Stack Overflow. This isn't just hearsay but is starting to reflect in the data, as highlighted by an analysis carried out by machine learning engineer Ayhan Fuat Celik, who looked at the data shared by Stack Overflow. He visualised this data and found a definite fall in all metrics: page views, visits, questions asked, and votes." },
      { type: "p", text: "This analysis found that Stack Overflow lost about 50% of its traffic. However, the traffic data turned out to not account for a Google Analytics change. Accounting for this, the drop would be around 35%. Still, the most striking insight from the data is not traffic but the decrease in questions asked and upvotes." },
      { type: "p", text: "Stack Overflow highlighted that they saw an average traffic decrease of ~15% in April 2023, a month after the release of GPT-4 in March 2023. This is ironic, as many of the AI assistants being used have been trained on data from the likes of Stack Overflow, which has the world's richest programming Q&A training data. In July 2023, the CEO of Stack Overflow, Prashanth Chandrasekar, announced OverflowAI, a set of AI solutions including the integration of generative AI into their website, the integration of Stack Overflow in Microsoft Teams, and an IDE integration to bring Stack Overflow inside the place where developers get their coding done. Stack Overflow also predicts that this surge in usage of AI tools will simply result in new problems to be solved and new questions to be asked on their platform. They are betting on the quality of content, trust in content, and the power of community and human beings to create and curate content." },
      { type: "p", text: "GitHub Copilot is an example of a more direct, integrated tool for coders, autosuggesting entire blocks of code and learning through the massive repository of code already on GitHub. This digital coding partner is already shown to significantly reduce the time spent on coding tasks, with developers writing code up to 55% faster than they could without AI." },
      { type: "h4", text: "General Purpose AI Is Estimated to Impact All Roles" },
      { type: "p", text: "A large-scale study by OpenAI found that approximately 15% of all worker tasks in the US could be completed in at least half the time at the same level of quality, provided they have access to a Large Language Model (LLM), and this increased to up to 56% of all tasks when incorporating software built on top of LLMs. 80% of the U.S. workforce could have at least 10% of their work tasks affected by the introduction of GPTs, while around 19% of workers may see at least 50% of their tasks impacted." },
      { type: "p", text: "These results may be exciting, but they will also likely have substantial economic and societal ramifications. Business leaders will need to carefully examine how to adapt and whether to adopt these technologies, and this presents different choices to be made. AI threatens to indiscriminately disrupt incumbents and erode their competitive advantage, and so having a framework for making these decisions is vital." },
      { type: "h3", text: "Choices to Be Made" },
      { type: "p", text: "If a coder's productivity surges by 90%, it prompts a strategic crossroads: does this lead to reducing the workforce by a third, or does it pave the way to ramp up digital output by 90%? Yet, the strategic implications extend far beyond this binary choice. The technology does not determine the path taken. Leaders have the power to make different choices on how to adopt this technology, and there are many different approaches they could take:" },
      { type: "p", text: "Cost Cutting: New operating models, ways of working, working patterns, and the cutting back on legacy functions can support monetary savings, and some organisations will choose to absorb some or all of these savings in their bottom line." },
      { type: "p", text: "Cost Reallocation: Many organisations will choose to reallocate resources to growing areas of their business with higher returns, a complex transition that will likely involve reskilling or upskilling initiatives for those staff who are staying, firing staff who are no longer needed, and a whole array of new working practices, operating models, and investments." },
      { type: "p", text: "Value Expansion: This approach is about using the technology to do even more without significant reductions in existing activities. This enables diversification of offerings and an opportunity to tailor service to better meet evolving market needs." },
      { type: "p", text: "For leaders, the integration of AI into their operations is not a simple equation of productivity gains; it's a menu of strategic choices that balance efficiency, innovation, ethical considerations, and long-term sustainability. Additionally, most leaders will be aware of the hard truth that most technological transformations are much more painful than hoped. It isn't as simple as rolling out a new technology and waiting for the productivity benefits. This fact will play a significant part in the choices the leader ultimately makes." },
    ],
  },
  {
    slug: "what-are-the-skills-of-the-future",
    title: "What Are the Skills of the Future?",
    date: "February 6, 2026",
    category: "Thoughts",
    image: blogSkillsFuture,
    excerpt:
      "In collaborating with organisations across the globe, we frequently encounter the question: what skills will my people need?",
    blocks: [
      { type: "p", text: "In collaborating with numerous organisations across the globe, we frequently encounter questions such as, \"What are the skills of the future?\", \"What skills will my people need?\", and \"How will the work they do change?\"" },
      { type: "h3", text: "Predicting the Future" },
      { type: "p", text: "While these questions may seem straightforward, when we delve beyond stock answers, such as the need for better digital skills, their profound nature is revealed. Essentially, they seek to predict the future. Not quite as simple as one might think. Numerous variables come into play when attempting to answer these questions. These include technological advancements, their likely pace of progress and global adoption, the dynamics of hype cycles for each technology, the barrage of predictions from the media and specialists, and a technology environment that now enables an individual at home to develop groundbreaking innovations. Additionally, emerging business models, shifting consumer demands, and global challenges like climate change are all crucial factors to consider." },
      { type: "h3", text: "The Cost of Instant Insight" },
      { type: "p", text: "Understandably, individuals are in search of answers to these intricate questions, and fast, so they can make informed decisions for their businesses or personal progression. Staying ahead of the competition, whether it be vying for the same job position or a company striving to lead the market, often necessitates rapid decision-making. This urgency often leads to a common scenario for many, where solutions are sought through the simple act of pressing three keys: G, P, and T, followed by a moment of relief as one is greeted by the query, \"How can I help you today?\" from the world's most used AI assistant." },
      { type: "p", text: "If major decisions were not being made off the back of this information, this would be fine. But a reliance on \"instant gratification\" research such as this raises a problem. The issue arises when significant decisions, such as investment choices, selection of learning and development programmes, and the determination of cultural and workforce operational models, are based on this level of research." },
      { type: "p", text: "In a way, this dilemma is not new but has manifested in various forms over time. Whether it's conducting a quick Google search, perusing a polished consultant report, or delving into a think tank study, each of these artefacts promises to transform you into a \"5-minute master\" of any subject. However, these seemingly authoritative sources frequently depend on external data, and not just any data, but data of questionable quality." },
      { type: "h3", text: "Applying General Solutions to Specific Problems" },
      { type: "p", text: "The big problem with such an approach, of course, is the lack of context. If you hold the position of Chief People Officer within a company, whether it's a burgeoning startup or an established giant with a 500,000-strong workforce, you will be acutely aware that your organisation is unique. A generic answer ultimately will fall short of addressing your specific needs. It's only with a deep comprehension of your current workforce, including the individuals and their roles, the skills gaps and areas of strain, your approach to technology, and, crucially, your organisational culture, that you can even begin to contemplate forecasting the future." },
      { type: "p", text: "It's also crucial to recognise a fact that we all know, but find much harder to utilise. People aren't just about skills. While the prevailing message sold to organisations worldwide today by leading companies and experts focuses predominantly on skills, this perspective is overly simplistic. Individuals are not merely repositories of skills; they have capabilities and the capacity to engage in activities that drive objectives forward. Some tasks may be routine and uninspiring, others creative and stimulating, and certain activities might not even be considered work in the traditional sense, yet significantly impact culture. Informal interactions, such as watercooler conversations, office kitchen chats, or virtual coffee calls, assisting colleagues, and building rapport, are invaluable for fostering team morale and unity. People have goals, aspirations, and unique personalities, highlighting the human aspect of the workplace and the importance of human discretionary effort." },
      { type: "p", text: "Indeed, numerous organisations have embraced the skills-centric approach, deploying HR tools that allow employees to update their skill sets. Platforms such as LinkedIn further popularise this trend with skills tags, ostensibly simplifying the process of showcasing and discovering professional capabilities. While this tells us something, it is far from a complete or comprehensive view of capability. The reliance on self-reporting introduces a layer of subjectivity; people are busy and so won't update their skills regularly. The tagging system, while helpful in theory, raises questions about its effectiveness and accuracy. Do people really fill out their skills on these platforms? Are these measures accurate reflections of an individual's true abilities and contributions?" },
      { type: "h4", text: "Decoding the DNA of Your Workforce" },
      { type: "p", text: "So, what's the solution? The key is to leverage the strengths that already exist within your organisation: the relationships you have with others both inside and outside. This can and should be done in addition to traditional skills and competency based data on the workforce. The goal is to comprehend the workforce more holistically, gaining insight into daily tasks, preferences, and sources of frustration – individualistic and social qualities that go beyond skills. This approach still draws on external data and market trends. But it also encourages a nuanced strategy where such information is considered within the specific context of your own organisation. By combining a better understanding of your workforce's unique position with broader industry insights, it will be possible to develop a more informed and effective workforce strategy for navigating the future. Recent advances in generative AI now offer new insights and ways of understanding the world of work." },
    ],
  },
  {
    slug: "necessary-error-in-organisations",
    title: "Necessary Error in Organisations",
    date: "January 14, 2026",
    category: "Thoughts",
    image: blogNecessaryError,
    excerpt:
      "Our species owes its triumph to one secret weapon: the mistake. The same can be said for the DNA of organisations.",
    blocks: [
      { type: "h3", text: "What Makes Humans Successful?" },
      { type: "p", text: "Our species owes its triumph to one secret weapon: the mistake. Glitches in the systems of our DNA create diversity among our species. This in-built inefficiency machine is the injection of randomness that allows things to change, not in a thought-out way but through often brutal trial and error. It holds within it a hidden adaptability that doesn't become obvious until the changing environment demands it. This, in some sense, is redundancy or slack. For long periods, there is no immediate benefit. Yet, it keeps us in the game when the rules of the game shift without warning." },
      { type: "p", text: "The same can be said for the DNA of organisations. Successful organisations have slack. They have error. Apparent inefficiencies – underperforming staff, slack on the team due to automation – could be the very reason an organisation grows. Variety is the antidote to uncertainty. It gives you options. It's a competitive advantage." },
      { type: "p", text: "How do you know your organisation has hidden adaptability in it? You don't, because you can't measure it. However, if your workforce is varied, including when it comes to productive output, you'll have the best chance of being future-proof. Embracing variability and not over-optimising for efficiency can foster an environment ripe for innovation." },
      { type: "h3", text: "People Don't Need to be Productive" },
      { type: "p", text: "An employee's productivity is not an accurate measure of their contribution. One innovative suggestion or creative idea can be the catalyst for immense productivity on the level of the whole company, even if that individual contributes little more than that." },
      { type: "p", text: "Productivity is about doing things the right way. But it says nothing about what the right thing to do actually is. For that, you need trial and error, and for error, you need humans." },
      { type: "p", text: "It's a well-trodden notion that one learns more from their mistakes than their successes. An often overlooked part of this is that sometimes what seems like a mistake on the surface is actually a stumbled-upon innovation or paradigm shift. This is the essence of human creativity – a delicate dance between error and elegance." },
      { type: "p", text: "Humans don't need to be productive. They need to be human." },
      { type: "h4", text: "More Than a Bag of Skills" },
      { type: "p", text: "Experts thought that AI would replace the more simple jobs first. There is something intuitive about that assumption. But it now seems wrong. Some remarkable feats of the mind are among the easiest for AI to replicate and improve upon. Yet, the things we take for granted, the effortless tasks, are still out of reach for AI. By extension, some jobs that were or are sought after might be pointless soon." },
      { type: "p", text: "Moravec's paradox is a phenomenon observed by robotics researcher Hans Moravec, in which tasks that are easy for humans to perform (e.g. motor or social skills) are difficult for machines to replicate, whereas tasks that are difficult for humans (e.g. performing mathematical calculations or large-scale data analysis) are relatively easy for machines to accomplish." },
      { type: "p", text: "A person might spend most of their life mastering a skill. They dedicate themselves to it. Sacrifice in the name of it. It's complex and tough to do for a human. It's natural to do this because it feels good. Being able to do something special, unusual, or rare enough to distinguish yourself among our immediate circle is appealing. But as we enter an era in which so many skills are carried out and mastered by AI, we have to ask ourselves: what are humans without this?" },
      { type: "p", text: "For a long time, we, as a species, have attached ourselves to notions of skill acquisition and productivity. Maybe that misses the point. It is us trying to emulate what a machine or AI should be doing. The things that distinguish humans from AI might be the basics. Simple things – easily overlooked and often taken for granted." },
    ],
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
