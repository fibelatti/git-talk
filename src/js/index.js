var gitgraph = new GitGraph({template: defaultTemplate});

gitgraph.template.commit.message.font = "normal 24pt Calibri";

var talk = gitgraph.branch("talk")
  .commit({ message: "Start Git Talk" })
  .commit()
  .commit({ message: "Give a quick introduction", detailId: "quick-introduction" });

var agenda = talk.branch("agenda")
  .commit({ message: "Show real life examples", detailId: "agenda-real-life-example" })
  .commit({ message: "Show the importance of commit messages", detailId: "agenda-commit-messages" })
  .commit({ message: "Give an example of the usual work flow", detailId: "agenda-usual-flow" })
  .commit({ message: "Resolve conflicts", detailId: "agenda-new-challenger" })
  .commit({ message: "Keep local copy up to date", detailId: "agenda-keeping-up-to-date" });

agenda.merge(talk, "").delete();

talk.commit({ message: "Show real life examples", detailId: "real-life-examples" }).commit();

var commitMessages = talk.branch("commit-messages")
  .commit({ message: "Show the importance of commit messages", detailId: "commit-messages" })
  .commit({ message: "Show sample commit message rules", detailId: "commit-messages-sample-rules" });

commitMessages.merge(talk, "").delete();

talk.commit({ message: "Give an example of the usual work flow", detailId: "usual-flow" });

talk.commit({ message: "Resolve conflicts", detailId: "conflict-resolution" });

talk.commit({ message: "Keep local copy up to date", detailId: "keeping-sync" });

talk.commit({ message: "Recommend further reading", detailId: "sources-and-recommended-reads" });

talk.commit("Questions?");

talk.commit("Finishes talk");
