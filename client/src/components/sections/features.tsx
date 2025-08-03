import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Zap, TrendingUp, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Rocket,
    title: "Launch Your Brand",
    description: "Strategic brand positioning that makes you stand out in crowded markets",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Target,
    title: "Targeted Campaigns",
    description: "Precision marketing that reaches your ideal audience at the right time",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "See measurable growth in engagement and conversions within weeks",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: TrendingUp,
    title: "Scale Your Growth",
    description: "Sustainable strategies that grow with your business ambitions",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Foster loyal audiences that become your brand ambassadors",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Position yourself as a thought leader in your field",
    color: "from-yellow-500 to-orange-600"
  }
];

export default function Features() {
  const titleRef = useScrollAnimation();
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-sparkg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sparkg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={titleRef as any} className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-100 font-bold">
              Why Choose
            </span>
            <br />
            <span className="bg-gradient-to-r from-sparkg-gold to-yellow-400 bg-clip-text text-transparent">SparkG Media?</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We don't just create content—we craft experiences that drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const cardRef = useScrollAnimation();
            return (
              <Card 
                key={index}
                ref={cardRef as any}
                className={`bg-white/5 backdrop-blur-sm border-white/10 hover:border-sparkg-gold/50 transition-all duration-300 hover:scale-105 group ${
                  index % 2 === 0 ? 'scroll-slide-left' : 'scroll-slide-right'
                }`}
              >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}