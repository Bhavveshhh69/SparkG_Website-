import { Link } from "wouter";

export default function ValueProps() {
  const valueProps = [
    {
      number: "01",
      title: "Learn through expert-made playbooks and templates",
      description: "Download the exact strategies we've used to grow personal brands to 300k+ audiences and close 6-figure sales.",
      cta: "Explore Resources",
      link: "/resources"
    },
    {
      number: "02", 
      title: "Receive expert coaching, feedback and strategies",
      description: "Our membership gives you expert feedback, resources and a real support system so you actually stick with it and start seeing results.",
      cta: "Join the community",
      link: "/community"
    },
    {
      number: "03",
      title: "Empower your team or event to build influence online", 
      description: "Corporate trainings, in-house workshops, and brand strategy that help your team show up online with confidence, clarity, and influence.",
      cta: "Book a workshop",
      link: "/workshops"
    }
  ];

  return (
    <section className="py-20 bg-klowt-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            we help you turn your <em className="text-klowt-pink not-italic">personality</em><br />
            into your competitive advantage.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {valueProps.map((prop) => (
            <div key={prop.number} className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-klowt-blue/30 rounded-2xl p-8 h-full border border-klowt-border/20 hover:border-klowt-pink/30">
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-bold text-klowt-pink/20 mr-4">{prop.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                <p className="text-klowt-gray mb-6">{prop.description}</p>
                <Link href={prop.link}>
                  <button className="text-klowt-pink font-medium hover:underline group-hover:text-white transition-colors">
                    {prop.cta} →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
