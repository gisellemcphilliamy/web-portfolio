"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ExternalLink, FileText, Building2 } from "lucide-react"
import { PhotoCarousel } from "@/components/photo-carousel"

const workExperience = [
  {
    title: "Graduate Teaching Assistant: Machine Learning",
    company: "Georgia Tech College of Computing",
    location: "Atlanta, GA",
    period: "Aug 2025 - Present",
    overallDescription:
      "Quiz Development / Edstem TA",
    bulletPoints: [
      "Host weekly office hours to guide 500+ students through homework + machine learning concepts",
      "In charge of ensuring students receive clarification for logistical and technical question on Edstem",
    ],
    technologies: [
      "Git", "OverLeaf", "ML Fundamentals", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn",
      "Python", "Teaching", "Mentoring"
    ],
    logo: "/gtech.png",
  },
  {
    title: "Machine Learning Engineering Intern",
    company: "Briteseed LLC.",
    location: "Chicago, IL",
    period: "May - Aug 2025",
    overallDescription:
      "Built a patent-pending hyperspectral CNN pipeline and deployed real-time edge inference on Jetson hardware.",
    bulletPoints: [
      "Designed a spectral-spatial CNN with multi-task heads, achieving >90% classification accuracy and initiating patent filing",
      "Engineered preprocessing (denoising filters, normalization) and jitter augmentation to improve signal quality and generalization",
      "Converted PyTorch models to ONNX, optimized with TensorRT, and deployed real-time inference on Jetson Orin Nano",
      "Integrated Jetson with a Raspberry Pi DAQ pipeline and presented results to the CEO, senior leadership, and patent counsel"
    ],
    technologies: [
      "PyTorch", "ONNX", "TensorRT", "NumPy", "Pandas", "Scikit-learn",
      "Python", "Jetson Orin Nano", "Raspberry Pi", "Linux", "Matplotlib", "Seaborn", "Git"
    ],
    logo: "/bs.JPG",
  },
  {
    title: "Undergraduate Researcher",
    company: "Skolnick Labs",
    location: "Atlanta, GA",
    period: "Nov 2024 - May 2025",
    overallDescription:
      "Researched transformer models for cancer genomics to predict immune resistance, antigen binding, and outcomes.",
    bulletPoints: [
      "Fine-tuned DNABERT, TransVCOX, and Nucleotide Transformer on oral-cancer genomic datasets",
      "Identified candidate immune-resistance biomarkers via PCA, clustering, and supervised learning",
      "Built reproducible preprocessing and training pipelines for large-scale genomic sequences",
      "Developed evaluation notebooks and visualizations to interpret model predictions and derive insights"
    ],
    technologies: [
      "PyTorch", "Hugging Face Transformers", "Scikit-learn",
      "NumPy", "Pandas", "Matplotlib", "Seaborn", "Python", "Jupyter"
    ],
    logo: "/gtech.png",
  },
  {
    title: "Software Engineering Intern - Rapid Development Team",
    company: "F5 Networks",
    location: "Seattle, WA",
    period: "May - Aug 2024",
    overallDescription:
      "Shipped a pluggable bug-triage framework and UI that streamlined fix recommendations for engineering teams.",
    bulletPoints: [
      "Architected a plugin system to analyze bug tickets and recommend likely fixes",
      "Implemented heuristic-based plugins to rank remediation strategies and accelerate resolution",
      "Wrote comprehensive tests and CI checks, enabling a smooth, low-risk deployment",
      "Presented a deep-dive to ~25 engineers and supported onboarding and adoption"
    ],
    technologies: [
      "Python", "Django", "PyTest", "JavaScript", "HTML", "CSS",
      "Git", "REST APIs", "SQL"
    ],
    logo: "/f5.png",
  },
  {
    title: "Software & Hardware Engineering Intern",
    company: "Briteseed LLC.",
    location: "Chicago, IL",
    period: "May - Aug 2022",
    overallDescription:
      "Built hardware–software tools to accelerate ex-vivo prototype testing and automated device data analysis.",
    bulletPoints: [
      "Developed and deployed a robotic test device, reducing ex-vivo test cycle time by >30%",
      "Automated trend analysis with MATLAB scripts, cutting analysis time by >90%",
      "Built a baseline logistic regression model to verify signal learnability and inform design",
      "Integrated Raspberry Pi + Arduino control with CNC shields and servos for precise motion control"
    ],
    technologies: [
      "MATLAB", "Python", "Scikit-learn", "Raspberry Pi", "Arduino",
      "GRBL", "UGS", "Linux"
    ],
    logo: "/bs.JPG",
  },
]

