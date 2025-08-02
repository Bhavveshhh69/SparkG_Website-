export default function SocialProof() {
  return (
    <section className="py-20 bg-klowt-blue/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              used by over <em className="text-klowt-pink not-italic">10,000 people</em> to grow their personal brand online.
            </h2>
            <p className="text-lg text-klowt-gray mb-8">
              <strong className="text-white">We've helped build personal brands that attract 300k+ audiences, close six-figure deals, and drive over $4 million in inbound revenue.</strong>
            </p>
            <p className="text-klowt-gray">
              We work with ambitious founders, freelancers, and professionals who want more from their content, their career, and their impact. Whether you're scaling a business or just starting to show up online, we've built the strategies, playbooks, and support to help you grow with confidence.
            </p>
          </div>
          
          <div className="bg-klowt-dark/50 rounded-2xl p-8 border border-klowt-border/20">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-klowt-pink to-purple-500 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-white mb-4 italic">"Multiple inbound business leads and 65,000 impressions in the last 7 days."</p>
                <p className="text-klowt-gray mb-4">The Klowt team's teachings are INSANE. I'm truly building a brand on LinkedIn and I couldn't be more grateful for this community and everything I'm learning.</p>
                <div>
                  <p className="font-semibold text-white">Holly Hobbs</p>
                  <p className="text-klowt-gray text-sm">Founder - APPRENTIVA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
