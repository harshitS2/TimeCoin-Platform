import {
  Briefcase,
  Camera,
  CircleEllipsis,
  GraduationCap,
  Heart,
  Languages,
  LucideCode,
  Music,
  Paintbrush,
  PenTool,
  ScrollText,
  Utensils,
} from "lucide-react";

const SkillCategories = () => {
  const categories = [
    {
      icon: <LucideCode />,
      title: "Programming",
      count: 2854,
      color: "text-indigo-500",
    },
    {
      icon: <Paintbrush />,
      title: "Design",
      count: 512,
      color: "text-blue-500",
    },
    {
      icon: <PenTool />,
      title: "Writing",
      count: 289,
      color: "text-cyan-500",
    },
    { icon: <Music />, title: "Music", count: 134, color: "text-green-500" },
    {
      icon: <Camera />,
      title: "Photography",
      count: 276,
      color: "text-teal-500",
    },
    {
      icon: <Languages />,
      title: "Language",
      count: 189,
      color: "text-teal-500",
    },
    {
      icon: <ScrollText />,
      title: "Marketing",
      count: 215,
      color: "text-yellow-500",
    },
    {
      icon: <Utensils />,
      title: "Cooking",
      count: 421,
      color: "text-yellow-500",
    },
    { icon: <Heart />, title: "Fitness", count: 360, color: "text-red-500" },
    {
      icon: <Briefcase />,
      title: "Career",
      count: 570,
      color: "text-orange-500",
    },
    {
      icon: <GraduationCap />,
      title: "Education",
      count: 1420,
      color: "text-rose-500",
    },
    {
      icon: <CircleEllipsis />,
      title: "Other",
      count: 932,
      color: "text-violet-500",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-10">
      {categories.map((category, index) => (
        <div
          key={index}
          className="group rounded-2xl p-6 border border-transparent hover:border-gray-300 transition-all duration-300 animate-fade-up animation-delay-0"
        >
          <div
            className={`w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${category.color}`}
          >
            {category.icon}
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">{category.title}</h3>
            <p className="text-sm text-gray-600">
              {category.count} active exchanges
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCategories;