const projects = [
  {
    title: "S.A.M.E. (Software Application for Medical Emergencies)",
    description:
      "Mobile diagnosis app for Emory Hospital that guides trainees through emergency scenarios and ranks likely diagnoses in <750 ms with a k-NN–backed API.",
    bulletPoints: [
      "Led a 6-person team through full-stack design, development, and delivery",
      "Built a Firebase backend with RESTful CRUD endpoints following Agile practices",
      "Implemented k-nearest neighbors to estimate diagnosis likelihood and suggest treatments"
    ],
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "Figma", "Git", "Unit Testing", "Jira"],
    links: {
      github: "https://github.com/harshithlanka3/SAME-3311",
      live: ""
    }
  },  
  {
    title: "Textile Vision — CLIP-Conditioned Stable Diffusion",
    description:
      "Fine-tuned Stable Diffusion with CLIP conditioning to generate fashion images from text, achieving an Inception Score of 8.11 and improved semantic alignment via cross-attention layers.",
    bulletPoints: [
      "Built a text-to-image pipeline using CLIP embeddings + Stable Diffusion; evaluated with IS = 8.1 ± 1.1",
      "Implemented cross-attention conditioning and ran ablations on embeddings and data formats",
      "Fine-tuned with AdamW and optimized training under A100 GPU memory constraints"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "Pandas", "scikit-learn", "CLIP", "TensorBoard", "StableDiffusion"],
    links: {
      github: "https://github.gatech.edu/gmcphilliamy3/DL_fashion",
      paper: "/TextileVision.pdf",
    }
  },  
  {
    title: "Oh Waiter!",
    description:
      "Android Frogger-style arcade game built in Java with SOLID design practices, delivered over five sprints with robust tests and code reviews.",
    bulletPoints: [
      "Implemented core gameplay, collision logic, and level mechanics as an Android app",
      "Led a 5-person team through product design and sprint planning across five 2-week sprints",
      "Maintained quality with 30+ code reviews and 15 JUnit tests"
    ],
    technologies: ["Java", "Android Studio", "JUnit", "XML", "Figma", "Git"],
    links: {
      github: "https://github.gatech.edu/gOOD",
    }
  },
  {
    title: "Cardiovascular Disease Risk Prediction",
    description:
      "End-to-end ML pipeline to flag at-risk patients using a 70k-record cardiovascular dataset, with robust preprocessing, dimensionality reduction, and supervised/unsupervised modeling.",
    bulletPoints: [
      "Cleaned and standardized data, engineered BMI, and applied PCA while preserving >90% variance",
      "Benchmarked Logistic Regression and Random Forest; tuned RF to >75% accuracy",
      "Explored K-Means and GMM with elbow/silhouette/Davies–Bouldin, analyzed feature importances and implemented DBSCAN to reduce false negatives"
    ],
    technologies: [
      "Python", "NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter",
      "PCA", "LogisticRegression", "RandomForestClassifier", "KMeans", "GaussianMixture"
    ],
    links: {
      github: "https://github.com/TJeng7/CS7641-group-21",
    }
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section id="home" className="min-h-screen flex items-center justify-center px-6 hero-section">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-left">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold text-white">Giselle McPhilliamy</h1>
                <p className="text-xl text-white/90 font-medium">Computer Science + Machine Learning @ Georgia Tech</p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Passionate about machine learning, software engineering and building innovative solutions. Currently pursueing a Master's in Machine Learning 
                  at Georgia Tech. 
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 bg-transparent text-lg px-8 py-3"
                >
                  Get In Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-white/60 text-white/90 hover:bg-white/10 bg-transparent text-lg px-8 py-3"
                >
                  <a href="/Giselle_McPhilliamy.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-8">
                <Button variant="ghost" size="lg" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                  <a href="https://www.linkedin.com/in/giselle-mcphilliamy/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                  <a href="https://github.com/gisellemcphilliamy" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                  <a href="mailto:gisellemcphilliamy@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80">
                <div className="w-full h-full blob-shape overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="/photo.JPG"
                    alt="gisellemcphilliamy - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <PhotoCarousel />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                <p>
                Hi there, happy you are here! I am a Computer Science graduate student at Georgia Tech with a strong 
                foundation in Deep/Machine Learning, software engineering and full-stack development. I am interested 
                in the healthcare field and developing innovative technologies to improve patient outcomes. 
                </p>
                <p>
                My experience spans from curating data, training, developing and evaluating models to developing scalable 
                applications for the web. I am always eager to learn about new technologies and work on new projects. 
                </p>
                <p>
                When I am not working I also enjoy giving in my all on the pickleball court, exploring outside, eating at 
                the best restraints and cooking some delicious meals too.
                </p>
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <a href="/Giselle_McPhilliamy.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Experience</h2>
          </div>

          <div className="relative">
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-16">
              {workExperience.map((job, index) => (
                <div key={index} className="relative flex items-center gap-8">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-full border-4 border-green-600 flex items-center justify-center shadow-sm overflow-hidden">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={`${job.company} logo`}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Job content */}
                  <div className="flex-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                    <div className="flex flex-col space-y-4">
                      {/* Job Title and Company */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex items-center gap-2 text-green-600 font-semibold text-lg mb-4">
                          <Building2 className="h-5 w-5" />
                          {job.company}
                        </div>
                      </div>

                      {/* Location and Date with emojis */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <span>📍</span>
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📅</span>
                          <span>{job.period}</span>
                        </div>
                      </div>

                      {/* Overall Description */}
                      <div className="text-gray-700 leading-relaxed text-base">
                        <p>{job.overallDescription}</p>
                      </div>

                      {/* Bullet Points */}
                      <div className="text-gray-700 leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          {job.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-base">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-green-100 text-green-700 border-green-200 px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-gray-200"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl group-hover:text-green-600 transition-colors text-gray-900">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>

                  {/* Bullet Points */}
                  <div className="text-gray-700 leading-relaxed">
                        <ul className="list-disc list-inside space-y-2">
                          {project.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="text-base">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-green-200 text-green-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.links.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 hover:bg-green-600 hover:text-white border-green-600 text-green-600 bg-transparent"
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.links.live && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 hover:bg-gray-600 hover:text-white border-gray-600 text-gray-600 bg-transparent"
                      >
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    )}

                    {project.links.paper && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-gray-600 text-gray-600 bg-transparent"
                      >
                        <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Paper
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>

          <div className="flex justify-center gap-6">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 bg-transparent"
            >
              <a href="mailto:gisellemcphilliamy@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-3 bg-transparent"
            >
              <a href="https://www.linkedin.com/in/giselle-mcphilliamy/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-3 bg-transparent"
            >
              <a href="https://github.com/gisellemcphilliamy" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
